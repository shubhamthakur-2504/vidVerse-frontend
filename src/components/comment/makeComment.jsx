"use client"
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import apiClient from '@lib/axios/api'
import { useRouter } from 'next/navigation'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { setCommentPosted } from '@lib/features/commentPostedSlice'

export default function MakeComment({ source }) {
    const router = useRouter()
    const dispatch = useDispatch()
    const [comment, setComment] = useState("")
    const hiddenStatus = comment.trim().length === 0
    const isLoggedIn = useSelector((state) => state?.userData.isLoggedIn)
    let avatarUrl = null
    if (isLoggedIn) {
        avatarUrl = useSelector((state) => state?.userData.userData.avatarUrl)
    }
    const handleComment = (e) => {
        setComment(e.target.value)

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formElements = e.target.elements

        const comment = new FormData();
        comment.append("content", formElements.comment.value)
        try {            
            const res = await apiClient.post(`videos/createcomment/${source}`, comment, {
                withCredentials: true
            })
            if(res.status === 200){
                console.log("comment posted successfully");
                dispatch(setCommentPosted(true))
            }
            formElements.comment.value = ""
            setComment("")
            toast.success("comment posted",{autoClose:1000,theme:"dark"});

        } catch (error) {
            if (error.response?.status === 401) {
                router.push("/auth/login");
            }
            toast.error(`${error.response?.data.message}`,{autoClose:2000,theme:"dark"})
        }
    }
    return (
        <>
            {isLoggedIn ? <div className='flex justify-center items-center w-full  p-3 gap-1'>
                <ToastContainer />
                <div>
                    <div className='rounded-full w-10 h-10 bg-black overflow-hidden'>
                        <img src={`${avatarUrl}`} alt="owner avatar" className='w-10 h-10' />
                    </div>
                </div>
                <form onSubmit={handleSubmit} className='w-full'>
                    <textarea name="comment" id="comment" rows={2} className='rounded-xl w-full bg-[#212121] p-3' placeholder='Any thought to share?...' onChange={handleComment}></textarea>
                    {!hiddenStatus && <div className='flex justify-end ml-3 gap-2'>
                        <button className='bg-red-500 text-center text-sm rounded-xl p-2 hover:bg-red-700' type='reset'>cancel</button>
                        <button className='bg-blue-500 text-center text-sm rounded-xl p-2 hover:bg-blue-700' type='submit'>comment</button>
                    </div>}
                </form>
            </div>
                :
                <div>
                    log in to comment
                </div>}
        </>
    )
}
