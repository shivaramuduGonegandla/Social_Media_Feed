import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

const CreatePost = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const handlePost = async () => {
    const newPost = {
      text,
      image,
      video,
      timestamp: new Date(),
    };

    try {
      await addDoc(collection(db, "posts"), newPost);
      setText("");
      setImage(null);
      setVideo(null);
    } catch (error) {
      console.error("Error creating post: ", error);
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your post"
      />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <input type="file" accept="video/*" onChange={(e) => setVideo(e.target.files[0])} />
      <button onClick={handlePost}>Post</button>
    </div>
  );
};

export default CreatePost;
