import React from "react";
import styles from "./authForm.module.css";
import { AuthEntry, PositiveButton } from "../../components";

function AuthForm() {
  return (
    <div className={`${styles.container} bgcolor__light-theme card__shadow`}>
      <p className={styles.title}>Login</p>
      <div className={styles.line} />
      <AuthEntry />
      <div className={styles.entrySpace} />
      <AuthEntry />
      <div className={styles.resetPasswordConatiner}>
        <p>
          Forgot password? <span>Reset</span>
        </p>
      </div>
      <div className={styles.entrySpace} />
      <PositiveButton />
    </div>
  );
}

export default AuthForm;
