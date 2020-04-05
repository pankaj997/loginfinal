import React from "react";
import "./side.css";
import { Link } from "react-router-dom";
const Side = props => (
<nav>
          <ul className="sideul">
            <Link className="sidelink " to="/">
              <li>Home</li>
            </Link>
            <Link className="sidelink " to="/About">
              <li>About</li>
            </Link>
            <Link className="sidelink " to="/Login">
              <li>Login</li>
            </Link>
          </ul>
        </nav>
);
export default Side;
