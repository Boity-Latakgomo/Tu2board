import React from "react";
import dynamic from "next/dynamic";
import "../../app/globals.css";

const NavBar = dynamic(() => import("../containers/navBar/NavBar"), {
  ssr: false,
});
const TutorialsContent = dynamic(
  () => import("../containers/tutorialsContent/TutorialsContent"),
  { ssr: false }
);
const Footer = dynamic(() => import("../containers/footer/Footer"), {
  ssr: false,
});

const Tutorials = () => {
  const [showProfileIcon, setShowProfileIcon] = React.useState(false);
  return (
    <div>
      <NavBar setShowProfileIcon={setShowProfileIcon} showProfileIcon={showProfileIcon}/>
      <TutorialsContent isShowProfileIcon={showProfileIcon}/>
      <Footer />
    </div>
  );
};

export default Tutorials;
