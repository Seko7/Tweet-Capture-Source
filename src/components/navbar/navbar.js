import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import "./navbar.css";
import {
  signup,
  useAuth,
  facebookProvider,
  googleProvider,
  login,
} from "../../firebase";
import {
  signInWithPopup,
  signInWithCredential,
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  linkWithPopup,
} from "firebase/auth";
const auth = getAuth();

function Navbar({ user, setuser }) {
  const [userNG, setUserNG] = useState();
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((re) => {
        console.log(re);
        setuser(re.user.email);
        setUserNG(re.user.email);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="navbar">
      <div className="logo_pages">
        <img clasName="logo" src={logo} />
        <div className="pages">
          <p>Apps</p>
          <p>Integrations</p>
          <p>Pricing</p>
          <p>Contact</p>
        </div>
      </div>

      <div className="login_buttons">
        {!userNG ? (
          <>
            <p className="sign_in" onClick={() => signInWithGoogle()}>
              Sign In
            </p>
            <p className="sign_up" onClick={() => signInWithGoogle()}>
              Create Account
            </p>
          </>
        ) : (
          <>
            <p style={{ color: "#1f28eb" }}>{userNG}</p>
            <p
              className="logout"
              onClick={() => setuser(undefined) + setUserNG(undefined)}
            >
              Log out
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
