import React from 'react'
import { fetchVideos } from '@lib/utils/functions'
import PlayVideo from '@components/video/playVideo'
import DescriptionCard from '@components/video/descriptionCard'
import AllVideo from '@components/video/allVideo'
import MakeComment from '@components/comment/makeComment'
import ShowComment from '@components/comment/showComment'
export default async function page({params}) {
    const {videoId} = await params
    const video = await fetchVideos(`videos/getvideodetails/${videoId}`)    

  return (
    <div className='flex flex-col md:flex-row gap-2'>
        <main className=' border border-red-500 flex-3/4 '>
            <PlayVideo videoSrc={video.videoFileUrl} />
            <div className='m-2'>
                <div>
                    <h1 className='text-3xl'>{video.title}</h1>
                </div>
                <div className='flex gap-2 m-2 justify-between flex-wrap'>
                    <div className='flex gap-2'>
                    <div className='rounded-full overflow-hidden h-[5vh] w-[5vh] border border-red-800'>
                        <img src={video.owner.avatarUrl} alt="avatar pic" className='aspect-square' />
                    </div>
                    <div>
                        <h1 className='text-xl'>{video.owner.userName}</h1>
                        <p className='text-[10px] text-[#EBD3F8]'>subscribers</p>
                    </div>
                    </div>
                    <div>subscribe</div>
                    <div className='flex gap-1'>
                        <div>like</div>
                        <div>dislike</div>
                    </div>
                    <div className='mr-3'>share</div>
                </div>
            </div>
            <DescriptionCard video={video} />
            <div>
                <div>
                    <MakeComment source={videoId}/>
                </div>
                <div>
                    <ShowComment pathname={`videos/getallcomments/${videoId}`}/>
                </div>
            </div>
        </main>
        <aside className=' border border-e-indigo-700 flex-1/4'>
            <div>
                <h1 className='text-xl text-center'>Suggestions</h1>
                <div className='p-2'>
                    <AllVideo pathName={"videos/getallvideos"}/>
                </div>
                
            </div>
        </aside>
    </div>
  )
}
