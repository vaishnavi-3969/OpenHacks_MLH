import React from "react";
import Products from "./Products";
const Home = () => {
  return (
    <div className="hero">
      <div class="card text-bg-dark border-0">
        <img src="/assets/bg.jpg" class="card-img" alt="bg" height="350px" />
        <div className="container">
          <div class="card-img-overlay d-flex flex-column justify ">
            <h5 class="card-title display-3 fw-bolder mb-0">
              Are you ready to make a difference? Take the Sustainable Oath
              today!
            </h5>
            <p class="card-text lead fs-2" style={{ color: "black" }}>
              Turn your trash into treasure!
            </p>
            <p class="text" style={{ color: "brown" }}>
              We plant a tree for every product you buy! Send in your recyclable
              products and watch your savings soar. Our trusted partner will
              even come to your doorstep to collect your items. Don't miss out
              on this opportunity to save and make a positive impact on the
              environment. Earn points and get free deliverables and coupons for
              sending us your recyclable items.
            </p>
          </div>
        </div>
      </div>
      <blockquote class="blockquote mb-0" align="center">
        <p style={{ color: "grey" }}>
          “The best way to predict the future is to create it.” - Peter Drucker
        </p>
      </blockquote>
      <Products />
      <br />
      <hr />
      <br />
      <div>
        <p
          align="center"
          class="card-text lead fs-2"
          style={{ color: "black" }}
        >
          Want to donate your recyclables and get Free Coupons and discounts?
        </p>
        <p align="center">
          Recyclable items may include but not limited to newspapers, plastic
          jars, old clothes,
          <br />
          old stationery, and so on...
          <br></br>
          Fill up the this to send us your Trash and we convert it into
          treasure. <br />
          We also provide you with a tracking number so that you can
          <br />
          track what we do with the items you send :)
        </p>
        <p align="center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfhWJ5DvekqwfolYwszdwh2iAhh8TiwE7ryQ9ryeV-fAl2C9Q/viewform?usp=sf_link"
            className="btn btn-outline-dark me-2"
          >
            <i className="fa fa-arrow-right me-1"></i>Click Me
          </a>
        </p>
      </div>
      <br />
      <hr />
      <br />
      {/* adding dialogFlow api chatbot */}

      <div>
        <p
          align="center"
          class="card-text lead fs-2"
          style={{ color: "black" }}
        >
          Help Desk
        </p>
        <p align="center">
          <iframe
            title="unique"
            width="350"
            height="430"
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/e4d6ee77-7180-4eef-88a6-5379c5a1278a"
          ></iframe>
        </p>
      </div>
    </div>
  );
};
export default Home;
