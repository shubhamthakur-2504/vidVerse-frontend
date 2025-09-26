"use client"
import React, { useState } from 'react'

export default function DescriptionCard({video}) {
    const [expanded, setExpanded] = useState(false);
    const text = video.description || "No description available.";
    let displayText = expanded ? text : text.length > 120 ? `${text.substring(0, 120)}...` : text;
  return (
    <div>
      <div className='flex text-[#EBD3F8] gap-[6vw] m-3'>
        <p>{video.views} views</p>
        <p>{video.relativeTime}</p>
      </div>
      <div  className={`overflow-hidden transition-all duration-300 m-3 p-2${
          expanded ? '' : `line-clamp-[0.2] md:line-clamp-2`}`}>
        <p>{displayText}</p>
        {text.length > 30 && (
        <p onClick={() => setExpanded(!expanded)}>{expanded ? 'Show less' : 'Show more'}</p>
      )}
      </div>
      
      
    </div>
  )
}
