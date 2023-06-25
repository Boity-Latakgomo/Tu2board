import React from "react";
import styles from "./navBar.module.css";
import coveredLogo from "../../../app/assets/coveredLogo.png";
import magnifyingGlass from "../../../app/assets/magnifyingGlass.png";
import profilePicHolder from "../../../app/assets/profilePicHolder.png";
import Link from "next/link";

interface INavBarProps {
  showSearchBar?: boolean;
  value?: string;
  onValueChange?: (text: string) => void;
  showProfileIcon?: boolean;
  setShowProfileIcon?: (value: boolean) => void;
}

function NavBar({
  showSearchBar,
  value,
  onValueChange,
  showProfileIcon,
  setShowProfileIcon,
}: INavBarProps) {
  return (
    <div className={`${styles.container} bgcolor__light-theme card__shadow`}>
      <div className={styles.navContainer}>
        <Link href="/home" className={styles.logoContainer}>
          <img src={coveredLogo.src} alt="app" className={styles.logoImage}/>
        </Link>
        <Link href="/home" className={styles.homeNavText}><p>Home</p></Link>
        <Link href="/post"><p>Ask Question</p></Link>
        <Link href="/tutorials"><p>Tutorials</p></Link>
      </div>
      <>
        {showSearchBar && (
          <div className={styles.searchContainer}>
            <input
              type="text"
              value={value}
              onChange={(event) => {
                if (onValueChange) onValueChange(event.target.value);
              }}
            />
            <div className={styles.searchButton}>
              <img src={magnifyingGlass.src} alt="search" />
            </div>
          </div>
        )}
      </>
      <div
        className={styles.profilePicContainer}
        onClick={() => {
          if (setShowProfileIcon) setShowProfileIcon(!showProfileIcon);
        }}
      >
        <img src={profilePicHolder.src} alt="profile-pic-holder" />
      </div>
    </div>
  );
}

export default NavBar;
