import React, {useState} from "react";
import styles from "./authEntryPicker.module.css";
import dropDownArrow from '../../../app/assets/dropDownArrow.png'
import dash from '../../../app/assets/dash.png'

interface IAuthEntryPickerProps {
  placeholderText?: string;
  selectedText?: string;
  data: string[];
  onChange?: (value: string) => void;
}

function AuthEntryPicker({placeholderText, selectedText, data, onChange}: IAuthEntryPickerProps) {

  const [optionsOpen, setOptionsOpen] = useState(false);

  const handleTextClick = (text: string) => {
    if(onChange){
      onChange(text)
      setOptionsOpen(false)
    }
  }

  return (
    <div className={styles.container}>
        <div className={styles.entryContainer} onClick={() => setOptionsOpen(!optionsOpen)}>
            { selectedText? 
            <p className={styles.selectedText}>{selectedText}</p>:
            <p className={styles.placeholderText}>{placeholderText}</p>}
            <div className={styles.imageContainer}>
              {optionsOpen?
                <img src={dash.src} alt="drop-down-arrow" />
                :
                <img src={dropDownArrow.src} alt="drop-down-arrow" />
                }
            </div>
        </div>
        {optionsOpen && <div className={`${styles.optionsContainer} card__shadow bgcolor__light-theme`}>
            {data.map((text, index) => (
              <p onClick={() => handleTextClick(text)} key={index}>{text}</p>
            ))}
        </div>}
    </div>
  )
}

export default AuthEntryPicker