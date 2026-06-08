import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src="/farmlogo.jpeg" alt="footer logo" />
        <p>AgroMak</p>
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
          <img src="/igicon.jpeg" alt="IG" />
        </div>
        <div className="footer-icons-container">
          <img src="/whatsicon.jpeg" alt="WHATSAPP" />
        </div>
        <div className="footer-icons-container">
          <img src="/pinticon.png" alt="PHONE" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2025 - All Right Reserved.</p>
      </div>
    </div>
  );
}


