import React from "react";
import "./Style.scss";
import { MdHome, MdAssignmentTurnedIn, MdAccountCircle } from "react-icons/md";

const Navigation = () => {
  return (
    <div className="bottom-navigation">
      <ul>
        <li>
          <MdHome />
        </li>
        <li>
          <MdAssignmentTurnedIn />
        </li>
        <li>
          <MdAccountCircle />
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
