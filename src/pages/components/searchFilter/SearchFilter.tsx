import React from "react";
import styles from "./searchFilter.module.css";
import dropDownArrow from "../../../app/assets/dropDownArrow.png";
import dash from "../../../app/assets/dash.png";
import { ModuleDto } from "../../../app/interfaces";

interface ISearchFilterProps {
  data: ModuleDto[];
  onTextSelected?: (module: ModuleDto) => void;
}

const SearchFilter = ({ data, onTextSelected }: ISearchFilterProps) => {
  const [optionsOpen, setOptionsOpen] = React.useState(false);

  const handleTextClick = (module: ModuleDto) => {
    if (onTextSelected) onTextSelected(module);
    setOptionsOpen(false);
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.subContainer} bgcolor__light-theme`}
        onClick={() => setOptionsOpen(!optionsOpen)}
      >
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Courses" readOnly />
          <div className={styles.inputLine} />
        </div>
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
  );
};

export default SearchFilter;
