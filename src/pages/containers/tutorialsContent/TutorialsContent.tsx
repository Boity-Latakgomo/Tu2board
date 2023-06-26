import React from "react";
import styles from "./tutorialsContent.module.css";
import { PDFViewer } from "../../components";
import { ProfilePopup } from "../../components";
import { useUser } from "../../../app/providers/user";

interface ITutorialsContentProps {
  isShowProfileIcon?: boolean;
  content?: string;
}

const TutorialsContent = ({
  isShowProfileIcon,
  content,
}: ITutorialsContentProps) => {
  const loggedIn = localStorage.getItem("token");
  if (!loggedIn) {
    window.location.replace("/");
  }

  const { UserDetails } = useUser();

  return (
    <div className={styles.container}>
      {isShowProfileIcon && <ProfilePopup user={UserDetails} />}
      <PDFViewer pdfContent={content} />
    </div>
  );
};

export default TutorialsContent;
