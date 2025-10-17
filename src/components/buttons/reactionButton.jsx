"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import likeIcon from '/public/like.svg'
import dislikeIcon from '/public/dislike.svg'
import likedIcon from '/public/liked.svg'
import dislikedIcon from '/public/disliked.svg'
import { gernalFetch, gernalPost, gernalDelete } from '@lib/utils/functions'
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux'
import { useRouter, usePathname } from 'next/navigation';

export default function ReactionButton({ targetId, targetType }) {
    const currentPath = usePathname()
    const router = useRouter()
    const loggedStatus = useSelector((state) => state.userData.isLoggedIn)
    const [likeCount, setLikeCount] = useState(0);
    const [likeStatus, setLikeStatus] = useState(false);
    const [dislikeStatus, setDislikeStatus] = useState(false);


    useEffect(() => {
        const fetchLikeCount = async () => {
            try {
                const count = await gernalFetch(`reaction/${targetId}/count?targetType=${targetType}`);
                console.log("Like count: ",count);
                if (count && typeof count.likes === 'number') {
                    setLikeCount(count.likes);
                } else {
                    setLikeCount(0); // Default to 0 if count is not available
                }
            } catch (error) {
                console.error("Failed to fetch like count:", error);
                setLikeCount(0); // Default to 0 on error
            }
        }

        const fetchReactionStatus = async () => {
            if (loggedStatus) {
                try {
                    const status = await gernalFetch(`reaction/${targetId}?targetType=${targetType}`);
                    console.log("Reaction status: ",status);
                    if (status.status == 'none') {
                        setLikeStatus(false);
                        setDislikeStatus(false);
                        return
                    } else if (status.status == 'like') {
                        setLikeStatus(true);
                        setDislikeStatus(false);
                        return
                    } else if (status.status == 'dislike') {
                        setLikeStatus(false);
                        setDislikeStatus(true);
                        return
                    }
                } catch (error) {
                    console.error("Failed to fetch reaction status:", error);
                }
            }
        }

        fetchReactionStatus();
        fetchLikeCount();
    }, [targetId, targetType]);


    const handleReaction = async (e) => {
        if (!loggedStatus) {
            toast.error("Login to subscribe, redirecting...", { autoClose: 1000, theme: "dark", position: "top-center" });
            router.replace(`/auth/login?redirect=${encodeURIComponent(currentPath)}`)
            return
        }
        const type = e.currentTarget.dataset.type
        console.log(type);
        console.log(typeof type);
        
        
        try {
            if (type === "like") {
                if (likeStatus) {
                    try {
                        console.log("hit liked like");
                        
                        const res = await gernalDelete(`reaction/${targetId}`, { targetType: targetType })
                        if (res.status === 200 || res.status === 204 || res.success === true) {
                            setLikeStatus(false)
                            setLikeCount(prevCount => prevCount - 1)
                            toast.success("Like removed", { autoClose: 300, theme: "dark", position: "top-right" });
                        }
                    } catch (error) {
                        setLikeStatus(true)
                        toast.error("Failed to remove like", { autoClose: 300, theme: "dark", position: "top-right" });
                    }
                } else {
                    try {
                        console.log("hit like");
                        const res = await gernalPost(`reaction/${targetId}`, { targetType: targetType, isLike: true })
                        if (res.status === 200 || res.status === 201 || res.success === true) {
                            setLikeStatus(true)
                            setLikeCount(prevCount => prevCount + 1)
                            setDislikeStatus(false)
                            toast.success("Liked", { autoClose: 300, theme: "dark", position: "top-right" });
                        }
                    } catch (error) {
                        setLikeStatus(false)
                        toast.error("Failed to like", { autoClose: 300, theme: "dark", position: "top-right" });
                    }
                }
            } else if (type === "dislike") {
                if (dislikeStatus) {
                    try {
                        console.log("hit disliked dislike");
                        const res = await gernalDelete(`reaction/${targetId}`, { targetType: targetType })
                        if (res.status === 200 || res.status === 204 || res.success === true) {
                            setDislikeStatus(false)
                            toast.success("Dislike removed", { autoClose: 300, theme: "dark", position: "top-right" });
                        }
                    } catch (error) {
                        setDislikeStatus(true)
                        toast.error("Failed to remove dislike", { autoClose: 300, theme: "dark", position: "top-right" });
                    }
                } else {
                    try {
                        console.log("hit dislike");
                        const res = await gernalPost(`reaction/${targetId}`, { targetType: targetType, isLike: false })
                        if (res.status === 200 || res.status === 201 || res.success === true) {
                            setDislikeStatus(true)
                            if (likeStatus) {
                                setLikeCount(prevCount => prevCount - 1)
                            }
                            setLikeStatus(false)
                            toast.success("Disliked", { autoClose: 300, theme: "dark", position: "top-right" });
                        }
                    } catch (error) {
                        setDislikeStatus(false)
                        toast.error("Failed to dislike", { autoClose: 300, theme: "dark", position: "top-right" });
                    }
                }
            }
        } catch (error) {
            toast.error("Action failed", { autoClose: 300, theme: "dark", position: "top-right" });
            console.log(error);
        }
    }
    return (

        <div className='flex bg-[#131213] p-1 justify-between items-center rounded-2xl'>
            <div className='flex justify-center items-center m-1 pr-1.5 border-r-3 border-[#000000]'>
                <button data-type = "like" onClick={handleReaction} className='flex gap-0.5'><Image src={likeStatus ? likedIcon : likeIcon} alt="Like" width={20} height={20} className="w-10 h-9 rounded-2xl transform hover:scale-110 transition-transform duration-200" /><span className='text-2xl pt-1 pl-2'>{likeCount}</span></button>
            </div>
            <div className='flex justify-center items-center m-1'>
                <button data-type = "dislike" onClick={handleReaction} className='flex gap-0.5'><Image src={dislikeStatus ? dislikedIcon : dislikeIcon} alt="Dislike" width={20} height={20} className="w-10 h-9 rounded-2xl transform hover:scale-110 transition-transform duration-200" /></button>
            </div>
        </div>

    )
}
