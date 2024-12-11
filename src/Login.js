import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase";

const Login = () => {
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      // Redirect to the feed page after successful login
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
