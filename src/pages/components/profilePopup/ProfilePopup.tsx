import React from "react";
import styles from "./profilePopup.module.css";
import { STPersonDto } from "../../../app/interfaces";

interface IProfilePopup {
  user?: STPersonDto;
}

function ProfilePopup({ user }: IProfilePopup) {
  const handleLogout = () => {
    window.location.replace("/");
    localStorage.clear();
  };

  return (
    <div
      className={`${styles.container} bgcolor__light-theme card__shadow slide-bottom`}
    >
      <div className={styles.row}>
        <p className={styles.title}>Student no:</p>
        <p>{user?.userName}</p>
      </div>
      <div className={styles.row}>
        <p className={styles.title}>Name:</p>
        <p className={styles.name}>{user?.name}</p>
        <p>{user?.surname}</p>
      </div>
      <p className={styles.logoutText} onClick={handleLogout}>
        Logout
      </p>
    </div>
  );
}

export default ProfilePopup;
