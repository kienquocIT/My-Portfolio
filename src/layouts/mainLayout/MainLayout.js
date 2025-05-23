import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.scss'
import NavBar from '../../components/navbar/NavBar'
export default function MainLayout() {
  return (
    <div className={styles.mainLayout}>
        <NavBar />
        <div className={styles.content}>
            <Outlet />
        </div>
    </div>
  )
}
