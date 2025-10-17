"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
export default function UserProfileData() {
  const router = useRouter()
  let userData = useSelector((state) => state.userData)
   
  if (!userData.isLoggedIn || !userData.userData) {
    useEffect(() => {
    if (userData.isLoggedIn == false || userData.userData == null) {
      router.push("/auth/login");
    }
  }, [userData === null]);
    return null; 
  }
  userData = userData.userData
  return (
    <div className='flex items-center md:gap-[10vw] gap-[7vw]'>
      <div style={{ borderRadius: "50%" }} className=' border-[2px] border-[#AD49E1] overflow-hidden '>
        <img src={`${userData.avatarUrl}`} alt="cover" className='w-20 h-20 md:w-36 md:h-36 ' />
      </div>
      <div>
        <div>
          <h1 className='text-5xl font-bold'>{userData.userName}</h1>
        <h1 className='text-xl italic'>{userData.fullName}</h1>
        </div>
        <div className='flex gap-2 mt-2'>
        <p><span className='font-bold'>1</span> <span className='italic text-sm'>posts</span></p>
        <p><span className='font-bold'>1</span> <span className='italic text-sm'>followers</span></p>
        <p><span className='font-bold'>1</span> <span className='italic text-sm'>following</span></p>
      </div>
      </div>
      
    </div>
  )
}
