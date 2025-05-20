import React from 'react'
export default function layout({children}) {
  return (
        <div className='flex justify-center items-center md:mt-[10vh] mt-[3vh] mb-[5vh] md:mb-0'>
            <div className='flex flex-col gap-4 bg-[#000000] text-[#FFFFFF]  border-[0.2px] border-[#535353] p-2  md:w-[40vw]' >
            <div className='mt-2 mb-2'>
                <div className="text-3xl font-bold flex-shrink-0 text-center">
                    <span className="text-[#AD49E1]">Vid</span>verse
                </div>
               
                <div>
                    {children}
                </div>
            </div>
        </div>
        </div>

    )
}