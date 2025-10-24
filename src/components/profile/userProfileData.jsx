"use client"
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { gernalFetch, fetchVideos } from '@lib/utils/functions'
export default function UserProfileData() {
  const router = useRouter()
  const currentPath = usePathname()
  let userData = useSelector((state) => state.userData)
  const [postCount, setPostCount] = useState(0)
  const [followersCount, setFollowersCount] = useState(0)
  const [followingCount, setFollowingCount] = useState(0)

  useEffect(() => {
    if (userData.isLoggedIn === false || userData.userData === null) {
      router.replace(`/auth/login?redirect=${encodeURIComponent(currentPath)}`)
    }
    if (!userData?.isLoggedIn || !userData?.userData) {
      return;
    }
  }, [userData, router, currentPath]);

  const user = userData.userData

  useEffect(() => {

    if (!userData?.isLoggedIn || !userData?.userData) return;

    if (userData.isLoggedIn === true) {
      const countPosts = async () => {

        const post = await fetchVideos("videos/getmyvideos", true);
        setPostCount(post.length);

      }

      const followersCount = async () => {

        let followers = await gernalFetch(`subscription/subscriberscount/${user._id}`, false, cookieStore)

        if (followers && followers.count > 999999) {
          followers = followers.count / 1000000
          setFollowersCount(`${followers}M`)
        } else if (followers && followers.count > 999) {
          followers = followers.count / 1000
          setFollowersCount(`${followers}k`)
        } else {
          setFollowersCount(followers.count)
        }
      }

      const followingCount = async () => {

        let following = await gernalFetch(`subscription/mysubscriptions`, false, cookieStore)

        if (following && following.count > 999999) {
          following = following.count / 1000000
          setFollowingCount(`${following.length}M`)
        } else if (following && following.count > 999) {
          following = following.count / 1000
          setFollowingCount(`${following.length}k`)
        } else {
          setFollowingCount(following.length)
        }
      }

      countPosts();
      followersCount();
      followingCount();

    }
  }, [userData])


  return (
    <div className='flex items-center md:gap-[10vw] gap-[7vw]'>
      <div style={{ borderRadius: "50%" }} className=' border-[2px] border-[#AD49E1] overflow-hidden '>
        <img src={`${user.avatarUrl}`} alt="cover" className='w-20 h-20 md:w-36 md:h-36 ' />
      </div>
      <div>
        <div>
          <h1 className='text-5xl font-bold'>{user.userName}</h1>
          <h1 className='text-xl italic'>{user.fullName}</h1>
        </div>
        <div className='flex gap-2 mt-2'>
          <p><span className='font-bold'>{postCount}</span> <span className='italic text-sm'>posts</span></p>
          <p><span className='font-bold'>{followersCount}</span> <span className='italic text-sm'>followers</span></p>
          <p><span className='font-bold'>{followingCount}</span> <span className='italic text-sm'>following</span></p>
        </div>
      </div>

    </div>
  )
}
