import React from "react";
import Link from "next/link";
import "../app/globals.css";
import { AuthHeader, AuthForm } from "../app/containers";

function authentication() {
  return (
    <div>
      <AuthHeader />
      <AuthForm />
    </div>
  );
}

export default authentication;
