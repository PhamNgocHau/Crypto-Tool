import React from 'react';
import { ButtonCustomStyle } from "./style";
import{ SizeType } from 'antd/es/config-provider/SizeContext';

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  type?: "default" | "primary" | "ghost" | "dashed" | "link" | "text";
  shape?: "default" | "circle" | "round";
  disabled?: boolean;
  loading?: boolean | {
    delay?: number;
  };
  danger?: boolean;
  width?: string;
  height?: string;
  color?: string;
  background?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  size?: SizeType;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { className, width, height, color, background, onClick, children } = props;

  return (
    <ButtonCustomStyle 
      {...props}
      className={className}
      style={{ width, height, color, background }}
      onClick={onClick}
    >
      {children}
    </ButtonCustomStyle>
  )
}
  
export default Button;