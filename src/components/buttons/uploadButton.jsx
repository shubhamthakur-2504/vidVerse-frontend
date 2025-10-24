"use client"
import React, { useState, useEffect } from 'react'
import { gernalFetch, gernalPost, gernalDelete } from '@lib/utils/functions'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { usePathname } from 'next/navigation'

export default function UploadButton() {

    const currentPath = usePathname()
    const router = useRouter()
    const loggedStatus = useSelector((state) => state.userData.isLoggedIn)

    const handleUploadClick = () => {
        if (!loggedStatus) {
            toast.error("Login to upload, redirecting...", { autoClose: 1000, theme: "dark", position: "top-center" });
            router.replace(`/auth/login?redirect=${encodeURIComponent(currentPath)}`)
            return
        }
        router.push('/upload/videos')
    }

    return (

        <button
            onClick={handleUploadClick}
            className={"bg-red-600 text-white font-bold hover:bg-[#ff1d1d] p-2 rounded-lg w-[10vw] cursor-pointer"}>
            Upload
        </button>

    )
}
