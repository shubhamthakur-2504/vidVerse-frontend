"use client"
import React, { useState, useEffect} from 'react'
import "@styles/globals.css";
import { fetchVideos } from '@lib/utils/functions';
import Card from '@components/video/card';
export default function VideoTab() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function loadVideos() {
      try {
        const data = await fetchVideos("videos/getmyvideos", true);        
        setVideos(data || null); 
      } catch (err) {
        console.error(err);
        setError("Failed to load videos");
      } finally {
        setLoading(false);
      }
    }

    loadVideos();
  }, []);

  if (loading) return <div>Loading videos...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className='flex flex-wrap gap-2'>
      {
        videos.map((video) => (
          <Card key={video._id} video={video} />
        ))
      }
    </div>
  )
}
