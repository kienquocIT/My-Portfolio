import React from 'react'
import styles from './ContactPage.module.scss'
import GroupInfo from '../../components/groupInfo/GroupInfo'
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi'
import Map from '../../components/map/Map'
import Form from '../../components/form/Form'
export default function ContactPage() {
  return (
  <div className={styles.contactPage}>
    <div className={styles.contactPageContainer}>
      <div className={styles.contactPageHeader}>
        <div className={styles.title}>Contact</div>
        <div className={styles.description}>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </div>
      </div>
      <div className={styles.contactPageContent}>
        <div className={styles.contentRow}>
          <div className={styles.contentColumn3}>
            <GroupInfo icon={<HiLocationMarker size={40}/>} title="Address" text="Thu Duc, HCM City, Vietnam" />
            <GroupInfo icon={<HiPhone size={40}/>} title="Phone" text="+84 983573747" />
            <GroupInfo icon={<HiMail size={40}/>} title="Email" text="kienquoc2102it@gmail.com" />
            <Map />
          </div>
          <div className={styles.contentColumn7}>
            <Form /> 
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
