import React, { useEffect, useState } from "react";
import "../../app/globals.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import styles from "./qa.module.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import close from "../../app/assets/close.png";
import { useAnswer } from "../../app/providers/answer";
import { message } from "antd";
import { AnswerDto } from "../../app/interfaces";

const NavBar = dynamic(() => import("../containers/navBar/NavBar"), {
  ssr: false,
});
const QaContent = dynamic(() => import("../containers/qaContent/QaContent"), {
  ssr: false,
});
const Footer = dynamic(() => import("../containers/footer/Footer"), {
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
  const [showPopUp, setShowPopUp] = useState(false);
  const [editorText, setEditorText] = useState("");

  const { createAnswer } = useAnswer();

  const { questionId } = router.query;
  const qId = questionId?.toString();

  const handleSubmit = () => {
    if (!editorText) {
      message.error("You cannot submit empty answer");
      return;
    }

    if (!qId) {
      message.error("Something went wrong");
      return;
    }

    const value: AnswerDto = {
      questionId: qId,
      text: editorText,
    };

    console.log("data:::", value);
    if (createAnswer) createAnswer(value);

    setShowPopUp(false);
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  return (
    <div>
      <NavBar />
      <QaContent questionId={qId} onAnswerClick={setShowPopUp} />
      <Footer />
      {showPopUp && (
        <div className={styles.popUpContainer}>
          <div className={`${styles.popUp}`}>
            <div className={styles.bodyTextContainer}>
              <p>Answer</p>
              <div
                className={styles.closeIconContainer}
                onClick={() => setShowPopUp(false)}
              >
                <img src={close.src} alt="close" />
              </div>
            </div>
            <div className={`${styles.bodyContainer} bgcolor__light-theme`}>
              <ReactQuill
                className={styles.bodyInput}
                theme="snow"
                value={editorText}
                modules={modules}
                onChange={setEditorText}
                formats={formats}
              />
            </div>
            <div className={styles.buttonContainer}>
              <PositiveButton onclick={handleSubmit} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Qa;

// bodyCover => popUp
