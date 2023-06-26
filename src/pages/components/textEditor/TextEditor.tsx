import React, {useState} from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import close from "../../../app/assets/close.png";
import { useAnswer } from "../../../app/providers/answer";
import { message } from "antd";
import { AnswerDto } from "../../../app/interfaces";
import styles from './textEditor.module.css'
import dynamic from 'next/dynamic';

const PositiveButton = dynamic(
    () => import("../../components/positiveButton/PositiveButton"),
    {
      ssr: false,
    }
  );

interface ITextEditorProps {
    id: string;
    setShowPopUp: (value: boolean) => void;  
}

const TextEditor = ({id, setShowPopUp} : ITextEditorProps) => {
    const [editorText, setEditorText] = useState("");
    
    const { createAnswer } = useAnswer();

    const handleSubmit = () => {
        if (!editorText) {
          message.error("You cannot submit empty answer");
          return;
        }
    
        if (!id) {
          message.error("Something went wrong");
          return;
        }
    
        const value: AnswerDto = {
          questionId: id,
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
        "code-block",
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
          ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
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
  )
}

export default TextEditor