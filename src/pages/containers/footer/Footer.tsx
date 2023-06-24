import React from "react";
import styles from "./footer.module.css";
import coveredLogo from "../../../app/assets/coveredLogo.png";
import { twitter, youtube, facebook, instagram, linkedIn } from "./imports";

function Footer() {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.imageContainer}>
        <img src={coveredLogo.src} alt="app-icon" />
      </div>
      <div className={styles.contents}>
        <div className={styles.textSection}>
          <p>
            @2021 Engati. All rights reserved<span>Terms of Use</span>
            <span>Privacy Policy</span>
          </p>
        </div>
        <div className={styles.mediaSection}>
          <div>
            <img src={twitter.src} alt="Twitter" />
          </div>
          <div>
            <img src={youtube.src} alt="Youtube" />
          </div>
          <div>
            <img src={facebook.src} alt="Facebook" />
          </div>
          <div>
            <img src={instagram.src} alt="Instagram" />
          </div>
          <div>
            <img src={linkedIn.src} alt="linkedIn" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
