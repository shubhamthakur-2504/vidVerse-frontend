"use client";
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { gernalFetch } from '@lib/utils/functions';
import CommentBox from './commentBox'; // Make sure this path is correct

export default function CommentSection({ pathName }) {
  const [comments, setComments] = useState(null); // Start with null for loading state
  const [error, setError] = useState(null);
  
  // Get the refresh trigger from your Redux store
  const commentPosted = useSelector((state) => state.commentPosted.commentPosted);

  useEffect(() => {
    // This function fetches the comments
    const fetchComments = async () => {
      setError(null);
      setComments(null); // Reset on each fetch to show a loading state
      try {
        const fetchedComments = await gernalFetch(pathName, true);
        setComments(fetchedComments);
      } catch (err) {
        console.error(err);
        setError("Something went wrong while fetching comments");
      }
    };

    fetchComments();
  }, [commentPosted, pathName]); // Re-fetches when a new comment is posted

  // Handle error state
  if (error) {
    return <p>{error}</p>;
  }

  // Handle loading state
  if (comments === null) {
    return <p>Loading comments...</p>;
  }
  
  // Handle empty state
  if (comments.length === 0) {
    return <p>Be the first to comment</p>;
  }

  // Render the list of comments
  return (
    <div>
      {comments.map((comment) => (
        <CommentBox key={comment._id} comment={comment} />
      ))}
    </div>
  );
}
