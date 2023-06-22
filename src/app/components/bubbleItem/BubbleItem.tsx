import React from 'react'
import styles from './bubbleItem.module.css'
import close from '../../assets/close.png'

interface IBubbleItemProps {
  showClose?: boolean,
  text: string;
}

const BubbleItem = ({showClose, text}: IBubbleItemProps) => {
  return (
    <div className={`${styles.container} bgcolor__light-theme`}>
        <p>{text}</p>
        {showClose && <div>
          <img src={close.src} alt="close" />
        </div>}
    </div>
  )
}

export default BubbleItem;