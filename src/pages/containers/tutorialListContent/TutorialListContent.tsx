import React from 'react'
import styles from './tutorialListContent.module.css'
import { TutorialItem } from '../../containers'

function TutorialListContent() {
  return (
    <div className={styles.container}>
        <TutorialItem/>
        <TutorialItem/>
        <TutorialItem/>
        <TutorialItem/>
    </div>
  )
}

export default TutorialListContent