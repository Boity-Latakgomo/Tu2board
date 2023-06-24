import React from 'react'
import styles from './attachmentAdder.module.css'
import attachment from '../../../app/assets/attachment.png'
import cancel from '../../../app/assets/cancel.png';

const AttachmentAdder = () => {
  return (
    <div className={styles.container}>
      <div className={styles.attachmentCover}>
        <div className={styles.attachmentHeaderContainer}>
          <p>Attachments</p>
        </div>
        <div className={`${styles.attachmentContainer} bgcolor__light-theme`}>
          <div className={styles.attachmentTextContainer}>
            <div className={styles.attachmentItem}>
              <p>Picture 001.png</p>
              <img src={cancel.src} alt='cancel' className={styles.closeIcon} />
            </div>
            <div className={styles.attachmentItem}>
              <p>Picture 002.png</p>
              <img src={cancel.src} alt='cancel' className={styles.closeIcon} />
            </div>
            <div className={styles.attachmentItem}>
              <p>Picture 003.jpg</p>
              <img src={cancel.src} alt='cancel' className={styles.closeIcon} />
            </div>
            <div className={styles.attachmentItem}>
              <p>Picture 003.jpg</p>
              <img src={cancel.src} alt='cancel' className={styles.closeIcon} />
            </div>
            <div className={styles.attachmentItem}>
              <p>Picture 003.jpg</p>
              <img src={cancel.src} alt='cancel' className={styles.closeIcon} />
            </div>
            <div className={styles.attachmentItem}>
              <p>Picture 003.jpg</p>
              <img src={cancel.src} alt='cancel' className={styles.closeIcon} />
            </div>
            <div className={styles.attachmentItem}>
              <p>Picture 003.jpg</p>
              <img src={cancel.src} alt='cancel' className={styles.closeIcon} />
            </div>
            <div className={styles.attachmentItem}>
              <p>Picture 003.jpg</p>
              <img src={cancel.src} alt='cancel' className={styles.closeIcon} />
            </div>
          </div>
          <div className={styles.attachmentIconContainer}>
            <div>
              <img src={attachment.src} alt='attachment' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttachmentAdder