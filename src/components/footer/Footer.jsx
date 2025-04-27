import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src="/farm logo.jpeg" alt="footer logo" />
        <p>SPAGRO</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src="/igicon.jpeg" alt="" />
        </div>
        <div className="footer-icons-container">
          <img src="/whatsicon.jpeg" alt="" />
        </div>
        <div className="footer-icons-container">
          <img src="/pinticon.png" alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2025 - All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
