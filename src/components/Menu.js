import React from "react";
import styles from "./Menu.module.css";
import menuImage from "../images/tablesetting1.jpg";

const Menu = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.heading}>O u r  &nbsp; M e n u</p>
          <p className={styles.question}>B r e a d  &nbsp; B a s k e t</p>
          <p className={styles.answer}>
            Assortment of fresh baked fruit breads and muffins 5.50
          </p>
          <p className={styles.question}>H o n e y  &nbsp;  A l m o n d  &nbsp; G r a n o l a  &nbsp; w i t h  &nbsp; F r u i t s</p>
          <p className={styles.answer}> 
            Natural cereal of honey toasted oats, raisins, almonds and dates
            7.00
          </p>
          <p className={styles.question}>B e l g i a n  &nbsp; W a f f l e</p>
          <p className={styles.answer}>
            Vanilla flavored batter with malted flour 7.50
          </p>
          <p className={styles.question}>S c r a m b l e d  &nbsp; e g g s</p>
          <p className={styles.answer}>
            Scrambled eggs, roasted red pepper and garlic, with green onions
            7.50
          </p>
          <p className={styles.question}>B l u e b e r r y  &nbsp; P a n c a k e s</p>
          <p className={styles.answer}> 
            With syrup, butter and lots of berries 8.50
          </p>
        </div>
        <div>
          <img src={menuImage}  className={styles.img}/>
        </div>
      
      </div>
    </div>
  );
};

export default Menu;
