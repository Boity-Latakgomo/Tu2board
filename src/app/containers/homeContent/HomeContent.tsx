import React from 'react'
import styles from './homeContent.module.css'
import { SearchFilter, ProfilePopup, BubbleItem, QACard } from "../../components";

const HomeContent = () => {
  return (
    <div className={styles.container}>
      <SearchFilter />
      <ProfilePopup />
      <div className={styles.coursesContainer}>
      <BubbleItem />
      <div className={styles.bubbleItemSpacer}/>
      <BubbleItem />
      <div className={styles.bubbleItemSpacer}/>
      <BubbleItem />
      <div className={styles.bubbleItemSpacer}/>
      <BubbleItem />
      <div className={styles.bubbleItemSpacer}/>
      <BubbleItem />
      <div className={styles.bubbleItemSpacer}/>
      <BubbleItem />
      <div className={styles.bubbleItemSpacer}/>
      <BubbleItem />
      <div className={styles.bubbleItemSpacer}/>
      <BubbleItem />
      <div className={styles.bubbleItemSpacer}/>
      <BubbleItem />
      </div>
      <div className={styles.qaContainer}>
        <QACard />
        <div className={styles.qaCardSpacer}/>
        <QACard />
        <div className={styles.qaCardSpacer}/>
        <QACard />
        <div className={styles.qaCardSpacer}/>
        <QACard />
        <div className={styles.qaCardSpacer}/>
        <QACard />
        <div className={styles.qaCardSpacer}/>
        <QACard />
        <div className={styles.qaCardSpacer}/>
        <QACard />
        <div className={styles.qaCardSpacer}/>
        <QACard />
        <div className={styles.qaCardSpacer}/>
        <QACard />
        <div className={styles.qaCardSpacer}/>
        <QACard />
        <div className={styles.qaCardSpacer}/>
        <QACard />
      </div>
    </div>
  )
}

export default HomeContent