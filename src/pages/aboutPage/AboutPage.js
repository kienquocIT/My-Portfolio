import React from 'react'
import styles from './AboutPage.module.scss'
import avatar from '../../assets/images/avatar.jpg'
import gpa from '../../assets/images/advertisement/gpa.png'
export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.aboutPageTitle}>ABOUT</div>
      <div className={styles.aboutPageContent}>
        <div className={styles.description}>
          An information technology student currently majoring in Computer Networks and Data Communication at the University of Information Technology, Vietnam National University, Ho Chi Minh City. During my studies, I participated in a few course-scale projects. With the knowledge I have accumulated, I hope to further develop in a corporate environment as a Back-End Developer intern. 
        </div>
        <div className={styles.information}>
          <img src={avatar} alt="avatar"></img>
          <div className={styles.detail}>
            <div className={styles.title}>Fullstack Developer</div>
            <p className={styles.address}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className={styles.contact}>
              <div className={styles.contactItem}>
                <p><span>Phone:</span> +84 983573747</p>
                <p><span>Email:</span> kienquocit2102@gmail.com</p>
                <p><span>Address:</span> Thu Duc, Ho Chi Minh City</p>
              </div>
              <div className={styles.contactItem}>
                <p><span>Age:</span> 21</p>
                <p><span>Education:</span> University of Information Technology, Vietnam National University, Ho Chi Minh City</p>
                <p><span>Experience:</span> 3 years</p>
              </div>
            </div>
            <p className={styles.description}>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.</p>
          </div>
        </div>
        <div className={styles.advertisement}>
          <div className={styles.advertisementItem}>
            <img src={gpa} alt="gpa"></img>
            <div className={styles.advertisementItemContent}>
              <h2>GPA: 7.49</h2>
              <p>2021 - 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
