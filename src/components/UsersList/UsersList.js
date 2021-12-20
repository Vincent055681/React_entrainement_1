import React from "react";
import Card from "../UI/Card/Card";
import styles from "./UsersList.module.css";

const UsersList = ({ users }) => {
  return (
    <Card>
      <ul>
        {users.map((user) => (
          <li className={styles.user} key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
