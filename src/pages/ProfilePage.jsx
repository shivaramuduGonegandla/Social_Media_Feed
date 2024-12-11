// src/pages/ProfilePage.js
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import Post from '../components/Post';

function ProfilePage() {
  const { currentUser, logout } = useAuth();
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    if (currentUser) {
      const fetchUserPosts = async () => {
        const q = query(
          collection(firestore, 'posts'),
          where('userId', '==', currentUser.uid)
        );
        const querySnapshot = await getDocs(q);
        const posts = querySnapshot.docs.map((doc) => doc.data());
        setUserPosts(posts);
      };
      fetchUserPosts();
    }
  }, [currentUser]);

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>Profile</h1>
        <p>Email: {currentUser?.email}</p>
        <button onClick={logout} className="logout-btn">Logout</button>
      </div>
      <div className="user-posts">
        <h2>Your Posts</h2>
        {userPosts.length === 0 ? (
          <p>No posts yet!</p>
        ) : (
          userPosts.map((post, index) => <Post key={index} post={post} />)
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
