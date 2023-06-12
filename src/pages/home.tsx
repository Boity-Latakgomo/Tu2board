import React from "react";
import Link from "next/link";
import "../app/globals.css";
import { NavBar, HomeContent, Footer } from "../app/containers";

function home() {
  return (
    <div>
      <NavBar />
      <HomeContent />
      <Footer />
    </div>
  );
}

export default home;
