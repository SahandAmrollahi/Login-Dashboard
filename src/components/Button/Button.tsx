"use client";
import React from "react";
import styles from "./Button.module.scss";
type ButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  type?: "submit" | "button";
};
const Button = ({ onClick, children, type = "button" }: ButtonProps) => {
  return (
    <button onClick={onClick} type={type} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
