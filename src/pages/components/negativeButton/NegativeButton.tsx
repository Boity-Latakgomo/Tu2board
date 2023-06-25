import React from "react";
import styles from "./negativeButton.module.css";

interface INegativeButtonProps {
  onclick?: () => void;
  text?: string;
}

const NegativeButton = ({ onclick, text }: INegativeButtonProps) => {
  return (
    <div className={styles.container} onClick={onclick}>
      {text ? <p>{text}</p> : <p>Submit</p>}
    </div>
  );
};

export default NegativeButton;
