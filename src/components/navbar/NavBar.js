import React, { useState } from 'react'
import avatar from '../../assets/images/avatar.jpg'
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { HiHome, HiUser, HiOutlineCode, HiOutlineMail, HiMenu, HiX } from 'react-icons/hi'
import styles from './NavBar.module.scss'

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>
      <div className={`${styles.navbar} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
        <img src={avatar} alt="logo" className={styles.avatar}/>
        <h2>Bui Luu Kien Quoc</h2>
        <div className={styles.navbarSocial}>
            <button className={styles.navbarSocialButton}><FaFacebook size={20} color='#fff'/></button>
            <button className={styles.navbarSocialButton}><FaGithub size={20} color='#fff'/></button>
            <button className={styles.navbarSocialButton}><MdMail size={20} color='#fff'/></button>
            <button className={styles.navbarSocialButton}><FaTwitter size={20} color='#fff'/></button>
        </div>
        <div className={styles.navbarLinks}>
            <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setIsMobileMenuOpen(false)}>
                <HiHome size={20} color='#fff' />Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setIsMobileMenuOpen(false)}>
                <HiUser size={20} color='#fff' />About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setIsMobileMenuOpen(false)}>
                <HiOutlineCode size={20} color='#fff' />Projects
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setIsMobileMenuOpen(false)}>
                <HiOutlineMail size={20} color='#fff' />Contact
            </NavLink>
        </div>
      </div>
    </>
  )
}
