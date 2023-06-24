import React from 'react'
import styles from './tutorialItem.module.css'

function TutorialItem() {
  return (
    <div className={`${styles.container} bgcolor__light-theme`}>
        <div className={styles.content}>
            <p className={styles.date}>Posted 5 days ago</p>
            <p className={styles.title}>Work on the following tutorial questions and make sure you finish them all by end of this week. hhgrhfhjf fhjfhghg gjgjgkjg gijgjgkjg gjg ug gbjv uv vug fjg njgbjmnb  ngfn  j jfb  m fnjjgjgjg jgnjgunjgfnjgfbi jnbjfnbifnbigfnjkesglbj jkernvkjg jkrn b kjr t jrt nrkjrthburegh bk rbnurtbiu </p>
        </div>
        <div className={styles.box}/>
    </div>
  )
}

export default TutorialItem