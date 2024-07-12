"use client";

import { Button } from "@/components/ui/button";
import { TbSwitchHorizontal } from "react-icons/tb";
import React from "react";
import { useSwitchButton } from "../../../context/SwitchButtonContext";

type SwitchButtonProps = {
  id: number;
};

const SwitchButtonComponent = ({ id }: SwitchButtonProps) => {
  const { toggleFlip } = useSwitchButton();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    console.log(`Button clicked for ID: ${id}`);
    toggleFlip(id);
  };

  return (
    <Button onClick={handleClick}>
      <TbSwitchHorizontal />
    </Button>
  );
};

export default SwitchButtonComponent;
