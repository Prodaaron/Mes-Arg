import React from "react";
import "./Footer.css";
import Logo from "../assets/mesarg-icon-new.svg?react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <Logo />
            <h2>MES-ARG</h2>
          </div>

          <p>
            Modern PVC & EVA manufacturing solutions built with innovation,
            reliability, and global vision.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div>
            <h3>Navigation</h3>

            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/products">Products</a>
            <a href="/contact">Contact</a>
          </div>

          <div>
            <h3>Services</h3>

            <a href="/">PVC Solutions</a>
            <a href="/">EVA Production</a>
            <a href="/">Manufacturing</a>
            <a href="/">Industrial Supply</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Mes-Arg. All rights reserved.</p>

        <div className="footer-socials">
          <a href="/">LinkedIn</a>
          <a href="/">Facebook</a>
          <a href="/">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;