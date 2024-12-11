// src/components/Post.js
import React, { useEffect, useRef } from 'react';

function Post({ post }) {
  const videoRef = useRef(null);

  const handleVideoVisibility = () => {
    if (videoRef.current) {
      const rect = videoRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleVideoVisibility);
    return () => {
      window.removeEventListener('scroll', handleVideoVisibility);
    };
  }, []);

  return (
    <div className="border-b p-4">
      <div className="text-sm text-gray-500">{post.timestamp}</div>
      <div className="mt-2">{post.text}</div>
      {post.images && post.images.map((image, index) => (
        <img key={index} src={image} alt="Post" className="mt-2 w-full h-auto" />
      ))}
      {post.video && (
        <video ref={videoRef} className="mt-2 w-full h-auto" controls>
          <source src={post.video} type="video/mp4" />
        </video>
      )}
    </div>
  );
}

export default Post;
