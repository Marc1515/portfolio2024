"use client";

import React, { createContext, useContext, ReactNode, useState } from "react";

type SwitchButtonContextType = {
  flippedIds: Set<number>;
  toggleFlip: (id: number) => void;
};

const SwitchButtonContext = createContext<SwitchButtonContextType | undefined>(
  undefined
);

export const SwitchButtonProvider = ({ children }: { children: ReactNode }) => {
  const [flippedIds, setFlippedIds] = useState<Set<number>>(new Set());

  const toggleFlip = (id: number) => {
    setFlippedIds((prevFlippedIds) => {
      const newFlippedIds = new Set(prevFlippedIds);
      if (newFlippedIds.has(id)) {
        newFlippedIds.delete(id);
      } else {
        newFlippedIds.add(id);
      }
      return newFlippedIds;
    });
  };

  return (
    <SwitchButtonContext.Provider value={{ flippedIds, toggleFlip }}>
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
