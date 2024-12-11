import { useEffect, useState } from "react";
import { query, collection, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);

  const fetchPosts = async () => {
    let q = query(collection(db, "posts"), orderBy("timestamp", "desc"), limit(20));

    if (lastVisible) {
      q = query(q, startAfter(lastVisible));
    }

    const snapshot = await getDocs(q);
    const newPosts = snapshot.docs.map(doc => doc.data());
    setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div onScroll={(e) => {
      if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
        fetchPosts();
      }
    }}>
      {posts.map((post, index) => (
        <div key={index}>
          <p>{post.text}</p>
          {post.image && <img src={URL.createObjectURL(post.image)} alt="Post" />}
          {post.video && <video controls><source src={URL.createObjectURL(post.video)} /></video>}
        </div>
      ))}
    </div>
  );
};

export default Feed;
