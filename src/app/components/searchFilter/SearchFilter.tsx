import React from 'react'
import styles from './searchFilter.module.css'
import dropDownArrow from '../../assets/dropDownArrow.png'

const SearchFilter = () => {
  return (
    <div className={`${styles.container} bgcolor__light-theme`}>
        <div className={styles.searchContainer}>
            <input type="text" placeholder="Courses" />
            <div className={styles.inputLine}/>
        </div>
        <div className={styles.imageContainer}>
            <img src={dropDownArrow.src} alt="drop-down-arrow" />
        </div>
    </div>
  )
}

export default SearchFilter