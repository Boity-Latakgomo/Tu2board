import React from 'react'
import styles from './answerCard.module.css'
import thumbUp from '../../assets/thumbUp.png'
import thumbDown from '../../assets/thumbDown.png'

const demoText = "Starting with the left side of the equation x + 2, we can rewrite it as follows:\nx + 2 = 2 + x By applying the commutative property, we can switch the order of the operands: x + 2 = x + 2 As we can see, the left side of the equation is now equal to the right side of the equation, demonstrating that x + 2 = 2 + x holds true for any value of x. Therefore, the equation x + 2 = 2 + x is proven using the commutative property of addition."

const AnswerCard = () => {
    const svgCode = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path fill="#804e9f" d="M48.4,-60.7C56.4,-50.9,52.3,-29.7,44.3,-16.5C36.3,-3.3,24.4,2,18.9,10.4C13.4,18.8,14.4,30.5,6.9,44.1C-0.5,57.7,-16.4,73.2,-30.1,72.6C-43.8,72,-55.3,55.3,-65.1,37.8C-74.9,20.3,-83,2.1,-82,-16.4C-81,-34.9,-70.9,-53.6,-55.7,-62.1C-40.5,-70.6,-20.3,-68.7,0,-68.7C20.2,-68.6,40.4,-70.4,48.4,-60.7Z" transform="translate(100 100)" />
  </svg>`
  return (
    <div className={styles.container}>
        <div className={styles.rating}>
            <div className={styles.thumbIcon}>
                <img src={thumbUp.src} alt="thumb-up"/>
            </div>
            <p>3</p>
            <div className={styles.thumbIcon}>
                <img src={thumbDown.src} alt="thumb-Down"/>
            </div>
        </div>
        <div className={`${styles.subContainer} bgcolor__light-theme`}>
            <div className={styles.cornerBadge}>
                <svg 
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    dangerouslySetInnerHTML={{ __html: svgCode }}
                    />
                <p className={styles.bubbleText}>A</p>
            </div>
            <div className={styles.answerContainer}>
                <div className={styles.topContainer}>
                    <p>Boitumelo Latakgomo</p>
                    <p>Asked 1 year, 2 month ago</p>
                    <div className={styles.line}/>
                </div>
                <div className={styles.answerContent}>
                <p className={styles.title}>
                    The following solution works for me.
                </p>
                <div className={styles.answerSubContent}>
                    <p>{demoText}</p>
                    {/* Images here */}
                </div>
                <div className={styles.commentText}>
                    <p>Comments</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AnswerCard