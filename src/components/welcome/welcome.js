import React from "react";
import wImage from "../../assets/Saly-10.png";
import "./welcome.css";
import Typewriter from "typewriter-effect";
function Welcome() {
  const fetchTweet = () => {
    fetch("http://infotweetv1.herokuapp.com/1499324833011802115", {})
      .then((res) => res.json())
      .then((response) => {
        console.log("response", response);
      });
  };

  return (
    <div className="welcome_body">
      <div className="w_texts">
        <p className="w_title">
          <span className="writerr">
            Twitter to &nbsp;
            <writ style={{ color: "#ff00ea" }}>
              <Typewriter
                className="writerb"
                options={{
                  strings: ["Instagram", "TikTok", "Facebook", "LinkedIn"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </writ>
          </span>
          Screenshot as Screen
          <br /> Image or <br />
          Screen Video Record
        </p>
        <p className="w_text">
          You can share your Twitter shares as screenshots or screen recordings
          in
          <br /> the dimensions that you can share on your other social media
          accounts.
          <br /> And just a few clicks!
        </p>
        <div className="fetch-user"></div>
      </div>
      <img className="w_img" placeholder="asdasd" src={wImage} />
    </div>
  );
}

export default Welcome;
