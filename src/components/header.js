import React, { useState } from "react"

import classnames from "classnames"
import { Link } from "gatsby"
import styles from "../styles/components/header.module.scss"

const cx = classnames.bind(styles)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  function toggleIsOpen() {
    setIsOpen(value => !value)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navbarHeader}>
          <Link className={styles.title} to="/">
            Brandon Stein
          </Link>
          <button className={styles.toggle} onClick={toggleIsOpen}>
            <span className={styles.iconBar}></span>
            <span className={styles.iconBar}></span>
            <span className={styles.iconBar}></span>
          </button>
        </div>
        <div className={cx(styles.navbarContent, { [styles.open]: isOpen })}>
          <ul className={styles.nav}>
            <li>
              <Link to="/projects/voltorbflip">Voltorb Flip</Link>
            </li>
            <li>
              <a href="https://github.com/steiner26">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/bstein26/">LinkedIn</a>
            </li>
            <li>
              <a href="/assets/resume.pdf">Resume</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
