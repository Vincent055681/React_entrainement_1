import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = ({ onAddUser }) => {
  const [username, setUsername] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState(null);

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (username.trim() === "" || userAge.trim() === "") {
      setError({
        title: "Invalid input",
        message: "All fields must have a value (not empty values)",
      });
    } else if (userAge < 1) {
      setError({ title: "Invalid input", message: "Age must be > 0" });
    } else {
      setUsername("");
      setUserAge("");
      onAddUser(username, userAge);
    }
  };

  const changeUsernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const changeAgeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null)
  }

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={styles.formContainer}>
        <form onSubmit={submitFormHandler}>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              onChange={changeUsernameHandler}
              value={username}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="age">Age (Years)</label>
            <input type="number" onChange={changeAgeHandler} value={userAge} />
          </div>
          <Button type="submit" content="Add user" />
        </form>
      </Card>
    </>
  );
};

export default AddUser;
