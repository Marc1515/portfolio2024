"use client";

import { createContext, useState, ReactNode, useContext } from "react";

interface MenuContextType {
  toggleMenu: () => void;
  navbarOpen: boolean;
  burguerButtonOpen: boolean;
}

export const MenuContext = createContext<MenuContextType | undefined>(
  undefined
);

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [burguerButtonOpen, setBurguerButtonOpen] = useState(true);

  const toggleMenu = () => {
    setNavbarOpen((prev) => !prev);
    setBurguerButtonOpen((prev) => !prev);
  };

  return (
    <MenuContext.Provider value={{ toggleMenu, navbarOpen, burguerButtonOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuProvider");
  }
  return context;
};
