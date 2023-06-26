import React, { useState } from "react";
import { Upload, Button, message } from "antd";
import api from "../../../app/api";
import { useUser } from "../../../app/providers/user";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { UploadOutlined } from "@ant-design/icons";
import styles from "./postTutorialsContent.module.css";
import {
  BubbleItem,
  PositiveButton,
  NegativeButton,
  ProfilePopup,
} from "../../components";
import students from "../../../app/assets/students.png";
import educationMaterials from "../../../app/assets/educationMaterials.png";

interface IPostContentTutorialsProps {
  isShowProfileIcon?: boolean;
}

const PostContentTutorials = ({
  isShowProfileIcon,
}: IPostContentTutorialsProps) => {
  const { UserDetails, getUserDetails } = useUser();
  const loggedIn = localStorage.getItem("token");
  if (!loggedIn) {
    window.location.replace("/");
  }

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [pdfFile, setPdfFile] = useState(null);
  //   const [pdfFile, setPdfFile] = useState(URL);
  const [pdfError, setPdfError] = useState("");
  const [fileContent, setFileContent] = useState(null);

  const allowedFiles = ["application/pdf"];
  const handleFile = (file) => {
    if (file) {
      if (file && allowedFiles.includes(file.type)) {
        setPdfError("");
        setPdfFile(URL.createObjectURL(file));
        setFileContent(file);
      } else {
        setPdfError("Not a valid PDF: Please select only PDF files");
        setPdfFile(null);
      }
    } else {
      console.log("Please select a PDF");
    }
  };

  const handleCancel = () => {
    setPdfFile(null);
    setFileContent(null);
  };

  const handleSave = () => {
    // Create FormData object
    console.log("fileContent:: ", fileContent);
    const formData = new FormData();
    formData.append("File", fileContent);

    console.log("formData:: ", formData);

    // Send the file to the backend API
    api
      .post(
        "https://localhost:44311/api/services/app/StoredFile/UploadFile",
        formData
      )
      .then((response) => {
        // Handle the response from the backend if needed
        console.log("File uploaded successfully");
        message.success("submitted succesfully");
        window.location.replace("/home");
      })
      .catch((error) => {
        // Handle the error if the upload fails
        console.error("File upload error:", error);
      });
  };

  return (
    <div className={styles.container}>
      {isShowProfileIcon && <ProfilePopup user={UserDetails} />}
      <div className={styles.sectionA}>
        <form>
          <label>
            <BubbleItem text="Upload PDF" />
          </label>
          <br />

          <Upload
            beforeUpload={(file) => {
              handleFile(file);
              return false;
            }}
          >
            <Button
              className={styles.uploaderContainer}
              icon={<UploadOutlined />}
            >
              Click to Upload
            </Button>
          </Upload>

          {pdfError && <span className="text-danger">{pdfError}</span>}
        </form>
        {fileContent ? <h5>View PDF</h5> : null}
        <div className={styles.viewer}>
          {pdfFile ? (
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.7.107/build/pdf.worker.min.js">
              <Viewer
                fileUrl={pdfFile}
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          ) : (
            <div>No file is selected yet</div>
          )}
        </div>
      </div>
      {fileContent ? (
        <>
          {" "}
          <div className={styles.buttonContainer}>
            <PositiveButton onclick={() => handleSave()} text="Save" />
          </div>
          <div className={styles.buttonContainer}>
            <NegativeButton onclick={handleCancel} text="Cancel" />
          </div>
        </>
      ) : null}
      <div className={styles.topImageContainer}>
        <img src={educationMaterials.src} alt="education-materials" />
      </div>
      <div className={styles.bottomImageContainer}>
        <img src={students.src} alt="students" />
      </div>
    </div>
  );
};

export default PostContentTutorials;
