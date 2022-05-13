import React from "react";
import "./pricing.css";
import Check from "../assets/check.png";
import {
  InstagramIcon,
  TiktokIcon,
  LinkedinIcon,
  FacebookIcon,
  AutoFitIcon,
} from "./icons";
function Pricing() {
  return (
    <div className="pricing_cont">
      <p className="pricing_title">Pricing</p>
      <p className="pricing_text">It's easy to Get Started</p>
      <div className="pricing_buttons">
        <p>Yearly</p>
        <p>Monthly</p>
      </div>
      <div className="card_cont">
        <div className="card_free">
          <div className="card_top">
            <div className="card_title">
              <p
                style={{
                  color: "#4b5663",
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                Free
              </p>
              <p
                style={{
                  color: "#4b5663",
                  fontSize: "36px",
                  fontWeight: "600",
                }}
              >
                $0/mo
              </p>
            </div>
            <div className="card_prop">
              <div>
                <img src={Check} className="check" />
                <p>1 social profile</p>
              </div>
              <div>
                <img src={Check} className="check" />
                <p>Unlimited Image</p>
              </div>
            </div>
          </div>
          <div className="card_bottom">
            <p
              style={{
                color: "#4b5663",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              Support Social Medias
            </p>
            <div className="social-icons">
              <InstagramIcon />
            </div>
            <button className="subs_button">Subscription</button>
          </div>
        </div>
        <div className="card_free">
          <div className="card_top">
            <div className="card_title">
              <p
                style={{
                  color: "#4b5663",
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                Starter
              </p>
              <p
                style={{
                  color: "#4b5663",
                  fontSize: "36px",
                  fontWeight: "600",
                }}
              >
                $3/mo
              </p>
            </div>
            <div className="card_prop">
              <div>
                <img src={Check} className="check" />
                <p>1 social profile</p>
              </div>
              <div>
                <img src={Check} className="check" />
                <p>Remove Watermark</p>
              </div>
              <div>
                <img src={Check} className="check" />
                <p>Unlimited Image</p>
              </div>
            </div>
          </div>
          <div className="card_bottom">
            <p
              style={{
                color: "#4b5663",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              Support Social Medias
            </p>
            <div className="social-icons">
              <InstagramIcon />
            </div>
            <button className="subs_button">Subscription</button>
          </div>
        </div>
        <div className="card_free">
          <div className="card_top">
            <div className="card_title">
              <p
                style={{
                  color: "#4b5663",
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                Pro
              </p>
              <p
                style={{
                  color: "#4b5663",
                  fontSize: "36px",
                  fontWeight: "600",
                }}
              >
                $6/mo
              </p>
            </div>
            <div className="card_prop">
              <div>
                <img src={Check} className="check" />
                <p>All Social Media </p>
              </div>
              <div>
                <img src={Check} className="check" />
                <p>All Dimension </p>
              </div>
              <div>
                <img src={Check} className="check" />
                <p>Remove Watermark </p>
              </div>
              <div>
                <img src={Check} className="check" />
                <p>Custom Logo and Background </p>
              </div>
              <div>
                <img src={Check} className="check" />
                <p>Unlimited Image</p>
              </div>
            </div>
          </div>
          <div className="card_bottom">
            <p
              style={{
                color: "#4b5663",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              Support Social Medias
            </p>
            <div className="social-icons">
              <InstagramIcon />
              <TiktokIcon />
              <LinkedinIcon />
              <FacebookIcon />
            </div>
            <button className="subs_button">Subscription</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
