import React from "react";
import styles from './NotFound.module.scss'

export const NotFound: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Not Found
      </h1>
      <p className={styles.description}>There is no such page in here mate.</p>
    </div>
  );
};
