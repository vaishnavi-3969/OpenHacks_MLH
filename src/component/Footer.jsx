import React from "react";

const Footer = () => {
  return (
    <div>
      <p align="center">
        <img src="/assets/bg.jpg" class="card-img" alt="" height="100px" />
        <p>
          <h1>Contact Us: </h1>
        </p>
        <a
          href="mailto:vaishnavi.kale3011@gmail.com"
          className="btn btn-outline-dark"
        >
          <i className="shadow p-3 fa fa-envelope me-1"> Email</i>
        </a>
        <a
          href="https://www.instagram.com"
          className="shadow p-3 btn btn-outline-dark m-2"
        >
          <i className="fa fa-instagram me-1"> Instagram</i>
        </a>
        <a href="https://www.facebook.com" className="btn btn-outline-dark m-2">
          <i className="shadow p-3 fa fa-facebook me-1"> FaceBook</i>
        </a>
        <a href="https://www.linkedin.com" className="btn btn-outline-dark m-2">
          <i className="shadow p-3 fa fa-linkedin me-1"> Linkedin</i>
        </a>
        <a href="https://twitter.com" className="btn btn-outline-dark m-2">
          <i className="shadow p-3 fa fa-twitter me-1"> Twitter</i>
        </a>

        <a href="https://reddit.com" className="btn btn-outline-dark m-2">
          <i className="shadow p-3 fa fa-reddit me-1"> Reddit</i>
        </a>
        <br />
        <hr />
        <h3>Made with &#x2764; by &#169;Nature Bridge</h3>
        <br></br>
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-info" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-light" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-dark" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </p>
    </div>
  );
};

export default Footer;
