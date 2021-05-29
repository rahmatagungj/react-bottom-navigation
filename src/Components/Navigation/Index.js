import React from "react";
import "./Style.scss";
import { MdHome, MdAssignmentTurnedIn, MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="bottom-navigation">
      <ul>
        <li>
          <Link to="/">
            <MdHome />
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <MdAssignmentTurnedIn />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <MdAccountCircle />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
