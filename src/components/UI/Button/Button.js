import React from "react";
import styles from "./Button.module.css";

const Button = ({ onClick, type, content }) => {
  return (
    <button className={styles.button} onClick={onClick} type={type || "button"}>
      {content}
    </button>
  );
};

export default Button;
