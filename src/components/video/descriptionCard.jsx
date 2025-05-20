"use client"
import React, { useState } from 'react'

export default function DescriptionCard({video}) {
    const [expanded, setExpanded] = useState(false);
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nihil temporibus pariatur tempora earum, esse eum voluptate labore quas vero amet impedit, ex possimus accusamus deserunt! Qui temporibus deserunt quod tempora quae officia architecto perferendis voluptatum dolor accusamus error pariatur repellat, recusandae iusto delectus neque ipsum maxime dicta ipsa cum. Perferendis."
    let displayText = expanded ? text : text.length > 120 ? `${text.substring(0, 120)}...` : text;
  return (
    <div>
      <div className='flex text-[#EBD3F8] gap-[6vw] m-3'>
        <p>{video.views} views</p>
        <p>{video.relativeTime}</p>
      </div>
      <div  className={`overflow-hidden transition-all duration-300 m-3 p-2${
          expanded ? '' : `line-clamp-[0.2] md:line-clamp-2`}`}>
        {/* <p>{video.description}</p> */}
        <p>{displayText}</p>
        {text.length > 30 && (
        <p onClick={() => setExpanded(!expanded)}>{expanded ? 'Show less' : 'Show more'}</p>
      )}
      </div>
      
      
    </div>
  )
}
