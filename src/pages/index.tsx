import React, {useState} from 'react'
import "../app/authglobal.css";
import dynamic from 'next/dynamic';
import styles from "./auth.module.css";
import authpic from "../app/assets/authpic.jpeg";

const AuthHeader = dynamic(() => import("./containers/authHeader/AuthHeader"), {ssr:false});
const LoginForm = dynamic(() => import("./containers/loginForm/LoginForm"), {ssr:false});
const RegisterForm = dynamic(() => import("./containers/registerForm/RegisterForm"), {ssr:false});

const Authentication = () => {
    const [isLogin, setIsLogin] = useState(true);
  return (
    <div className={styles.container}>
        <AuthHeader isLogin={isLogin} textClick={setIsLogin}/>
      {isLogin? <LoginForm /> :<RegisterForm />}
      <div className={styles.imageContainer}>
        <img src={authpic.src} alt="authentication-picture" />
      </div>
    </div>
  )
}

export default Authentication