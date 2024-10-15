// import React from "react";
// import "./NavBar.css";

// function NavBar() {
//   return (
//     <nav className="navbar">
//       <h2>My App</h2>
//       <ul>
//         <li><a href="#home">Home</a></li>
//         <li><a href="#features">Features</a></li>
//         <li><a href="#pricing">Pricing</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// }

// export default NavBar;

import React from 'react';
import './NavBar.css'; // Ensure correct import path for NavBar CSS

function NavBar({ className }) {
  return (
    <nav className={`NavBar ${className}`}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default NavBar;

