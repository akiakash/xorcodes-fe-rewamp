import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <header>
        <h1>XorCodes</h1>
        <nav>
          <div className="nav-links">
            <li>
              <a href="#">Discover</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li className="contact">
              <a href="#">Contact us</a>
            </li>
          </div>
        </nav>
      </header>

      <div className="home-main">
        <h1 className="home-content">Innovation</h1>
        <h1 className="home-content">Technology</h1>
        <h1 className="home-content">Solution</h1>
      </div>
    </>
  );
}
