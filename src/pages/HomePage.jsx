// src/pages/HomePage.js
import React, { useEffect } from 'react';
import { useFeed } from '../context/FeedContext';
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from '../components/Post';

function HomePage() {
  const { posts, loadMorePosts, loading } = useFeed();

  return (
    <div className="mt-4">
      <InfiniteScroll
        dataLength={posts.length}
        next={loadMorePosts}
        hasMore={!loading}
        loader={<h4>Loading...</h4>}
      >
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default HomePage;
