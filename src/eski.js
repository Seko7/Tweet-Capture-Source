import React, { useState, useEffect, createRef } from "react";
import { AvatarLoader } from "./loader";
import { useScreenshot } from "use-react-screenshot";
import "./style.css";
import {
  ReplyIcon,
  RetweetIcon,
  LikeIcon,
  ShareIcon,
  VerifiedIcon,
} from "./components/icons";

export default function App() {
  const [avatar, setAvatar] = useState();
  const [nick, setNick] = useState();
  const [username, setUsername] = useState();
  const [isVerified, setIsVerified] = useState(false);
  const [content, setContent] = useState();
  const [date, setDate] = useState(new Date(2011, 11, 11).toLocaleString());
  const [retweets, setRetweets] = useState(675);
  const [quoteTweets, setQuoteTweets] = useState(120);
  const [likes, setLikes] = useState(14);
  const [image, takeScreenshot] = useScreenshot();
  const ref = createRef(null);
  const downloadRef = createRef();
  const getImage = () => takeScreenshot(ref.current);

  var imgurcache = [];
  var dude, output;

  function convertImgToBase64(url, callback, outputFormat) {
    var canvas = document.createElement("CANVAS");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = function () {
      canvas.height = img.height;
      canvas.width = img.width;
      ctx.drawImage(img, 0, 0);
      var dataURL = canvas.toDataURL(outputFormat || "image/png");
      dude = dataURL;
      callback.call(this, dataURL);
      canvas = null;
    };
    img.src = url;
  }

  useEffect(() => {
    if (image) {
      downloadRef.current.click();
    }
  }, [image]);

  const AvatarHandle = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      setAvatar(this.result);
    });
    reader.readAsDataURL(file);
  };

  var i = 0;
  const verified_control = () => {
    const verified_btn = document.querySelector(".slide");
    const circle = document.querySelector(".circle");

    if (i == 0) {
      verified_btn.classList.add("verified-mode");
      circle.classList.add("circle-verified-mode");
      i = 1;
      setIsVerified(true);
    } else {
      verified_btn.classList.remove("verified-mode");
      circle.classList.remove("circle-verified-mode");
      i = 0;
      setIsVerified(false);
    }
  };

  useEffect(() => {
    console.log(image);
  }, [image]);

  const contentFormat = (content) => {
    content = content
      .replace(/@([\w]+)/g, "<span>@$1</span>")
      .replace(/#([\wişğüıçö]+)/g, "<span>#$1</span>");

    return content;
  };

  const fetchTweet = () => {
    fetch(
      "https://typeahead-js-twitter-api-proxy.herokuapp.com/demo/search?q=" +
        username
    )
      .then((res) => res.json())
      .then((data) => {
        const tweet = data[0];

        convertImgToBase64(tweet.profile_image_url, function (base64Image) {
          setAvatar(base64Image);
        });
        setNick(tweet.name);
        setContent(tweet.status.text);
        console.log(tweet);
      });
  };

  return (
    <>
      <div className="panel">
        <h1 className="bar">Tweet Oluştur</h1>

        <div className="panel-avatar white">
          Profil Resmi Yükle
          <input type="file" onChange={AvatarHandle} />
        </div>
        <div className="panel-nick">
          <input
            classname="input"
            type="text"
            placeholder="Nickname"
            value={nick}
            onChange={(e) => setNick(e.target.value)}
          />
        </div>
        <div className="panel-username">
          <input
            classname="input"
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="panel-content">
          <textarea
            className="content-text"
            type="text"
            value={content}
            placeholder="Content"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div className="panel-verified white">
          Verified
          <div className="slide" onClick={verified_control} id="slide">
            <div className="circle" id="circle" />
          </div>
        </div>
        <div className="panel-date white">{date}</div>
        <div className="panel-stats">
          re
          <input
            className="retweet"
            type="text"
            value={retweets}
            onChange={(e) => setRetweets(e.target.value)}
          />
          quoto
          <input
            className="quote"
            type="text"
            value={quoteTweets}
            onChange={(e) => setQuoteTweets(e.target.value)}
          />
          like
          <input
            className="like"
            type="text"
            value={likes}
            onChange={(e) => setLikes(e.target.value)}
          />
        </div>
        <div className="button">
          <button onClick={getImage} type="submit">
            Oluştur
          </button>
          <div className="download-url">
            {image && (
              <a ref={downloadRef} href={image} download="tweet.png">
                indir
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="fetch-user">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={fetchTweet}>bul</button>
      </div>
      <div className="container" ref={ref}>
        <div className="tweet-owner">
          <div className="input-avatar">
            {(avatar && <img className="input-avatar" src={avatar} />) || (
              <AvatarLoader />
            )}
          </div>
          <div className="user">
            <div className="nick white">
              {nick || "nickname"} {isVerified && <VerifiedIcon />}{" "}
            </div>
            <div className="username gray">@{username || "username"}</div>
          </div>
        </div>
        <div className="tweet-content white">
          <p
            dangerouslySetInnerHTML={{
              __html:
                (content && contentFormat(content)) ||
                "Content content content",
            }}
          />
          <h6 className="translate">Translate Tweet</h6>
        </div>
        <div className="tweet-infos gray">
          <span className="date">9:31 AM . Sep 1, 2021</span>
          <span className="phone">. Twitter for İphone</span>
        </div>
        <div className="tweet-stats gray">
          <span>
            <b className="white">{retweets}</b>Retweet
          </span>
          <span>
            <b className="white">{quoteTweets}</b>Quote Tweets
          </span>
          <span>
            <b className="white">{likes}</b>Likes
          </span>
        </div>

        <div className="tweet-actions">
          <span>
            <ReplyIcon />
          </span>
          <span>
            <RetweetIcon />
          </span>
          <span>
            <LikeIcon />
          </span>
          <span>
            <ShareIcon />
          </span>
        </div>
      </div>
    </>
  );
}
