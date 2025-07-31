"use client";
import React, { forwardRef } from "react";
import styles from "./Input.module.scss";
type InputProps = {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
};
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", placeholder, value, onChange, error }, ref) => {
    return (
      <div className={styles.inputWrapper}>
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={styles.input}
        />
        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  }
);

export default Input;
