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
  const [showProfileIcon, setShowProfileIcon] = React.useState(false);
  return (
    <div>
      <NavBar setShowProfileIcon={setShowProfileIcon} showProfileIcon={showProfileIcon}/>
      <PostContentTutorials isShowProfileIcon={showProfileIcon}/>
      <Footer />
    </div>
  );
}

export default PostTutorials;
