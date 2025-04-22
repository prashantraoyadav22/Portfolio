import React from "react";
import { twMerge } from "tailwind-merge";

const colorMap = {
  orange: {
    base: "orange-400",
    text: "text-orange-400",
    bg: "bg-orange-400",
    border: "border-orange-400",
    hoverText: "hover:text-orange-400",
    hoverBg: "hover:bg-orange-400",
    hoverBorder: "hover:border-orange-400",
  },
  blue: {
    base: "blue-500",
    text: "text-blue-500",
    bg: "bg-blue-500",
    border: "border-blue-500",
    hoverText: "hover:text-blue-500",
    hoverBg: "hover:bg-blue-500",
    hoverBorder: "hover:border-blue-500",
  },
  red: {
    base: "red-500",
    text: "text-red-500",
    bg: "bg-red-500",
    border: "border-red-500",
    hoverText: "hover:text-red-500",
    hoverBg: "hover:bg-red-500",
    hoverBorder: "hover:border-red-500",
  },
  purple: {
    base: "purple-500",
    text: "text-purple-500",
    bg: "bg-purple-500",
    border: "border-purple-500",
    hoverText: "hover:text-purple-500",
    hoverBg: "hover:bg-purple-500",
    hoverBorder: "hover:border-purple-500",
  },
  green: {
    base: "green-500",
    text: "text-green-500",
    bg: "bg-green-500",
    border: "border-green-500",
    hoverText: "hover:text-green-500",
    hoverBg: "hover:bg-green-500",
    hoverBorder: "hover:border-green-500",
  },
  yellow: {
    base: "yellow-500",
    text: "text-yellow-500",
    bg: "bg-yellow-500",
    border: "border-yellow-500",
    hoverText: "hover:text-yellow-500",
    hoverBg: "hover:bg-yellow-500",
    hoverBorder: "hover:border-yellow-500",
  },
  teal: {
    base: "teal-500",
    text: "text-teal-500",
    bg: "bg-teal-500",
    border: "border-teal-500",
    hoverText: "hover:text-teal-500",
    hoverBg: "hover:bg-teal-500",
    hoverBorder: "hover:border-teal-500",
  },
  pink: {
    base: "pink-500",
    text: "text-pink-500",
    bg: "bg-pink-500",
    border: "border-pink-500",
    hoverText: "hover:text-pink-500",
    hoverBg: "hover:bg-pink-500",
    hoverBorder: "hover:border-pink-500",
  },
};

const Button = ({
  variant = "filled", // 'filled' or 'outlined'
  text,
  icon = null,
  onClick = () => {},
  className = "",
  color = "orange", // use color key like 'orange', 'blue'
}) => {
  const styles = colorMap[color] || colorMap.orange;

  const baseStyle = `
    relative group inline-flex items-center justify-center gap-3
    px-5 py-3 rounded-full transition-all duration-300
  `;

  const filled = `
    text-white ${styles.bg} ${styles.border}
    hover:bg-transparent ${styles.hoverText} border ${styles.hoverBorder} hover:scale-101
  `;

  const outlined = `
    text-white border 
    hover: ${styles.hoverText} ${styles.hoverBorder} hover:scale-101
  `;

  const variantStyle = variant === "filled" ? filled : outlined;

  const combined = twMerge(baseStyle, variantStyle, className);

  return (
    <button onClick={onClick} className={combined}>
      {text && <span>{text}</span>}
      {icon && (
        <span className="transition-transform group-hover:scale-110">
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
