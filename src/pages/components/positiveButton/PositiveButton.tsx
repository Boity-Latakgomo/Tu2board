import React from "react";
import styles from "./positiveButton.module.css";

interface IPositiveButtonProps {
  onclick?: () => void;
  text?: string;
}

const PositiveButton = ({ onclick, text }: IPositiveButtonProps) => {
  return (
    <div className={styles.container} onClick={onclick}>
      {text ? <p>{text}</p> : <p>Submit</p>}
    </div>
  );
};

export default PositiveButton;
