import React from "react"

import styles from "../styles/components/hero.module.scss"
import HeroImage from "../images/hero.png"

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <img className={styles.headshot} width="300px" src={HeroImage} />
          <h1>Hi, I'm Brandon!</h1>
          <p>
            I am studying Computer Science at Cornell University. I am the Sales
            Manager of the Cornell University Glee Club and the Treasurer of the
            Beta Omicron Chapter of Delta Tau Delta.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
