import React from "react";
import styles from "./bubbleItem.module.css";
import close from "../../../app/assets/close.png";
import { ModuleDto } from "../../../app/interfaces";

interface IBubbleItemProps {
  showClose?: boolean;
  module?: ModuleDto;
  onRemoveItem?: (item: any) => void;
  text?: string;
}

const BubbleItem = ({
  showClose,
  module,
  onRemoveItem,
  text,
}: IBubbleItemProps) => {
  return (
    <div className={`${styles.container} bgcolor__light-theme`}>
      <p>{text ? text : module?.name}</p>
      {showClose && (
        <div
          onClick={() => {
            if (onRemoveItem) onRemoveItem(module);
          }}
        >
          <img src={close.src} alt="close" />
        </div>
      )}
    </div>
  );
};

export default BubbleItem;
