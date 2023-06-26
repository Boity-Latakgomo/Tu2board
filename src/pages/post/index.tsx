import React from "react";
import Link from "next/link";
import "../../app/globals.css";
import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("../containers/navBar/NavBar"), {ssr:false});
const PostContent = dynamic(() => import("../containers/postContent/PostContent"), {ssr:false});
const Footer = dynamic(() => import("../containers/footer/Footer"), {ssr:false});

function Post() {
  const [showProfileIcon, setShowProfileIcon] = React.useState(false);
  return (
    <div>
      <NavBar setShowProfileIcon={setShowProfileIcon} showProfileIcon={showProfileIcon}/>
      <PostContent isShowProfileIcon={showProfileIcon}/>
      <Footer />
    </div>
  );
}

export default Post;
