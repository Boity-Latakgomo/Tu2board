import React from "react";
import styles from "./navBar.module.css";
import coveredLogo from "../../assets/coveredLogo.png";
import magnifyingGlass from "../../assets/magnifyingGlass.png";
import profilePicHolder from "../../assets/profilePicHolder.png";

function NavBar() {
  return (
    <div className={`${styles.container} bgcolor__light-theme card__shadow`}>
      <div className={styles.logoContainer}>
        <img src={coveredLogo.src} alt="app-icon" />
      </div>
      <div className={styles.searchContainer}>
        <input type="text" />
        <div className={styles.searchButton}>
          <img src={magnifyingGlass.src} alt="search" />
        </div>
      </div>
      <div className={styles.profilePicContainer}>
        <img src={profilePicHolder.src} alt="profile-pic-holder" />
      </div>
    </div>
  );
}

export default NavBar;
