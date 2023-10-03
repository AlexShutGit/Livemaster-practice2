import React from "react";
import styles from "./Button.module.scss";

function Button({ id, onClickAdditionalData }) {
  const onClick = () => {
    onClickAdditionalData(id);
  };

  return (
    <div className={styles.Button} onClick={onClick}>
      <img id={id} src="img/menu.png" width="40" height="40" />
    </div>
  );
}
export default Button;
