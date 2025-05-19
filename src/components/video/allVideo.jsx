import React from 'react'
import VideoCard from '@components/video/card';
import { fetchVideos } from '@lib/utils/functions';

export default async function AllVideo({pathName}) {
    const videos = await fetchVideos(pathName);
    return (
        <div className='flex-col flex flex-wrap  gap-2 md:flex-row  items-center justify-center'>
            {videos.map((video) => (
                <VideoCard key={video._id} video={video} />
            ))}
        </div>
    )
}
