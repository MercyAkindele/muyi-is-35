import React, { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  //Mobile view click handler
  const onClickBurger = () => {
    setIsOpen(!isOpen);
  };
  //For all li's animate the li by fading in. This will happen only once
  const navLinks = document.querySelectorAll(".nav-links li");
  navLinks.forEach((link, index) => {
    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
  });
  return (
    <div className="navigation-container">
      <nav>
        <div className="title">
          <h4>Muyi's 35th Birthday</h4>
        </div>
        {/* For className nav-links if isOpen is true, change to className nav-active */}
        <ul className={`nav-links ${isOpen ? "nav-active" : ""}`}>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
          <li>
            <a
              href="https://www.amazon.com/hz/wishlist/ls/1QAWFEHYCBV1W?ref_=wl_share"
              target="react/jsx-no-target-blank"
            >
              Registry
            </a>
          </li>
        </ul>
        <div onClick={onClickBurger} className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}
