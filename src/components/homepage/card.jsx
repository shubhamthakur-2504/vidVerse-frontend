import React from 'react';
import Image from 'next/image';

export default function Card() {
  return (
    <div className="relative flex flex-col gap-4 p-1 w-76 bg-[#090a0f]  rounded-xl shadow-inner shadow-white/25 overflow-hidden">
      <div className='relative'>
        <div className='h-[20vh] w-[20vw]'>

        </div>
        <div className="absolute bottom-0 right-0 bg-black text-white text-xs rounded-md px-2 py-0.5 m-1">
          1:50:59
        </div>
      </div>
      <hr />
      <div className=' flex flex-row w-full bg-[#090a0f] text-xs text-white h-[11vh] pt-0 pl-2 rounded-xl items-start m-0'>
        <div className='mr-2'>
          <div className='rounded-full w-10 h-10 bg-black'></div>
        </div>
        <div className='mt-0'>
          <div className='flex justify-start items-center text-2xl overflow-hidden mb-2'>
            <h1>Title will be here</h1>
          </div>
          <div className='text-[#EBD3F8] mb-1'>
            <p>Channel</p>
          </div>
          <div className='flex justify-between text-[10px] text-[#EBD3F8] mb-0.5'>
            <div>
              <p>views</p>
            </div>
            <div>
              <p>time</p>
            </div>
          </div>
        </div>

      </div>

      {/* Button */}
      {/* <button className="mt-4 w-full py-2 bg-gradient-to-b from-purple-600 to-purple-300 text-xs text-white rounded-full shadow-inner shadow-white/50">
        Book a Call
      </button> */}
    </div>
  );
}
