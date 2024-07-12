"use client";

import React, { createContext, useContext, ReactNode, useState } from "react";

type SwitchButtonContextType = {
  flippedId: number | null;
  toggleFlip: (id: number) => void;
};

const SwitchButtonContext = createContext<SwitchButtonContextType | undefined>(
  undefined
);

export const SwitchButtonProvider = ({ children }: { children: ReactNode }) => {
  const [flippedId, setFlippedId] = useState<number | null>(null);

  const toggleFlip = (id: number) => {
    setFlippedId((prevFlippedId) => (prevFlippedId === id ? null : id));
  };

  return (
    <SwitchButtonContext.Provider value={{ flippedId, toggleFlip }}>
      {children}
    </SwitchButtonContext.Provider>
  );
};

export const useSwitchButton = () => {
  const context = useContext(SwitchButtonContext);
  if (context === undefined) {
    throw new Error(
      "useSwitchButton must be used within a SwitchButtonProvider"
    );
  }
  return context;
};
