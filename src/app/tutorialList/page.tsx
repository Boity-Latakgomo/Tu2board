"use client";
import React from "react";
import "../globals.css";
import { NavBar, TutorialListContent, Footer } from "../containers";

const TutorialList = () => {
  return (
    <div>
      <NavBar />
      <TutorialListContent />
      <Footer />
    </div>
  );
};

export default TutorialList;
