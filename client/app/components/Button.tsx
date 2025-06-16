import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white hover:brightness-110 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
