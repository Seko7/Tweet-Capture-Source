import react, { useState } from "react";
import Editor from "./components/editor/editor";
import Navbar from "./components/navbar/navbar";
import Pricing from "./components/pricing";
import Footer from "./components/footer";
import Faq from "./components/faq";
import Nowstart from "./components/nowstart";
import "./App.css";
import Welcome from "./components/welcome/welcome";
import { AuthProvider } from "./contexts/AuthContext";
export default function App() {
  const [userMail, setUserMail] = useState();
  console.log(userMail);
  return (
    <div className="main">
      <Navbar user={userMail} setuser={setUserMail} />
      <Welcome />
      <Editor usermail={userMail} />

      <Pricing />
      <Faq />
      <Nowstart />
      <Footer />
    </div>
  );
}
