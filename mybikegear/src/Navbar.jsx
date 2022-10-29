import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      {" "}
      <header id="header" className="navbar">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="index.html">
              <span>My Bike</span> Gear
            </a>
          </h1>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <Link
                  className="btn btn-primary text-center p-1 text-white m-2"
                  to="/"
                >
                  {" "}
                  Home{" "}
                </Link>
              </li>

              <li className="dropdown">
                <li>
                  <Link
                    className="btn btn-primary text-center p-1 text-white "
                    to="/"
                  >
                    {" "}
                    About
                  </Link>
                </li>
                <ul>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="team.html">Team</a>
                  </li>
                  <li>
                    <a href="testimonials.html">Testimonials</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  className="btn btn-primary text-center p-1 text-white m-2"
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  className="btn btn-primary text-center p-1 text-white m-2"
                  to="/signup"
                >
                  Register
                </Link>
              </li>

              <li>
                <Link
                  className="btn btn-primary text-center p-1 text-white m-2"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <div className="header-social-links d-flex">
            <a href="#" className="twitter">
              <i className="bu bi-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bu bi-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bu bi-instagram"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bu bi-linkedin"></i>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
