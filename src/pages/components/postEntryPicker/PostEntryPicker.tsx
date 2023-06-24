import React, { useState } from "react";
import styles from "./postEntryPicker.module.css";
import dropDownArrow from "../../../app/assets/dropDownArrow.png";
import dash from "../../../app/assets/dash.png";
import { ModuleDto } from "../../../app/interfaces";

interface IPostEntryPickerProps {
  placeholderText?: string;
  selectedModule?: ModuleDto;
  data: ModuleDto[];
  onChange?: (value: ModuleDto) => void;
}

function PostEntryPicker({
  placeholderText,
  selectedModule,
  data,
  onChange,
}: IPostEntryPickerProps) {
  const [optionsOpen, setOptionsOpen] = useState(false);

  const handleTextClick = (module: ModuleDto) => {
    if (onChange) {
      onChange(module);
      setOptionsOpen(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.courseTextContainer}>
        <p>Course</p>
      </div>
      <div className={styles.pickerBody}>
        <div
          className={styles.entryContainer}
          onClick={() => setOptionsOpen(!optionsOpen)}
        >
          {selectedModule ? (
            <p className={styles.selectedText}>{selectedModule.name}</p>
          ) : (
            <p className={styles.placeholderText}>{placeholderText}</p>
          )}
          <div className={styles.imageContainer}>
            {optionsOpen ? (
              <img src={dash.src} alt="drop-down-arrow" />
            ) : (
              <img src={dropDownArrow.src} alt="drop-down-arrow" />
            )}
          </div>
        </div>
        {optionsOpen && (
          <div
            className={`${styles.optionsContainer} card__shadow bgcolor__light-theme`}
          >
            {data.map((module, index) => (
              <p onClick={() => handleTextClick(module)} key={index}>
                {module.name}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PostEntryPicker;
