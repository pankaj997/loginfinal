import React from "react";
import "./move.css";
import Toggle from "./Toggle.js";
import { Link } from "react-router-dom";
class Move extends React.Component {
  render() {
    const navStyle = {
      color: "black"
    };
    return (
      <div>
        <nav>
          <Toggle />
          <h1 style={navStyle}>Web Page</h1>
          <ul className="nav-links">
            <Link style={navStyle} to="/">
              <li>Home</li>
            </Link>
            <Link style={navStyle} to="/About">
              <li>About</li>
            </Link>
            <Link style={navStyle} to="/Login">
              <li>Login</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Move;
