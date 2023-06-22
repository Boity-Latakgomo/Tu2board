"use client";
import React from "react";
import Link from "next/link";
import "../globals.css";
import { NavBar, PostContent, Footer } from "../containers";

function Post() {
  return (
    <div>
      <NavBar />
      <PostContent />
      <Footer />
    </div>
  );
}

export default Post;
