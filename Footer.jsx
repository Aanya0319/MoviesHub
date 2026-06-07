import React from "react";

export const Footer=()=>{
    return(
        <>
         <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>MoviesHub</h3>
          <p>Your daily dose of movies, trailers & entertainment.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Movies</li>
            <li>TV Shows</li>
            <li>About</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <span>🌐</span>
            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MoviesHub. All rights reserved.</p>
      </div>
    </footer>
        </>
    )
}