import React, { useState } from "react";
import "../../app/globals.css";
import { useUser } from "../../app/providers/user";
import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("../containers/navBar/NavBar"), {
  ssr: false,
});
const HomeContent = dynamic(
  () => import("../containers/homeContent/HomeContent"),
  { ssr: false }
);
const Footer = dynamic(() => import("../containers/footer/Footer"), {
  ssr: false,
});

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [showProfileIcon, setShowProfileIcon] = useState(false);
  return (
    <div>
      <NavBar showSearchBar value={searchText} onValueChange={setSearchText} setShowProfileIcon={setShowProfileIcon} showProfileIcon={showProfileIcon}/>
      <HomeContent searchText={searchText} isShowProfileIcon={showProfileIcon}/>
      <Footer />
    </div>
  );
};

export default Home;
