import React, { useState } from "react";

import AddUser from "./AddUser/AddUser";
import styles from "./App.module.css";
import UsersList from "./UsersList/UsersList";

function App() {
  const [users, setUsers] = useState([
    { name: "Jean", age: "15", id: "u1" },
    { name: "Luc", age: "25", id: "u2" },
  ]);

  const addUserHandler = (username, userAge) => {
    console.log(username, userAge);
    setUsers((prevList) => {
      return [
        ...prevList,
        { name: username, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className={styles.app}>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
