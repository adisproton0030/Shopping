import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-none",
  round: "rounded-md",
};
const variants = {
  outline: {
    blue_A700: "border border-blue-A700 border-solid text-blue-A700",
    blue_gray_400: "border border-blue_gray-400 border-solid text-black-900_02",
    blue_gray_100_01: "border border-blue_gray-100_01 border-solid",
    blue_gray_100: "border border-blue_gray-100 border-solid",
  },
  fill: {
    blue_A700: "bg-blue-A700 text-white-A700",
    white_A700_b2: "bg-white-A700_b2 text-black-900_e4",
    green_600: "bg-green-600 text-gray-50",
    blue_gray_100: "bg-blue_gray-100 text-black-900_02",
  },
};
const sizes = {
  xs: "p-1",
  sm: "p-[7px]",
  md: "p-3",
  lg: "p-[15px]",
  xl: "p-[18px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "lg",
  variant = "fill",
  color = "blue_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "blue_A700",
    "blue_gray_400",
    "blue_gray_100_01",
    "blue_gray_100",
    "white_A700_b2",
    "green_600",
  ]),
};

export { Button };
