import React from "react";
import { useState } from "react";
import DropdownMenu from "./Dropdown/DropdownMenu";
import "./header.css"

function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="header">
      <header>
        <div
          className="menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button>MENU</button>
         {isDropdownVisible && <DropdownMenu />}
        </div>
      </header>
    </div>
  );
}

export { Header };
