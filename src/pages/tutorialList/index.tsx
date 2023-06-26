import React, {useEffect} from "react";
import "../../app/globals.css";
import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("../containers/navBar/NavBar"), {ssr:false});
const TutorialListContent = dynamic(() => import("../containers/tutorialListContent/TutorialListContent"), {ssr:false});
const Footer = dynamic(() => import("../containers/footer/Footer"), {ssr:false});

const TutorialList = () => {
  const [showProfileIcon, setShowProfileIcon] = React.useState(false);
  return (
    <div>
      <NavBar setShowProfileIcon={setShowProfileIcon} showProfileIcon={showProfileIcon}/>
      <TutorialListContent isShowProfileIcon={showProfileIcon}/>
      <Footer />
    </div>
  );
};

export default TutorialList;
