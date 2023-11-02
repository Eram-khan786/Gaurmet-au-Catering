import React from 'react'
import styles from './About.module.css'
import tablesetting2 from '../images/tablesetting2.jpg'

const About = () => {
  return (
    <>
      <div className={styles.main}>
        <div>
            <img src={tablesetting2} className={styles.table}/>
        </div>
        <div className={styles.para}>
           <p className={styles.heading}>A b o u t &nbsp;  C a t e r i n g</p>
           <p className={styles.tradition}>T r a d i t i o n  &nbsp; s i n c e &nbsp;  1 8 8 9</p>
           <p>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.</p>
           <br></br>
           <p className={styles.excepture}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </>
  )
}

export default About