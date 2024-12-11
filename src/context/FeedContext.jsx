// src/context/FeedContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { firestore } from '../firebase/firebaseConfig';
import { collection, query, orderBy, limit, getDocs, startAfter } from 'firebase/firestore';

const FeedContext = createContext();

export function useFeed() {
  return useContext(FeedContext);
}

export function FeedProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    setLoading(true);
    const q = query(collection(firestore, 'posts'), orderBy('timestamp', 'desc'), limit(20));
    const querySnapshot = await getDocs(q);
    const newPosts = querySnapshot.docs.map((doc) => doc.data());
    setPosts(newPosts);
    setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
    setLoading(false);
  };

  const loadMorePosts = async () => {
    if (!lastVisible) return;

    setLoading(true);
    const q = query(
      collection(firestore, 'posts'),
      orderBy('timestamp', 'desc'),
      startAfter(lastVisible),
      limit(20)
    );
    const querySnapshot = await getDocs(q);
    const newPosts = querySnapshot.docs.map((doc) => doc.data());
    setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
    setLoading(false);
  };

  const value = {
    posts,
    loadMorePosts,
    loading,
  };

  return <FeedContext.Provider value={value}>{children}</FeedContext.Provider>;
}
