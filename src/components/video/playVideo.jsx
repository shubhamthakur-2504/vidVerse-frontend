"use client";
import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';
export default function PlayVideo({ videoSrc }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    let hls
    if (video) {
      // Optional: log to debug
      if(Hls.isSupported()){
        hls = new Hls()
        hls.loadSource(videoSrc)
        hls.attachMedia(video);
      }else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // For Safari and iOS devices
        video.src = videoSrc;
      }
    }
    return () => {
    if (hls) {
      hls.destroy();
    }
  };
  }, [videoSrc]);

  return (
    <div className='border border-black rounded-2xl w-[100%]'>
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
