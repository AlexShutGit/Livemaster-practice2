import React from "react";
import styles from "./Tr.module.scss";
import Td from "../Td/Td";

const Tr = ({ student, isHeaders = true, onClickAdditionalData}) => (
  <>
  {!isHeaders ? <div className={styles.TrHeaders}>
    {Object.values(student).map((value) => (
      <Td data={value} key={Math.random(100)} />
    ))}
    {isHeaders && <Td data={student.id} isImage={true} />}
  </div>
  :
  <div className={styles.Tr}>
    {Object.values(student).map((value) => (
      <Td data={value} key={Math.random(100)} />
    ))}
    {isHeaders && <Td data={student.id} isImage={true} onClickAdditionalData={onClickAdditionalData} />}
  </div>}
  </>
);

export default Tr;
