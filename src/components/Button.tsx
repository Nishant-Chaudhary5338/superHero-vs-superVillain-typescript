/** @format */

import { ButtonHTMLAttributes, FC, memo } from "react";
import cn from "classnames";
type ButtonProps = {
  theme: "hero" | "villain" | "both";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ theme, ...rest }) => {
  const themeClasses = cn("px-6 py-2 rounded-md shadow-md text-white", {
    "bg-green-500 hover:bg-green-700 active:bg-green-900": theme === "hero",
    "bg-red-500 hover:bg-red-700 active:bg-red-900": theme === "both",
    "bg-purple-500 hover:bg-purple-700 active:bg-purple-900":
      theme === "villain",
  });
  return (
    <>
      <button className={themeClasses} {...rest}></button>
    </>
  );
};

Button.defaultProps = {};

export default memo(Button);
