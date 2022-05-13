import React from "react";
import "./faq.css";

function Faq() {
  return (
    <div className="faq_cont">
      <div className="faq_left">
        <h1>FAQ: Get the answer you need</h1>
        <p>
          Not sure which pricing option suits you best? Need any clarification
          regarding theUI Vakery pricing model? Check the FAQ section, or write
          to{" "}
          <sek style={{ color: "#1d2bf2", fontWeight: "700" }}>
            support@tweetcapture.com
          </sek>
        </p>
      </div>
      <div className="faq_right">
        <div>
          <h2>Can I get an invoice?</h2>
          <p>
            We process all the payments via Stripe. After paying for your
            subscription, you'll get an invoice. If you need to get a custom
            incoice before paying, we can provide it by prior agreement. In any
            case, payments are made by card. To request a custom incoive, write
            to{" "}
            <sek style={{ color: "#1d2bf2", fontWeight: "700" }}>
              hello@tweetcapture.com
            </sek>
          </p>
        </div>
        <div>
          <h2>How do I change my subscription plan?</h2>
          <p>
            You can upgrade or cancel your subscription anytime via your
            account.
            <br />
            If you upgrade, we recalculate the sum you need to pay this month
            according to the rest period till the next payment date. Thus, you
            don't overpay. If you want to downgrade, you need to cancel your
            subscription and apply for the needed plan.
          </p>
        </div>
        <div>
          <h2>What payment methods do you offer?</h2>
          <p>
            We accept credit and debit cards, i.e. Visa, MasterCard, Google Pay,
            Apple Pay. Payments are processed via Stripe.
          </p>
        </div>
        <div>
          <h2>How can I cancel my account plan?</h2>
          <p>
            There are 3 possible option to cancel your plan in TweetCapture:
            <br />
            1. Cancel a plan in your account.
            <br />
            2. Disable the Auto-renew option in your account.
            <br />
            3. Write to{" "}
            <sek style={{ color: "#1d2bf2", fontWeight: "700" }}>
              support@tweetcapture.com{" "}
            </sek>
            and specify what you need.
            <br />
            <br />
            The plan will be canceled at the end of your current billing period.
            You can enable your Auto-renew option till the end of the current
            billing period while saving all your discounts if any.
          </p>
        </div>
        <div>
          <h2>What is your refund policy?</h2>
          <p>
            If you're on a monthly subscription, no refund is provided. Your
            access to TweetCapture gets canceled at the end of your current
            billing cycle after cancelation. If you opt for an annual
            subscription, you have 7 days after the purchase/renewal to request
            a refund.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Faq;
