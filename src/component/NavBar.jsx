import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="/">
            <img
              src="../assets/logo.png"
              alt="logo"
              height="50px"
              width="50px"
            />
            Nature Bridge
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
            <i className="fa fa-user me-1"></i>
            <li>
              {isAuthenticated && <p>{user.name + "|| " + user.email}</p>}
            </li>

            {isAuthenticated ? (
              <li>
                {/* logout */}
                <a
                  href="/login"
                  className="btn btn-outline-dark me-1"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  <i className="fa fa-sign-out me-1"></i>Logout
                </a>
                <a href="/cart" className="btn btn-outline-dark me-2">
                  <i className="fa fa-shopping-cart me-1"></i>Cart(0)
                </a>
              </li>
            ) : (
              <li>
                {/* login */}
                <a
                  href="/login"
                  className="btn btn-outline-dark me-2"
                  onClick={() => loginWithRedirect()}
                >
                  <i className="fa fa-sign-in me-1"></i>Login
                </a>

                <a
                  href="/register"
                  className="btn btn-outline-dark me-2"
                  onClick={() => loginWithRedirect()}
                >
                  <i className="fa fa-user-plus me-1"></i>Register
                </a>
              </li>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
