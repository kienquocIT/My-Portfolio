import React from 'react'
import styles from './GroupInfo.module.scss'

export default function GroupInfo({icon, title, text}) {
  return (
    <div className={styles.groupInfo}>
        {icon}
        <div className={styles.groupInfoTitle}>
            <div className={styles.groupInfoTitleLabel}>{title}:</div>
            <div className={styles.groupInfoTitleText}>{text}</div>
        </div>
    </div>
  )
}
