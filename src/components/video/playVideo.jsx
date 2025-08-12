"use client";
import React, { useRef, useEffect } from 'react';

export default function PlayVideo({ videoSrc }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Optional: log to debug
      console.log("videoRef current:", video);
    }
  }, []);

  return (
    <div className='border border-amber-400 w-[100%]'>
      <video
        ref={videoRef}
        src={videoSrc}
        controls
        className='w-[100%]'
        controlsList="nodownload"
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
}
