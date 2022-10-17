import React from "react";

const Navbar = () => {
  return (
    <>
      {" "}
      <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center">
          <h1 class="logo me-auto">
            <a href="index.html">
              <span>My Bike</span> Gear
            </a>
          </h1>

          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li>
                <a href="index.html" class="active">
                  Home
                </a>
              </li>

              <li class="dropdown">
                <a href="#">
                  <span>About</span> <i class="bi bi-chevron-down"></i>
                </a>
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
                  <li class="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i class="bi bi-chevron-right"></i>
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
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="portfolio.html">My Gears</a>
              </li>
              <li>
                <a href="pricing.html">Market Place</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <div class="header-social-links d-flex">
            <a href="#" class="twitter">
              <i class="bu bi-twitter"></i>
            </a>
            <a href="#" class="facebook">
              <i class="bu bi-facebook"></i>
            </a>
            <a href="#" class="instagram">
              <i class="bu bi-instagram"></i>
            </a>
            <a href="#" class="linkedin">
              <i class="bu bi-linkedin"></i>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;