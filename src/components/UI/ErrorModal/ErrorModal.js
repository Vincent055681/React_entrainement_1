import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./ErrorModal.module.css";

const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <>
      <div className={styles.disable_background} onClick={onConfirm}></div>
      <Card className={styles.error_modal}>
        <header className={styles.header}>
          <h3>{title}</h3>
        </header>
        <main  className={styles.main}>
          <p>{message}</p>
        </main>
        <footer className={styles.footer}>
          <Button content="Okay" onClick={onConfirm}/>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
