"use client";

import { createContext, useState, ReactNode, useContext } from "react";

interface MenuContextType {
  toggleMenu: () => void;
  navbarOpen: boolean;
  burguerButtonOpen: boolean;
  showLanguageButton: boolean;
  setShowLanguageButton: (show: boolean) => void;
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
  const [showLanguageButton, setShowLanguageButton] = useState(true);

  const toggleMenu = () => {
    const newNavbarOpen = !navbarOpen;
    setNavbarOpen(newNavbarOpen);
    setBurguerButtonOpen((prev) => !prev);
    if (window.scrollY > 500) {
      setShowLanguageButton(newNavbarOpen); // Mostrar si se abre, ocultar si se cierra
    }
  };

  return (
    <MenuContext.Provider
      value={{
        toggleMenu,
        navbarOpen,
        burguerButtonOpen,
        showLanguageButton,
        setShowLanguageButton,
      }}
    >
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
