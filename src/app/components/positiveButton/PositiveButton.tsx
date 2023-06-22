import React from "react";
import styles from "./positiveButton.module.css";

interface IPositiveButtonProps {
  onclick?: () => void;
}

const PositiveButton = ({onclick} : IPositiveButtonProps) => {
  return (
    <div className={styles.container} onClick={onclick}>
      <p>Sign In</p>
    </div>
  );
};

export default PositiveButton;
