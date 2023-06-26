import React, { useState, useEffect } from "react";
import styles from "./postContent.module.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  AttachmentAdder,
  PositiveButton,
  PostEntryPicker,
  ProfilePopup,
} from "../../components";
import { useCourse } from "../../../app/providers/Course";
import { useUser } from "../../../app/providers/user";
import { ModuleDto } from "../../../app/interfaces";
import { QuestionDto } from "../../../app/interfaces";
import { useQuestion } from "../../../app/providers/question";
import { message } from "antd";
import students from "../../../app/assets/students.png";
import educationMaterials from "../../../app/assets/educationMaterials.png";

interface IPostContentProps {
  isShowProfileIcon?: boolean;
}

const PostContent = ({isShowProfileIcon}: IPostContentProps) => {
  
  const loggedIn = localStorage.getItem("token");
  if(!loggedIn){
    window.location.replace("/");
  }
  const [editorState, setEditorState] = useState("");
  const [moduleSelected, setModuleSelected] = useState<ModuleDto | undefined>(
    undefined
  );
  const [title, setTitle] = useState("");
  const { UserDetails } = useUser();
  const { listModules, modulesList } = useCourse();

  const { createQuestion } = useQuestion();

  useEffect(() => {
    if (UserDetails) {
      if (listModules) listModules(UserDetails.courseId);
    }
  }, [UserDetails]);

  const handleSubmit = () => {
    if (!title) {
      message.error("Please enter question title");
      return;
    }

    if (!moduleSelected) {
      message.error("Please select a module");
      return;
    }

    if (!moduleSelected.id) {
      message.error("Something went wrong with the selected module");
      return;
    }

    const value: QuestionDto = {
      title: title,
      text: editorState,
      moduleId: moduleSelected.id,
    };

    if (createQuestion) createQuestion(value);
  };

  const handleEditorChange = (
    content: any,
    delta: any,
    source: any,
    editor: any
  ) => {
    setEditorState(content);
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
    <div className={styles.container}>
      {isShowProfileIcon && <ProfilePopup user={UserDetails} />}
      <p className={styles.headerText}>Create a new question</p>
      <div className={styles.titleCover}>
        <div className={styles.titleTextContainer}>
          <p>Title</p>
        </div>
        <div className={`${styles.titleContainer} bgcolor__light-theme`}>
          <input
            type="text"
            className={styles.titleInput}
            placeholder="Enter your title here"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
      </div>

      <div className={styles.bodyCover}>
        <div className={styles.bodyTextContainer}>
          <p>Body</p>
        </div>
        <div className={`${styles.bodyContainer} bgcolor__light-theme`}>
          <ReactQuill
            className={styles.bodyInput}
            theme="snow"
            value={editorState}
            modules={modules}
            onChange={handleEditorChange}
            formats={formats}
          />
        </div>
      </div>
      {/* <AttachmentAdder /> */}
      <div className={styles.courseSubmitBtnContainer}>
        <PostEntryPicker
          data={modulesList ?? []}
          onChange={setModuleSelected}
          placeholderText="Select module"
          selectedModule={moduleSelected}
        />
        <div className={styles.divider} />
        <PositiveButton onclick={handleSubmit} />
      </div>
      <div className={styles.topImageContainer}>
        <img src={educationMaterials.src} alt="education-materials" />
      </div>
      <div className={styles.bottomImageContainer}>
        <img src={students.src} alt="students" />
      </div>
    </div>
  );
};

export default PostContent;
