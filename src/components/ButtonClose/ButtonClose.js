import React from 'react';
import styles from './ButtonClose.module.scss';

const ButtonClose = ({onClickClose}) => (
  <div className={styles.ButtonClose} onClick={onClickClose}>
    X
  </div>
);

export default ButtonClose;
