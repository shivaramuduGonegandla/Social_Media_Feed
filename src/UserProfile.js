import { useState, useEffect } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    if (auth.currentUser) {
      const fetchUserData = async () => {
        const userRef = doc(db, "users", auth.currentUser.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setUser(userSnap.data());
          setName(userSnap.data().name);
          setBio(userSnap.data().bio);
        }
      };

      fetchUserData();
    }
  }, []);

  const handleSaveProfile = async () => {
    const userRef = doc(db, "users", auth.currentUser.uid);
    await updateDoc(userRef, { name, bio });
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>{name}</h1>
          <p>{bio}</p>
          <textarea value={name} onChange={(e) => setName(e.target.value)} />
          <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
          <button onClick={handleSaveProfile}>Save</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
