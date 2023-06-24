import React, { useState } from "react";
import styles from "./loginForm.module.css";
import { AuthEntry, PositiveButton } from "../../components";
import { useUser } from "../../../app/providers/user";
import { LoginRequest } from "../../../app/interfaces";

function LoginForm() {
  const { loginUser } = useUser();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    console.log("Name: " + username);
    console.log("password: " + password);

    if (!username || !password) {
      console.log("Fill all the fields");
      return;
    }

    const data: LoginRequest = {
      userNameOrEmailAddress: username,
      password: password,
    };

    console.log("Data: ", data);
    if (loginUser) loginUser(data);
  };

  return (
    <div className={`${styles.container} bgcolor__light-theme card__shadow`}>
      <p className={styles.title}>Login</p>
      <div className={styles.line} />
      <AuthEntry
        placeholder="Email address"
        value={username}
        onChange={setUsername}
        type="email"
      />
      <div className={styles.entrySpace} />
      <AuthEntry
        placeholder="Password"
        value={password}
        onChange={setPassword}
        type="password"
      />
      <div className={styles.resetPasswordContainer}>
        <p>
          Forgot password? <span>Reset</span>
        </p>
      </div>
      <div className={styles.entrySpace} />
      <PositiveButton onclick={handleLogin} text="Login"/>
    </div>
  );
}

export default LoginForm;
