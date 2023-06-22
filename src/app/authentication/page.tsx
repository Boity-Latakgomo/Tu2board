'use client';
import React, {useState} from "react";
import Link from "next/link";
import "../globals.css";
import { AuthHeader, LoginForm, RegisterForm } from "../containers";

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
      <AuthHeader isLogin={isLogin} textClick={setIsLogin}/>
      {isLogin? <LoginForm /> :<RegisterForm />}
    </div>
  );
}

export default Authentication;