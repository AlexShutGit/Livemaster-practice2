import React from "react";
import styles from "./Td.module.scss";
import Button from "../Button/Button";

const Td = ({ data, isImage = false, onClickAdditionalData }) => (
  <div className={styles.Td}>
    {!isImage ? (
      <p> {data} </p>
    ) : (
      <Button id={data} onClickAdditionalData={onClickAdditionalData}/>
      // <img
      //   id={data}
      //   className="open-button"
      //   src="img/menu.png"
      //   width="40"
      //   height="40"
      // />
    )}
  </div>
);

export default Td;
