"use client"
import React from 'react'

export default function PlayVideo({videoSrc}) {
    return (
        <div className='border border-amber-400 w-[100%]'>
            <video src={videoSrc} controls autoPlay className='w-[100%]' controlsList="nodownload"
                onContextMenu={(e) => e.preventDefault()}></video>
        </div>
    )
}
