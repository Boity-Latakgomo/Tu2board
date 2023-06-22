import React from "react";
import styles from "./authHeader.module.css";
import coveredLogo from "../../assets/coveredLogo.png";

interface IAuthHeaderProps {
  isLogin: boolean;
  textClick: (isLogin: boolean) => void;
}

const AuthHeader = ({isLogin, textClick}: IAuthHeaderProps) => {
  const _isLogin = isLogin;
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={coveredLogo.src} alt="covered-logo" />
      </div>
      {isLogin? <p onClick={() => textClick(!_isLogin)} className={styles.headerText}>Don&apos;t have account? <span>Register</span></p>
      :
      <p onClick={() => textClick(!_isLogin)} className={styles.headerText}>Do you have account? <span>Login</span></p>}
    </div>
  );
};

export default AuthHeader;
