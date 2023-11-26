import { Button } from "@mui/material";
import React from "react";

interface ButtonProps {
  variant: "text" | "outlined" | "contained";
  label: string;
  width: string;
  height: string;
  type: "button" | "submit" | "reset";
  value: string;
  // eslint-disable-next-line no-unused-vars
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const PentziButton = (props: Partial<ButtonProps>) => {
  const buttonStyle = {
    width: props.width || "auto",
    height: props.height || "auto",
  };

  return (
    <Button
      variant={props.variant}
      style={buttonStyle}
      type={props.type}
      onClick={props.onClick}
    >
      {props.label}
    </Button>
  );
};

export default PentziButton;
