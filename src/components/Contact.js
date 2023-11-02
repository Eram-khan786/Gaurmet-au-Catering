import React from 'react'
import styles from './Contact.module.css'
const Contact = () => {
  return (
    <div className={styles.main}>
      <div className={styles.marginBox}>
         <p className={styles.Contact}>Contact</p>
         <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
         <h3>Catering Service, 42nd Living St, 43043 New York, NY</h3>
         <p className={styles.para}>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
         <input type='text' placeholder='Name' className={styles.input}/>
         <br></br>
         <input type='text' placeholder='How Many People' className={styles.input}/>
         <br></br>
         <input type='date' placeholder='dd-mm-yy--:--' className={styles.input}/>
         <br></br>
         <input type='text' placeholder='Message/Special requirements' className={styles.input}/>
         <br></br>
         <input type='email' placeholder='Enter your Email' className={styles.input}/>
         <br></br>
         <button className={styles.btn}>S E N D  &nbsp;  M E S S A G E</button>
      </div>
    

    </div>
  )
}

export default Contact