import React from "react";
import styles from "@styles/ConfirmationModal.module.scss";

export default function ConfirmationModal({
  title,
  message,
  onAccept,
  onClose,
}) {
  return (
    <div className={styles.modal__background}>
      <div className={styles.modal__container}>
        <p className={styles.modal__title}>{title}</p>
        <p className={styles.modal__text}>{message}</p>
        <div className={styles.modal__buttons}>
          <button
            className={styles.modal__close}
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className={styles.modal__accept}
            type="button"
            onClick={onAccept}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
