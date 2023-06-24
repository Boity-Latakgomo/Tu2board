import React, {useState} from 'react'
import "../app/globals.css";
import dynamic from 'next/dynamic';

const AuthHeader = dynamic(() => import("./containers/authHeader/AuthHeader"), {ssr:false});
const LoginForm = dynamic(() => import("./containers/loginForm/LoginForm"), {ssr:false});
const RegisterForm = dynamic(() => import("./containers/registerForm/RegisterForm"), {ssr:false});

const Authentication = () => {
    const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
        <AuthHeader isLogin={isLogin} textClick={setIsLogin}/>
      {isLogin? <LoginForm /> :<RegisterForm />}
    </div>
  )
}

export default Authentication