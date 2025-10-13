import React from 'react'
import { fetchVideos, gernalFetch } from '@lib/utils/functions'
import PlayVideo from '@components/video/playVideo'
import DescriptionCard from '@components/video/descriptionCard'
import AllVideo from '@components/video/allVideo'
import MakeComment from '@components/comment/makeComment'
import CommentSection from '@components/comment/commentSection'
import SubscribeButton from '@components/buttons/subscribeButton'
import {cookies} from 'next/headers'
export default async function PlayPage({params}) {
    const {videoId} = await params
    const cookieStore = await cookies()
    const video = await fetchVideos(`videos/getvideodetails/${videoId}`,false, cookieStore) 
       
    if (!video || video.status === 404) {
        return <div>Video not found</div>
    }

    let subCount = 0
    if(video.owner){
        subCount = await gernalFetch(`subscription/subscriberscount/${video.owner._id}`, false, cookieStore)
        if(subCount && subCount.count > 1000){
            subCount = subCount.count / 1000
            subCount = `${subCount}k`
        }else if(subCount && subCount.count > 1000000){
            subCount = subCount.count / 1000000
            subCount = `${subCount}M`
        }else{
            subCount = subCount.count
        }
        
    }    
    
  return (
    <div className='flex flex-col md:flex-row gap-2'>
        <main className=' flex-3/4 '>
            <PlayVideo videoSrc={video?.videoFileUrl} />
            <div className='m-2'>
                <div>
                    <h1 className='text-3xl'>{video?.title}</h1>
                </div>
                <div className='flex gap-2 m-2 justify-between flex-wrap'>
                    <div className='flex gap-2'>
                    <div className='rounded-full overflow-hidden h-[5vh] w-[5vh]'>
                        <img src={video.owner?.avatarUrl} alt="avatar pic" className='aspect-square' />
                    </div>
                    <div>
                        <h1 className='text-xl'>{video.owner?.userName}</h1>
                        <p className='text-[10px] text-[#EBD3F8]'>{subCount} subscribers</p>
                    </div>
                    </div>
                    <div>
                        <SubscribeButton channelId={video.owner?._id}/>
                    </div>
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
                    <CommentSection  pathName={`videos/getallcomments/${videoId}`}/>
                </div>
            </div>
        </main>
        <aside className=' flex-1/4'>
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
