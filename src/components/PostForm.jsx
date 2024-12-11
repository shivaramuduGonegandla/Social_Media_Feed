// src/components/PostForm.js
import React, { useState } from 'react';
import { firestore } from '../firebase/firebaseConfig';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

function PostForm() {
  const { currentUser } = useAuth();
  const [text, setText] = useState('');
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState(null);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files.map((file) => URL.createObjectURL(file)));
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    setVideo(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(firestore, 'posts'), {
        text,
        images,
        video,
        timestamp: serverTimestamp(),
        userId: currentUser.uid,
      });
      setText('');
      setImages([]);
      setVideo(null);
    } catch (error) {
      console.error('Error adding post: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-b">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full p-2 border rounded"
      />
      <div className="mt-2">
        <input type="file" multiple onChange={handleImageUpload} className="p-2" />
        <input type="file" onChange={handleVideoUpload} className="p-2" />
      </div>
      <button type="submit" className="mt-2 p-2 bg-blue-500 text-white">Post</button>
    </form>
  );
}

export default PostForm;
