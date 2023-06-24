import React, {useEffect} from "react";
import "../../app/globals.css";
import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("../containers/navBar/NavBar"), {ssr:false});
const TutorialListContent = dynamic(() => import("../containers/tutorialListContent/TutorialListContent"), {ssr:false});
const Footer = dynamic(() => import("../containers/footer/Footer"), {ssr:false});

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
