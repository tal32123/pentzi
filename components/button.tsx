import { Button } from '@mui/material';
import React from 'react';

interface ButtonProps {
  variant: 'text' | 'outlined' | 'contained';
  label: string;
  width?: string;
  height?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; 
}

const PentziButton = (props: ButtonProps) => {
  const buttonStyle = {
    width: props.width || 'auto',
    height: props.height || 'auto',
  };

  return (
    <Button variant={props.variant} style={buttonStyle}>
      {props.label}
    </Button>
  );
};

export default PentziButton;
