import React, { useState, useEffect, createRef } from "react";
import { AvatarLoader } from "../../loader";
import { useScreenshot } from "use-react-screenshot";
import "./editor.css";
import {
  VerifiedIcon,
  InstagramIcon,
  TiktokIcon,
  LinkedinIcon,
  FacebookIcon,
  AutoFitIcon,
} from "../icons";
import { Slider } from "@mui/material";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { HexColorPicker } from "react-colorful";
import Input from "@mui/material/Input";
import { TextField } from "@mui/material";

export default function Editor({ usermail }) {
  const [fethurl, setFetchurl] = useState();
  const [avatar, setAvatar] = useState();
  const [nick, setNick] = useState();
  const [username, setUsername] = useState();
  const [selectedPlatform, setSelectedPlatform] = useState("Instagram Post");
  const [tweetWidth, setTweetWidth] = useState(638);
  const [tweetHeight, setTweetHeight] = useState(638);
  const [isVerified, setIsVerified] = useState(true);
  const [isTime, setIsTime] = useState(true);
  const [isSource, setIsSource] = useState(true);
  const [isWatermark, setIsWatermark] = useState(true);
  const [isLikes, setIsLikes] = useState(true);
  const [isReTweets, setIsReTweets] = useState(true);
  const [isReplies, setIsReplies] = useState(true);
  const [isProfile, setIsProfile] = useState(true);
  const [displayColorPicker, setdisplayColorPicker] = useState(false);
  const [displayColorPickerTP, setdisplayColorPickerTP] = useState(false);
  const [displayColorPickerTS, setdisplayColorPickerTS] = useState(false);
  const [displayColorPickerVI, setdisplayColorPickerVI] = useState(false);
  const [displayColorPickerBC, setdisplayColorPickerBC] = useState(false);
  const [borderWidth, setBorderWidth] = useState("");
  const [logoWidth, setLogoWidth] = useState("");
  const [textWidth, setTextWidth] = useState("");
  const [zoomLevel, setZoomLevel] = useState("");
  const [BGImage, setBGImage] = useState("");
  const [BGImageName, setBGImageName] = useState("");
  const [LogoImage, setLogoImage] = useState("");
  const [LogoImageName, setLogoImageName] = useState("");

  const [photos1, setPhotos1] = useState();
  const [photos2, setPhotos2] = useState();
  const [photos3, setPhotos3] = useState();
  const [photos4, setPhotos4] = useState();
  const [content, setContent] = useState();
  const [source, setSource] = useState();
  const [createdAt, setCreatedAt] = useState();
  const [date, setDate] = useState(new Date(2011, 11, 11).toLocaleString());
  const [retweets, setRetweets] = useState(675);
  const [quoteTweets, setQuoteTweets] = useState(120);
  const [likes, setLikes] = useState(14);
  const [image, takeScreenshot] = useScreenshot();
  const ref = createRef(null);
  const downloadRefPNG = createRef();
  const downloadRefJPG = createRef();
  const downloadRefSVG = createRef();
  const getImage = () => takeScreenshot(ref.current);
  const [bgColor, setBgColor] = useState("");
  const [textPrimaryColor, setTextPrimaryColor] = useState("");
  const [verifiedIconColor, setVerifiedIconColor] = useState("");
  const [textSecondaryColor, setTextSecondaryColor] = useState("");
  const [borderColor, setBorderColor] = useState("");
  const [selectedImageFormat, setSelectedImageFormat] = useState("");

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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    {
      usermail ? setAnchorEl(event.currentTarget) : alert("Please Sign In");
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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

  const handleTweetWidth = (selectedPlatform) => {
    if (selectedPlatform === "Instagram Post") {
      setTweetWidth(638);
      setTweetHeight(638);
    }
    if (selectedPlatform === "Instagram Stories") {
      setTweetWidth(359);
      setTweetHeight(638);
    }
    if (selectedPlatform === "TikTok") {
      setTweetWidth(359);
      setTweetHeight(638);
    }
    if (selectedPlatform === "LinkedIn") {
      setTweetHeight(334);
      setTweetWidth(638);
    }
    if (selectedPlatform === "Facebook") {
      setTweetHeight(334);
      setTweetWidth(638);
    }
  };

  const handleChange = (color) => {
    console.log(color);
  };
  const popover = {
    position: "absolute",
    marginLeft: "10rem",
    zIndex: "2",
  };
  const cover = {
    position: "absolute",
    top: "-28rem",

    left: "-22rem",
    width: "75rem",
    height: "50rem",
    zIndex: "0",
    backgroundColor: "#ff660000",
  };
  useEffect(() => {
    if (image) {
      if (selectedImageFormat == "png") {
        downloadRefPNG.current.click();
      }
      if (selectedImageFormat == "jpg") {
        downloadRefJPG.current.click();
      }
      if (selectedImageFormat == "svg") {
        downloadRefSVG.current.click();
      }
    }
  }, [image]);

  //imagee
  const BackgroundImageHandle = (e) => {
    const file = e.target.files[0];
    setBGImageName(file.name);

    const reader = new FileReader();
    reader.addEventListener("load", function () {
      setBGImage(this.result);
    });
    reader.readAsDataURL(file);
  };

  const LogoImageHandle = (e) => {
    const file = e.target.files[0];
    setLogoImageName(file.name);

    const reader = new FileReader();
    reader.addEventListener("load", function () {
      setLogoImage(this.result);
    });
    reader.readAsDataURL(file);
  };

  //Colors
  const handleColor = () => {
    setdisplayColorPicker(!displayColorPicker);
  };

  const handleColorClose = () => {
    setdisplayColorPicker(false);
    setdisplayColorPickerTP(false);
    setdisplayColorPickerTS(false);
    setdisplayColorPickerVI(false);
    setdisplayColorPickerBC(false);
  };

  const handleColorTP = () => {
    setdisplayColorPickerTP(!displayColorPicker);
  };

  const handleColorTS = () => {
    setdisplayColorPickerTS(!displayColorPicker);
  };
  const handleColorVI = () => {
    setdisplayColorPickerVI(!displayColorPicker);
  };
  const handleColorBC = () => {
    setdisplayColorPickerBC(!displayColorPicker);
  };
  //twitter elements

  const verified_control = () => {
    const verified_btn = document.querySelector(".slide");
    const circle = document.querySelector(".circle");

    if (!isVerified) {
      verified_btn.classList.add("verified-mode");
      circle.classList.add("circle-verified-mode");

      setIsVerified(true);
    } else {
      verified_btn.classList.remove("verified-mode");
      circle.classList.remove("circle-verified-mode");

      setIsVerified(false);
    }
  };

  const likes_control = () => {
    const likes_btn = document.querySelector(".slide_likes");
    const circle = document.querySelector(".circle_likes");

    if (!isLikes) {
      likes_btn.classList.add("verified-mode");
      circle.classList.add("circle-verified-mode");

      setIsLikes(true);
    } else {
      likes_btn.classList.remove("verified-mode");
      circle.classList.remove("circle-verified-mode");

      setIsLikes(false);
    }
  };

  const time_control = () => {
    const likes_btn = document.querySelector(".slide_time");
    const circle = document.querySelector(".circle_time");

    if (!isTime) {
      likes_btn.classList.add("verified-mode");
      circle.classList.add("circle-verified-mode");

      setIsTime(true);
    } else {
      likes_btn.classList.remove("verified-mode");
      circle.classList.remove("circle-verified-mode");

      setIsTime(false);
    }
  };

  const source_control = () => {
    const likes_btn = document.querySelector(".slide_source");
    const circle = document.querySelector(".circle_source");

    if (!isSource) {
      likes_btn.classList.add("verified-mode");
      circle.classList.add("circle-verified-mode");

      setIsSource(true);
    } else {
      likes_btn.classList.remove("verified-mode");
      circle.classList.remove("circle-verified-mode");

      setIsSource(false);
    }
  };
  const watermark_control = () => {
    const likes_btn = document.querySelector(".slide_watermark");
    const circle = document.querySelector(".circle_watermark");

    if (!isWatermark) {
      likes_btn.classList.add("verified-mode");
      circle.classList.add("circle-verified-mode");

      setIsWatermark(true);
    } else {
      likes_btn.classList.remove("verified-mode");
      circle.classList.remove("circle-verified-mode");

      setIsWatermark(false);
    }
  };
  const retweets_control = () => {
    const likes_btn = document.querySelector(".slide_retweets");
    const circle = document.querySelector(".circle_retweets");

    if (!isReTweets) {
      likes_btn.classList.add("verified-mode");
      circle.classList.add("circle-verified-mode");

      setIsReTweets(true);
    } else {
      likes_btn.classList.remove("verified-mode");
      circle.classList.remove("circle-verified-mode");

      setIsReTweets(false);
    }
  };
  const replies_control = () => {
    const likes_btn = document.querySelector(".slide_replies");
    const circle = document.querySelector(".circle_replies");

    if (!isReplies) {
      likes_btn.classList.add("verified-mode");
      circle.classList.add("circle-verified-mode");

      setIsReplies(true);
    } else {
      likes_btn.classList.remove("verified-mode");
      circle.classList.remove("circle-verified-mode");

      setIsReplies(false);
    }
  };
  const profile_control = () => {
    const likes_btn = document.querySelector(".slide_profile");
    const circle = document.querySelector(".circle_profile");

    if (!isProfile) {
      likes_btn.classList.add("verified-mode");
      circle.classList.add("circle-verified-mode");

      setIsProfile(true);
    } else {
      likes_btn.classList.remove("verified-mode");
      circle.classList.remove("circle-verified-mode");

      setIsProfile(false);
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
    var newStr = fethurl.substring(fethurl.length - 19, fethurl.length);
    fetch(`https://api.ahmetorhan.com.tr/${newStr}`, {})
      .then((res) => res.json())
      .then((response) => {
        let abc = ["profile_image_url:"];
        console.log("response", response);

        convertImgToBase64(response.profile_image_url, function (base64Image) {
          setAvatar(base64Image);
        });
        setUsername(response.name);
        setNick(response.username);
        setContent(response.status.text);
        setSource(response.status.source);
        setCreatedAt(response.status.created_at);
        setLikes(response.status.like_count);
        setRetweets(response.status.retweet_count);
        setQuoteTweets(response.status.quote_tweet_count);
        setIsVerified(response.status.verified);
        if (response.status.photo) {
          var i = response.status.photo.length;
          if (i == 1) {
            convertImgToBase64(
              response.status.photo[0],
              function (base64Image) {
                setPhotos1(base64Image);
              }
            );
            setPhotos2(false);
            setPhotos3(false);
            setPhotos4(false);
          }
          if (i == 2) {
            convertImgToBase64(
              response.status.photo[0],
              function (base64Image) {
                setPhotos1(base64Image);
              }
            );
            convertImgToBase64(
              response.status.photo[1],
              function (base64Image) {
                setPhotos2(base64Image);
              }
            );
            setPhotos3(false);
            setPhotos4(false);
          }
          if (i == 3) {
            convertImgToBase64(
              response.status.photo[0],
              function (base64Image) {
                setPhotos1(base64Image);
              }
            );
            convertImgToBase64(
              response.status.photo[1],
              function (base64Image) {
                setPhotos2(base64Image);
              }
            );
            convertImgToBase64(
              response.status.photo[2],
              function (base64Image) {
                setPhotos3(base64Image);
              }
            );
            setPhotos4(false);
          }
          if (i == 4) {
            convertImgToBase64(
              response.status.photo[0],
              function (base64Image) {
                setPhotos1(base64Image);
              }
            );
            convertImgToBase64(
              response.status.photo[1],
              function (base64Image) {
                setPhotos2(base64Image);
              }
            );
            convertImgToBase64(
              response.status.photo[2],
              function (base64Image) {
                setPhotos3(base64Image);
              }
            );
            convertImgToBase64(
              response.status.photo[3],
              function (base64Image) {
                setPhotos4(base64Image);
              }
            );
          }
        }
      })
      .catch((error) => alert("Geçersiz Tweet URl"));
  };

  return (
    <>
      <div className="fetch-user">
        <TextField
          className="fetch_input"
          type="text"
          variant="outlined"
          label="Tweet Url"
          onChange={(e) => setFetchurl(e.target.value)}
        />
        <Button
          className="fetch_button"
          variant="contained"
          onClick={() => fetchTweet()}
        >
          Get
        </Button>
      </div>

      <div className="platforms">
        <div
          className="platform_container"
          onClick={() =>
            setSelectedPlatform("Instagram Stories") +
            handleTweetWidth("Instagram Stories")
          }
          style={{
            borderColor:
              selectedPlatform == "Instagram Stories" ? "#1da1f2" : "#adadad",
          }}
        >
          <div className="icon">
            <InstagramIcon
              color={
                selectedPlatform == "Instagram Stories" ? "#1da1f2" : "#adadad"
              }
            />
          </div>

          <div
            className="ölcü"
            style={{
              color:
                selectedPlatform == "Instagram Stories" ? "#1da1f2" : "#adadad",
            }}
          >
            <p>Instagram Stories</p>
            <p>9:16 Stories</p>
          </div>
        </div>
        <div
          className="platform_container"
          onClick={() =>
            setSelectedPlatform("Instagram Post") +
            handleTweetWidth("Instagram Post")
          }
          style={{
            borderColor:
              selectedPlatform == "Instagram Post" ? "#1da1f2" : "#adadad",
          }}
        >
          <div className="icon">
            <InstagramIcon
              color={
                selectedPlatform == "Instagram Post" ? "#1da1f2" : "#adadad"
              }
            />
          </div>
          <div
            className="ölcü"
            style={{
              color:
                selectedPlatform == "Instagram Post" ? "#1da1f2" : "#adadad",
            }}
          >
            <p>Instagram Post</p>
            <p>1:1 Square Post</p>
          </div>
        </div>
        <div
          className="platform_container"
          onClick={() =>
            setSelectedPlatform("TikTok") + handleTweetWidth("TikTok")
          }
          style={{
            borderColor: selectedPlatform == "TikTok" ? "#1da1f2" : "#adadad",
          }}
        >
          <div className="icon">
            <TiktokIcon
              color={selectedPlatform == "TikTok" ? "#1da1f2" : "#adadad"}
            />
          </div>
          <div
            className="ölcü"
            style={{
              color: selectedPlatform == "TikTok" ? "#1da1f2" : "#adadad",
            }}
          >
            <p>TikTok</p>
            <p>1080:1920</p>
          </div>
        </div>
        <div
          className="platform_container"
          onClick={() =>
            setSelectedPlatform("LinkedIn") + handleTweetWidth("LinkedIn")
          }
          style={{
            borderColor: selectedPlatform == "LinkedIn" ? "#1da1f2" : "#adadad",
          }}
        >
          <div className="icon">
            <LinkedinIcon
              color={selectedPlatform == "LinkedIn" ? "#1da1f2" : "#adadad"}
            />
          </div>
          <div
            className="ölcü"
            style={{
              color: selectedPlatform == "LinkedIn" ? "#1da1f2" : "#adadad",
            }}
          >
            <p>LinkedIn</p>
            <p>1200:627</p>
          </div>
        </div>
        <div
          className="platform_container"
          onClick={() =>
            setSelectedPlatform("Facebook") + handleTweetWidth("Facebook")
          }
          style={{
            borderColor: selectedPlatform == "Facebook" ? "#1da1f2" : "#adadad",
          }}
        >
          <div className="icon">
            <FacebookIcon
              color={selectedPlatform == "Facebook" ? "#1da1f2" : "#adadad"}
            />
          </div>
          <div
            className="ölcü"
            style={{
              color: selectedPlatform == "Facebook" ? "#1da1f2" : "#adadad",
            }}
          >
            <p>Facebook</p>
            <p>1200:630</p>
          </div>
        </div>
        <div
          className="platform_container "
          onClick={() =>
            setSelectedPlatform("Auto Fit") + handleTweetWidth("Auto Fit")
          }
          style={{
            borderColor: selectedPlatform == "Auto Fit" ? "#1da1f2" : "#adadad",
          }}
        >
          <div className="icon">
            <AutoFitIcon
              color={selectedPlatform == "Auto Fit" ? "#1da1f2" : "#adadad"}
            />
          </div>
          <div
            className="ölcü"
            style={{
              color: selectedPlatform == "Auto Fit" ? "#1da1f2" : "#adadad",
            }}
          >
            <p>Auto Fit</p>
            <p>Fit to Content</p>
          </div>
        </div>
      </div>
      <div className="panel_tweet">
        <div className="panel">
          <div className="twitter_elements">
            <p className="elements_title">Twitter Elements</p>
            <div className="elements_left_right">
              <div className="twitter_elements_left">
                <div className=" elem">
                  <div
                    className="slide verified-mode"
                    onClick={verified_control}
                    id="slide"
                  >
                    <div className="circle circle-verified-mode" id="circle" />
                  </div>
                  <p>Verified Icon</p>
                </div>
                <div className="time elem">
                  <div
                    className="slide slide_time verified-mode"
                    onClick={time_control}
                  >
                    <div className="circle circle_time circle-verified-mode" />
                  </div>
                  <p>Time</p>
                </div>
                <div className="source elem">
                  <div
                    className="slide slide_source verified-mode"
                    onClick={source_control}
                  >
                    <div className="circle circle_source circle-verified-mode" />
                  </div>
                  <p>Source</p>
                </div>
                <div className="watermark elem">
                  <div
                    className="slide slide_watermark verified-mode"
                    onClick={watermark_control}
                  >
                    <div className="circle circle_watermark circle-verified-mode" />
                  </div>
                  <p>Logo</p>
                </div>
              </div>
              <div className="twitter_elements_right">
                <div className="likes elem">
                  <div
                    className="slide slide_likes verified-mode"
                    onClick={likes_control}
                  >
                    <div className="circle circle_likes circle-verified-mode" />
                  </div>
                  <p>Likes</p>
                </div>
                <div className="retweets elem">
                  <div
                    className="slide slide_retweets verified-mode"
                    onClick={retweets_control}
                  >
                    <div className="circle circle_retweets circle-verified-mode" />
                  </div>
                  <p>ReTweets</p>
                </div>
                <div className="replies elem">
                  <div
                    className="slide slide_replies verified-mode"
                    onClick={replies_control}
                  >
                    <div className="circle circle_replies circle-verified-mode" />
                  </div>
                  <p>Replies</p>
                </div>
                <div className="profile elem">
                  <div
                    className="slide slide_profile verified-mode"
                    onClick={profile_control}
                  >
                    <div className="circle circle_profile circle-verified-mode" />
                  </div>
                  <p>Profile Image and Username</p>
                </div>
              </div>
            </div>
          </div>
          <div className="colors">
            <p className="colors_title">Colors</p>
            <div className="colors_2div">
              <div className="colors_up">
                <div className="color_cont">
                  <p>Background</p>
                  <div>
                    <p>{bgColor ? bgColor : "#FFFFFF"}</p>
                    <div
                      className="color_circle"
                      onClick={handleColor}
                      style={{
                        backgroundColor: bgColor ? bgColor : "#e5e5e5",
                        border: bgColor == "#ffffff" && "1px solid #000000",
                      }}
                    />
                  </div>
                  {displayColorPicker ? (
                    <div style={popover}>
                      <div style={cover} onClick={handleColorClose} />
                      <HexColorPicker
                        color={bgColor}
                        onChange={(e) => setBgColor(e)}
                      />
                    </div>
                  ) : null}
                </div>

                <div className="color_cont">
                  <p>Text Primary</p>
                  <div>
                    <p>{textPrimaryColor ? textPrimaryColor : "#000000"}</p>
                    <div
                      className="color_circle"
                      onClick={handleColorTP}
                      style={{
                        backgroundColor: textPrimaryColor
                          ? textPrimaryColor
                          : "#000000",
                        border:
                          textPrimaryColor == "#ffffff" && "1px solid #000000",
                      }}
                    />
                  </div>
                  {displayColorPickerTP ? (
                    <div style={popover}>
                      <div style={cover} onClick={handleColorClose} />
                      <HexColorPicker
                        color={textPrimaryColor}
                        onChange={(e) => setTextPrimaryColor(e)}
                        style={{
                          position: "absolute",
                        }}
                      />
                    </div>
                  ) : null}
                </div>

                <div className="color_cont">
                  <p>Text Secondary</p>
                  <div>
                    <p>{textSecondaryColor ? textSecondaryColor : "#adadad"}</p>
                    <div
                      className="color_circle"
                      onClick={handleColorTS}
                      style={{
                        backgroundColor: textSecondaryColor
                          ? textSecondaryColor
                          : "#adadad",
                        border:
                          textSecondaryColor == "#ffffff" &&
                          "1px solid #000000",
                      }}
                    />
                  </div>
                  {displayColorPickerTS ? (
                    <div style={popover}>
                      <div style={cover} onClick={handleColorClose} />
                      <HexColorPicker
                        color={textSecondaryColor}
                        onChange={(e) => setTextSecondaryColor(e)}
                        style={{
                          position: "absolute",
                        }}
                      />
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="colors_down">
                <div className="color_cont">
                  <p>Link</p>
                  <div>
                    <p>#CA2020</p>
                    <div className="color_circle" />
                  </div>
                </div>
                <div className="color_cont">
                  <p>Verified Icon</p>
                  <div>
                    <p>{verifiedIconColor ? verifiedIconColor : "#1d9bf0"}</p>
                    <div
                      className="color_circle"
                      onClick={handleColorVI}
                      style={{
                        backgroundColor: verifiedIconColor
                          ? verifiedIconColor
                          : "#1d9bf0",
                        border:
                          verifiedIconColor == "#ffffff" && "1px solid #000000",
                      }}
                    />
                  </div>
                  {displayColorPickerVI ? (
                    <div style={popover}>
                      <div style={cover} onClick={handleColorClose} />
                      <HexColorPicker
                        color={verifiedIconColor}
                        onChange={(e) => setVerifiedIconColor(e)}
                        style={{
                          position: "absolute",
                        }}
                      />
                    </div>
                  ) : null}
                </div>
                <div className="color_cont">
                  <p>Border Color</p>
                  <div>
                    <p>{borderColor ? borderColor : "#adadad"}</p>
                    <div
                      className="color_circle"
                      onClick={handleColorBC}
                      style={{
                        backgroundColor: borderColor ? borderColor : "#adadad",
                        border: borderColor == "#ffffff" && "1px solid #000000",
                      }}
                    />
                  </div>
                  {displayColorPickerBC ? (
                    <div style={popover}>
                      <div style={cover} onClick={handleColorClose} />
                      <HexColorPicker
                        color={borderColor}
                        onChange={(e) => setBorderColor(e)}
                        style={{
                          position: "absolute",
                        }}
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className="images">
            <p>Images</p>
            <div className="background_logo_profile_image">
              <div className="background_image">
                <p>Background Image</p>
                <div style={{ justifyContent: "space-between" }}>
                  <p className="background_name">
                    {" "}
                    {BGImageName ? BGImageName : "background.jpg"}
                  </p>
                  <input
                    className="input_circle"
                    type="file"
                    onChange={BackgroundImageHandle}
                    style={{
                      backgroundImage: `url(${BGImage && BGImage})`,
                      backgroundSize: "100%",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: BGImage && "#ffffff00",
                      border: BGImage ? "1px solid #000000" : "none",
                    }}
                  />
                </div>
              </div>
              <div className="background_image">
                <p>Logo Image</p>
                <div>
                  <p className="background_name">
                    {LogoImageName ? LogoImageName : "logo.jpg"}
                  </p>
                  <input
                    className="input_circle"
                    type="file"
                    onChange={LogoImageHandle}
                    style={{
                      backgroundImage: `url(${LogoImage && LogoImage})`,
                      backgroundSize: "100%",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: LogoImage && "#ffffff00",
                      border: LogoImage ? "1px solid #000000" : "none",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="dimensions">
            <p>Dimentions</p>
            <div className="dimensions_cont">
              <div className="dimensions_cont_up">
                <div className="border_width">
                  <p>Border Width</p>
                  <Slider
                    size="small"
                    defaultValue={0}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    onChange={(e) => setBorderWidth(e.target.value)}
                  />
                </div>
                <div className="border_width">
                  <p>Text Width</p>
                  <Slider
                    size="small"
                    defaultValue={100}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    onChange={(e) => setTextWidth(e.target.value)}
                    min={30}
                    max={150}
                  />
                </div>
              </div>
              <div className="dimensions_cont_down">
                <div className="border_width">
                  <p>Logo Width</p>
                  <Slider
                    size="small"
                    defaultValue={100}
                    min={30}
                    max={300}
                    onChange={(e) => setLogoWidth(e.target.value)}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    on
                  />
                </div>
                <div className="border_width">
                  <p>Zoom</p>
                  <Slider
                    size="small"
                    defaultValue={100}
                    min={30}
                    max={170}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    onChange={(e) => setZoomLevel(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="tweet"
          style={{
            position: "relative",
            backgroundColor: bgColor ? bgColor : "#fff",
            border: `${borderWidth ? borderWidth : 1}px solid ${
              borderColor ? borderColor : `#adadad`
            }`,
            backgroundImage: `url(${BGImage && BGImage})`,
            backgroundPosition: "center",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            width:
              selectedPlatform === "Auto Fit"
                ? "mincontent"
                : `${tweetWidth - 2 * borderWidth}px`,
            height:
              selectedPlatform === "Auto Fit"
                ? "min-content"
                : `${tweetHeight - 2 * borderWidth}px`,
          }}
          ref={ref}
        >
          {isWatermark && (
            <div
              className="logo_circle"
              style={{
                position: "absolute",
                top: "25px",
                right: "25px",
                width: `${logoWidth ? logoWidth : 70}px`,
                height: `${logoWidth ? logoWidth : 70}px`,
                backgroundImage: `url(${LogoImage && LogoImage})`,
                backgroundPosition: "center",
                backgroundSize: "70%",
                backgroundRepeat: "no-repeat",
                backgroundColor: LogoImage ? "#ffffff00" : "#1da1f2",
              }}
            >
              {LogoImage ? "" : "LOGO"}
            </div>
          )}

          <div
            className="container_tweet"
            style={{ transform: `scale(${zoomLevel ? zoomLevel : 100}%)` }}
          >
            {isProfile && (
              <div className="tweet-owner">
                <div className="input-avatar">
                  {(avatar && (
                    <img className="input-avatar" src={avatar} />
                  )) || <AvatarLoader />}
                </div>
                <div className="user">
                  <div
                    className="nick "
                    style={{
                      color: textPrimaryColor ? textPrimaryColor : "#000000",
                    }}
                  >
                    {nick || "nickname"}{" "}
                    {isVerified && (
                      <VerifiedIcon
                        color={
                          verifiedIconColor ? verifiedIconColor : "#1d9bf0"
                        }
                      />
                    )}
                  </div>
                  <div
                    className="username "
                    style={{
                      color: textSecondaryColor
                        ? textSecondaryColor
                        : "#adadad",
                    }}
                  >
                    @{username || "username"}
                  </div>
                </div>
              </div>
            )}
            <div className="tweet-content white">
              <p
                style={{
                  color: textPrimaryColor ? textPrimaryColor : "#000000",
                  width:
                    selectedPlatform !== "Auto Fit" ? `${textWidth}%` : "100%",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    (content && contentFormat(content)) ||
                    "rusyaya yönelik yaptırımlarda bizimde tuzumuz biberimiz olması rus konsomatrisçalıştırmama kararı almış. Üçüncü Dünya Savaşı hahhyaptırımlarda bizimde tuzumuz biberimiz olması rus konsomatrisçalıştırmama kararı almış. Üçüncü Dünya Savaşı hahhyaptırımlarda bizimde tuzumuz biberimiz olması rus konsomatrisçalıştırmama kararı almış. Üçüncü Dünya Savaşı hahh",
                }}
              />

              {photos1 && photos2 && photos3 && photos4 ? (
                <div className="photo4">
                  <div className="photo12">
                    <img className="photo4_img" src={photos1 && photos1} />

                    <img className="photo4_img" src={photos2 && photos2} />
                  </div>
                  <div className="photo12">
                    <img className="photo4_img" src={photos3 && photos3} />
                    <img className="photo4_img" src={photos4 && photos4} />
                  </div>
                </div>
              ) : photos1 && photos2 && photos3 ? (
                <div className="photo3">
                  <div className="photo31">
                    <img className="photo31_img" src={photos1 && photos1} />
                  </div>
                  <div className="photo32">
                    <img className="photo32_img" src={photos2 && photos2} />
                    <img className="photo32_img" src={photos3 && photos3} />
                  </div>
                </div>
              ) : photos1 && photos2 ? (
                <div className="photo2">
                  <img className="photo2_img" src={photos1 && photos1} />

                  <img className="photo2_img" src={photos2 && photos2} />
                </div>
              ) : photos1 ? (
                <img className="photo1" src={photos1 && photos1} />
              ) : (
                ""
              )}

              {/* <img className="photo1_img" src={photos2 && photos2} />
                <img className="photo1_img" src={photos3 && photos3} />
                <img className="photo1_img" src={photos4 && photos4} /> */}
            </div>
            <div
              className="tweet-infos "
              style={{
                color: textSecondaryColor ? textSecondaryColor : "#adadad",
              }}
            >
              {isTime && (
                <span className="date">
                  {createdAt ? createdAt : "9:31 AM . Sep 1, 2021"}.
                </span>
              )}
              {isSource && (
                <span className="source">
                  {" "}
                  {source ? source : "Twitter for İphone"}
                </span>
              )}
            </div>
            <div
              className="tweet-stats "
              style={{
                color: textSecondaryColor ? textSecondaryColor : "#adadad",
              }}
            >
              {isReTweets && (
                <span>
                  <b
                    className="gray"
                    style={{
                      color: textPrimaryColor ? textPrimaryColor : "#000000",
                    }}
                  >
                    {retweets}
                  </b>
                  Retweet
                </span>
              )}
              {isReplies && (
                <span>
                  <b
                    className="gray"
                    style={{
                      color: textPrimaryColor ? textPrimaryColor : "#000000",
                    }}
                  >
                    {quoteTweets}
                  </b>
                  Replies
                </span>
              )}
              {isLikes && (
                <span>
                  <b
                    className="gray"
                    style={{
                      color: textPrimaryColor ? textPrimaryColor : "#000000",
                    }}
                  >
                    {likes}
                  </b>
                  Likes
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="button-download">
          <button onClick={getImage} type="submit">
            Oluştur
          </button>
          <div className="download-url">
            {image && (
              <a ref={downloadRef} href={image} download="tweet.png"></a>
            )}
          </div>
        </div> */}
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          variant="contained"
        >
          Download
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => getImage() + setSelectedImageFormat("png")}
            type="submit"
          >
            PNG
            <div className="download-url">
              {image && (
                <a ref={downloadRefPNG} href={image} download="tweet.png"></a>
              )}
            </div>
          </MenuItem>
          <MenuItem
            onClick={() => getImage() + setSelectedImageFormat("png")}
            type="submit"
          >
            JPG
            <div className="download-url">
              {image && (
                <a ref={downloadRefJPG} href={image} download="tweet.jpg"></a>
              )}
            </div>
          </MenuItem>
          <MenuItem
            onClick={() => getImage() + setSelectedImageFormat("png")}
            type="submit"
          >
            SVG
            <div className="download-url">
              {image && (
                <a ref={downloadRefSVG} href={image} download="tweet.svg"></a>
              )}
            </div>
          </MenuItem>
        </Menu>
      </div>
    </>
  );
}
