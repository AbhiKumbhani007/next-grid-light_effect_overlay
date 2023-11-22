import React from 'react';
import styles from '../styles/ring.module.css';

const Ring = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.center}>
        {[0, 1].map((i) => (
          <div
            key={i}
            className={`${styles.ring} ${styles['ring-' + (i + 1)]}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Ring;
