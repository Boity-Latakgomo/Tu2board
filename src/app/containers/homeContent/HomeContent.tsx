import React from 'react'
import styles from './homeContent.module.css'
import { SearchFilter, ProfilePopup, BubbleItem, QACard } from "../../components";

const HomeContent = () => {
  return (
    <div className={styles.container}>
      <SearchFilter />
      <ProfilePopup />
      <div className={styles.coursesContainer}>
        <BubbleItem showClose text='SCOA021'/>
        <div className={styles.bubbleItemSpacer}/>
        <BubbleItem showClose text='SCOB021'/>
        <div className={styles.bubbleItemSpacer}/>
        <BubbleItem showClose text='SCSC022'/>
        <div className={styles.bubbleItemSpacer}/>
        <BubbleItem showClose text='SMTH021'/>
        <div className={styles.bubbleItemSpacer}/>
        <BubbleItem showClose text='SMTB021'/>
        <div className={styles.bubbleItemSpacer}/>
        <BubbleItem showClose text='SSTS021'/>
        <div className={styles.bubbleItemSpacer}/>
        <BubbleItem showClose text='SSTB021'/>
        <div className={styles.bubbleItemSpacer}/>
        <BubbleItem showClose text='SPHB021'/>
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