import React from "react";
import styles from "./Modal.module.scss";
import ButtonClose from "../ButtonClose/ButtonClose";

function Modal({ additionalData, onClickClose }) {
  const birthday = additionalData.birthday;
  const profileLink = additionalData.profileLink;

  return (
    <div className={styles.Modal}>
      <div className={styles.modalDialog}>
        <div className={styles.modalHeader}>
          Дополнительная информация
          <ButtonClose onClickClose={onClickClose} />
        </div>
        <div className={styles.modalBody}>
          <p>
            Дата рождения: {birthday}
            <br />
            Ссылка на профиль: <a href={profileLink}>{profileLink}</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
