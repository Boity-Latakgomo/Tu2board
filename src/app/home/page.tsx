"use client";
import React from "react";
import Link from "next/link";
import "../globals.css";
import { NavBar, HomeContent, Footer } from "../containers";

function Page() {
  return (
    <div>
      <NavBar />
      <HomeContent />
      <Footer />
    </div>
  );
}

export default Page;
