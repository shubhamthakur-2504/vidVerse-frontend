import React from 'react'
import ReactionButton from '@components/buttons/reactionButton'

export default function CommentBox({comment}) {    
    return (
        <div className='flex gap-1 p-3'>
            <div>
                <div className='rounded-full w-10 h-10 bg-black overflow-hidden'>
                    <img src={`${comment.userDetails.avatarUrl}`} alt="owner avatar" className='w-10 h-10' />
                </div>
            </div>
            <div className='ml-2'>
                <div className='flex gap-2'>
                    <span className='text-xs'>@{`${comment.userDetails.userName}`}</span>
                    <span className='text-xs ml-3'>{`${comment.relativeTime}`}</span>
                    {comment.editStatus && <span className='text-[8px] ml-4'>Edited</span>}
                </div>
                <div>
                    {`${comment.content}`}
                </div>
                <div>
                    <ReactionButton targetId={comment._id} targetType={"Comment"} />
                </div>
            </div>
        </div>
    )
}
