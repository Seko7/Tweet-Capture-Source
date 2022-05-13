import React from "react";
import "./footer.css";
import TwitterIcon from "../assets/twitter.png";
import InstagramIcon from "../assets/instagram (1).png";
function Footer() {
  return (
    <div className="footer_cont">
      <div className="footer_left">
        <p>Blog</p>
        <p>FAQ</p>
        <p>Privacy</p>
        <p>Terms</p>
      </div>
      <div className="footer_mid">
        <img src={TwitterIcon} />
        <img src={InstagramIcon} />
      </div>
      <div className="footer_right">
        <p>Brand Assests</p>
        <p>Superpeer, Inc</p>
      </div>
    </div>
  );
}

export default Footer;
