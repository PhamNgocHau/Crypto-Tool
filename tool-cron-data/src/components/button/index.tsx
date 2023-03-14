import React from 'react';
import { ButtonCustomStyle } from "./style";
import type { SizeType } from 'antd/es/config-provider/SizeContext';
interface ButtonProps {
  className?: string;
  onClick?: () => void;
  buttonType?: "default" | "primary" | "ghost" | "dashed" | "link" | "text";
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
  const { className, width, height, color, background, onClick, buttonType, disabled, size, icon, children } = props;

  return (
    <ButtonCustomStyle 
      {...props}
      className={className}
      style={{ width, height, color, background }}
      onClick={onClick}
      type={buttonType}
      disabled={disabled}
      size={size}
      icon={icon}
    >
      {children}
    </ButtonCustomStyle>
  )
}
  
export default Button;