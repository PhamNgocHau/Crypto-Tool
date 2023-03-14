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

function Button({ children, className, onClick, width, height, color, background, size, icon, disabled, buttonType, ...props }: ButtonProps) {
  return (
    <ButtonCustomStyle 
      {...props}
      className={className}
      style={{
        width: width,
        height: height,
        color: color,
        background: background,
      }}
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