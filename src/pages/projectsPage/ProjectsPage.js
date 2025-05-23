import React from 'react'
import styles from './ProjectsPage.module.scss'
import { HiLink } from 'react-icons/hi'

// Danh sách các project
const projects = [
  {
    name: "Quick Meeting",
    link: "https://quickmeeting.vercel.app/",
    image: require("../../assets/images/projects/quicmeeting.png")
  },
  {
    name: "Book Rental",
    link: "https://example.com/",
    image: require("../../assets/images/projects/bookrental.png")
  },
  {
    name: "Smart Parking System",
    link: "https://example.com/",
    image: require("../../assets/images/projects/smartparking.png")
  }
]

export default function ProjectsPage() {
  return (
    <div className={styles.projectsPage}>
      <div className={styles.projectsPageContainer}>
        <div className={styles.projectsPageHeader}>
          <div className={styles.title}>Projects</div>
          <div className={styles.description}>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
          </div>
        </div>
        <div className={styles.projectsPageContent}>
          <div className={styles.contentRow}>
            {projects.map((project, index) => (
              <div
                key={index}
                className={styles.contentItem}
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <p className={styles.projectName}>{project.name}</p>
                <div className={styles.projectLink}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <HiLink size={40} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
