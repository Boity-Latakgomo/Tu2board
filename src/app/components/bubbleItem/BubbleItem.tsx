import React from 'react'
import styles from './bubbleItem.module.css'
import close from '../../assets/close.png'

const BubbleItem = () => {
  return (
    <div className={`${styles.container} ${styles.conditionContainer} bgcolor__light-theme`}>
        <p>SCOA021</p>
        <div>
          <img src={close.src} alt="close" />
        </div>
    </div>
  )
}

export default BubbleItem