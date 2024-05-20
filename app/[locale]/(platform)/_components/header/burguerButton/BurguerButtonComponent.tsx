"use client";

import { useMenuContext } from "../../../context/MenuContext";
import "./BurguerButtonComponent.scss";

const BurguerButtonComponent: React.FC = () => {
  const { toggleMenu, burguerButtonOpen } = useMenuContext();

  const handleToggle = () => {
    toggleMenu();
  };

  return (
    <div
      className={burguerButtonOpen ? "menu-button" : "menu-button-open"}
      onClick={handleToggle}
    >
      <div className="menu-button-burguer"></div>
    </div>
  );
};

export default BurguerButtonComponent;
