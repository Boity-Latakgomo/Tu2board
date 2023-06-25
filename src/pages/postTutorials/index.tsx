import React from "react";
import dynamic from "next/dynamic";
import "../../app/globals.css";

const NavBar = dynamic(() => import("../containers/navBar/NavBar"), {
  ssr: false,
});
const PostContentTutorials = dynamic(
  () => import("../containers/postContentTutorials/PostContentTutorials"),
  {
    ssr: false,
  }
);
const Footer = dynamic(() => import("../containers/footer/Footer"), {
  ssr: false,
});

function PostTutorials() {
  return (
    <div>
      <NavBar />
      <PostContentTutorials />
      <Footer />
    </div>
  );
}

export default PostTutorials;
