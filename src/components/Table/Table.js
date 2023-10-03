import React from "react";
import styles from "./Table.module.scss";
import Tr from "../Tr/Tr";

const Table = ({ records, onClickAdditionalData }) => {
  return (
    <div className={styles.Table}>
      <Tr student={{
        1:'№',
        2:'Имя Фамилия',
        3:'Позиция',
        4:''
      }} isHeaders={false}/>
      {records.map((student) => 
        <Tr student={student} key={student.id} onClickAdditionalData={onClickAdditionalData} />
      )}
    </div>
  );
};

export default Table;
