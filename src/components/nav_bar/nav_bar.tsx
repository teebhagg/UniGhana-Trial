import { useState } from "react";
import Avatar from "../avatar";
import Drawer from "../drawer/drawer";

export default function MyNavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const menu_icon = require('../images/menu.svg')
  return (
    <>
      <header className="header">
        <h2><strong>UniGhana</strong></h2>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <Avatar />
            </li>
          </ul>
        </nav>
        <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
      </header>
    </>
  );
}
