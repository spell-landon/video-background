import React from 'react';
import styles from './Navigation.module.css';

function Navigation(props) {
  return (
    <div className={styles.navBar}>
      <a href='#' className={styles.link}>
        The Watson
      </a>
      <div className={styles.links}>
        <a href='#' className={styles.link}>
          About
        </a>
        <a href='#' className={styles.link}>
          Stories
        </a>
      </div>
    </div>
  );
}

export default Navigation;
