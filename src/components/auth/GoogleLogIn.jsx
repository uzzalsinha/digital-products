
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";

const GoogleLogIn = () => {
  
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const handleLogin = ()=> {
      signInWithGoogle()
      console.log(user);
    }
    console.log(user, loading, error);
    return (
      <div>
        <button
          onClick={handleLogin}
          className=" px-5 py-3 bg-yellow-500 text-white w-full rounded-lg"
        >
          Google Login
        </button>
      </div>
    );
};

export default GoogleLogIn;