import React, { useState, useEffect } from "react";
import styles from "./tutorialListContent.module.css";
import { TutorialItem } from "../../containers";
import { useUser } from "../../../app/providers/user";
import { ProfilePopup } from "../../components";
import dynamic from "next/dynamic";
import students from "../../../app/assets/students.png";
import educationMaterials from "../../../app/assets/educationMaterials.png";
import api from "../../../app/api";
import { StoredFileDto } from "../../../app/interfaces";
import { message } from "antd";

const TutorialsContent = dynamic(
  () => import("../../containers/tutorialsContent/TutorialsContent"),
  { ssr: false }
);

const BubbleItem = dynamic(
  () => import("../../components/bubbleItem/BubbleItem"),
  { ssr: false }
);

interface ITutorialListContentProps {
  isShowProfileIcon?: boolean;
}

function TutorialListContent({ isShowProfileIcon }: ITutorialListContentProps) {
  const loggedIn = localStorage.getItem("token");
  if (!loggedIn) {
    window.location.replace("/");
  }

  const [files, setFiles] = useState<StoredFileDto[]>([]);
  const [contentToView, setContentToView] = useState("");

  const handleOnContentToView = (content: string) => {
    if (!content) {
      message.error("There is no content to display");
      return;
    }
    setContentToView(content);
  };

  useEffect(() => {
    api
      .get(
        `https://localhost:44311/api/services/app/StoredFile/GetFilesByApplicantId`,
        { responseType: "json" }
      )
      .then((response) => {
        const allFiles: StoredFileDto[] = response.data.result;
        setFiles(allFiles);
        console.log("allFiles: ", allFiles);
      })
      .catch((error) => {
        console.log("error::", error);
      });
  }, []);

  const { UserDetails } = useUser();
  return (
    <div className={styles.container}>
      <BubbleItem text="Tutorials" />
      {isShowProfileIcon && <ProfilePopup user={UserDetails} />}
      <div
        style={isShowProfileIcon ? { height: "60px" } : { height: "20px" }}
      />
      <div className={styles.gridContent}>
        <div className={styles.listContainer}>
          {files && files.length > 0 ? (
            files.map((item, index) => (
              <TutorialItem
                data={item}
                key={index}
                onClick={handleOnContentToView}
              />
            ))
          ) : (
            <div className={styles.emptyListView}>
              <p>No tutorials added</p>
            </div>
          )}
        </div>
        <div className={styles.pdfViewer}>
          <TutorialsContent content={contentToView} />
        </div>
      </div>
      <div className={styles.topImageContainer}>
        <img src={educationMaterials.src} alt="education-materials" />
      </div>
      <div className={styles.bottomImageContainer}>
        <img src={students.src} alt="students" />
      </div>
    </div>
  );
}

export default TutorialListContent;
