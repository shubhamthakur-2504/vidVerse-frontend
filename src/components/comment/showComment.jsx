import React from 'react'
import { gernalFetch } from '@lib/utils/functions'
import CommentBox from './commentBox'

export default async function ShowComment({pathname}) {
    let message = "Be the first to comment"
    let comments = null
try{
    comments = await gernalFetch(pathname,true)
    
}catch(error){
    console.log(error);
    comments = "something went wrong while fetching comment"
}
  return (
    <div>
      {comments ? comments.map((comment) => (
        <CommentBox key={comment._id} comment={comment} />
      )): <p>{`${message}`}</p>}
    </div>
  )
}
