import React from 'react'
import "../../app/globals.css";
import styles from './welcome.module.css';
import textAppIcon from "../../app/assets/textAppIcon.png";
import { FallingLines } from 'react-loader-spinner'

const index = () => {

  setTimeout(() => {
    window.location.replace("/home");
  }, 4000);


  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
          <img src={textAppIcon.src} alt="text-app-icon" className='slide-in-bck-center'/>
          <FallingLines
            color="#ffffff"
            width="100"
            visible={true}
            ariaLabel='falling-lines-loading'
        />
      </div>
    </div>
  )
}

export default index