import React from 'react'
import styles from './questionCard.module.css'

const AnswerCard = () => {
    const svgCode = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path fill="#ffa500" d="M48.4,-60.7C56.4,-50.9,52.3,-29.7,44.3,-16.5C36.3,-3.3,24.4,2,18.9,10.4C13.4,18.8,14.4,30.5,6.9,44.1C-0.5,57.7,-16.4,73.2,-30.1,72.6C-43.8,72,-55.3,55.3,-65.1,37.8C-74.9,20.3,-83,2.1,-82,-16.4C-81,-34.9,-70.9,-53.6,-55.7,-62.1C-40.5,-70.6,-20.3,-68.7,0,-68.7C20.2,-68.6,40.4,-70.4,48.4,-60.7Z" transform="translate(100 100)" />
  </svg>`
  return (
    <div className={styles.container}>
        <div className={styles.emptySpacer}/>
        <div className={styles.columnContainer}>
        <div className={`${styles.subContainer} bgcolor__light-theme`}>
            <div className={styles.cornerBadge}>
                <svg 
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    dangerouslySetInnerHTML={{ __html: svgCode }}
                    />
                <p className={styles.bubbleText}>Q</p>
            </div>
            <div className={styles.questionContainer}>
                <div className={styles.topContainer}>
                    <p>Boitumelo Latakgomo</p>
                    <p>Asked 1 year, 2 month ago</p>
                    <div className={styles.line}/>
                </div>
                <div className={styles.questionContent}>
                <p className={styles.title}>
                    How can I solve the question. Prove that x + 2 = 2 + x using communicate property of addition
                </p>
                </div>
            </div>
        </div>
        <div className={styles.answerButton}>
            <p>Answer</p>
        </div>
        </div>
    </div>
  )
}

export default AnswerCard