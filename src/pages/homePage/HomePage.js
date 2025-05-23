import React, { useState, useEffect } from 'react'
import styles from './HomePage.module.scss'

export default function HomePage() {
  const titles = ['Full Stack Developer', 'Frontend Developer', 'Backend Developer']
  const [index, setIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentTitle = titles[index]
    if (charIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + currentTitle[charIndex])
        setCharIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setIndex((index + 1) % titles.length)
        setDisplayText('')
        setCharIndex(0)
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [charIndex, index])

  return (
    <div className={styles.homePage}>
      <h1>Hello, I'm Bui Luu Kien Quoc</h1>
      <p>I'm a <span className={styles.displayText}>{displayText}<span className={styles.cursor}>|</span></span></p>
    </div>
  )
}
