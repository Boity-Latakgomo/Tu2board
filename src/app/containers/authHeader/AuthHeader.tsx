import React from "react";
import styles from "./authHeader.module.css";
import coveredLogo from "../../assets/coveredLogo.png";

const AuthHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={coveredLogo.src} alt="covered-logo" />
      </div>
      <p className={styles.headerText}>Don't have account? <span>Register</span></p>
    </div>
  );
};

export default AuthHeader;
