import React from "react";
import styles from "./authEntry.module.css";

function AuthEntry() {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Email" />
    </div>
  );
}

export default AuthEntry;
