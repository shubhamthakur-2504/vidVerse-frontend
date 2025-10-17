import React from 'react';
import Link from 'next/link';

export default function Card({ video }) {
  function formatDuration(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    if (hrs > 0) {
      return `${hrs}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    } else {
      return `${mins}:${String(secs).padStart(2, '0')}`;
    }
  }

  return (
    <div className="relative flex flex-col gap-4 p-1 md:w-76 w-72 bg-[#090a0f]  rounded-xl shadow-inner shadow-white/25 overflow-hidden">
      <Link href={`/play/${video._id}`}>
        <div className='relative'>
          <div className='"relative aspect-video w-full '>
            <img src={`${video.thumbnailUrl}`} alt={`${video.title}`} className='w-full h-full object-cover  rounded-t-xl' />
          </div>
          <div className="absolute bottom-0 right-0 bg-black text-white text-xs rounded-md px-2 py-0.5 m-1">
            {formatDuration(video.duration)}
          </div>
        </div>
        <hr className='m-0 p-0' />
        <div className=' flex flex-row w-full bg-[#090a0f] text-xs text-white h-[11vh] pt-0 pl-2 rounded-xl items-start m-0'>
          <div className='mr-2 mt-2'>
            <div className='rounded-full w-10 h-10 bg-black overflow-hidden'>
              <img src={`${video.owner.avatarUrl}`} alt="owner avatar" className='w-10 h-10' />
            </div>
          </div>
          <div className='mt-0 min-w-[82%]'>
            <div className='flex justify-start items-center text-2xl overflow-hidden mb-2'>
              <h1 className='line-clamp-1'>{video.title}</h1>
            </div>
            <div className='text-[#EBD3F8] mb-1'>
              <p>{video.owner.userName}</p>
            </div>
            <div className='flex justify-between text-[10px] text-[#EBD3F8] mb-0.5 mr-0.5 ml-0.3'>
              <div>
                <p>{video.views + " views"}</p>
              </div>
              <div>
                <p>{video.relativeTime}</p>
              </div>
            </div>
          </div>

        </div>
      </Link>
    </div>
  );
}
