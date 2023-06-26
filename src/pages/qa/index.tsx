import React, { useEffect, useState } from "react";
import "../../app/globals.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";



const NavBar = dynamic(() => import("../containers/navBar/NavBar"), {
  ssr: false,
});
const QaContent = dynamic(() => import("../containers/qaContent/QaContent"), {
  ssr: false,
});
const Footer = dynamic(() => import("../containers/footer/Footer"), {
  ssr: false,
});

const TextEditor = dynamic(() => import("../components/textEditor/TextEditor"), {
  ssr: false,
});

const PositiveButton = dynamic(
  () => import("../components/positiveButton/PositiveButton"),
  {
    ssr: false,
  }
);

const Qa = () => {
  const router = useRouter();
  const [showProfileIcon, setShowProfileIcon] = React.useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  const { questionId } = router.query;
  const qId = questionId?.toString();

  

  return (
    <div>
      <NavBar setShowProfileIcon={setShowProfileIcon} showProfileIcon={showProfileIcon}/>
      <QaContent questionId={qId} onAnswerClick={setShowPopUp} isShowProfileIcon={showProfileIcon}/>
      <Footer />
      {qId && showPopUp? <TextEditor id={qId} setShowPopUp={setShowPopUp}/> : null}
    </div>
  );
};

export default Qa;

// bodyCover => popUp
