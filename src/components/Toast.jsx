import React, { useState, useEffect } from "react";
import styles from "@styles/Toast.module.scss";

const Toast = ({ toastList, position, autoDelete, autoDeleteTime }) => {
  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);

  const deleteToast = (id) => {
    const listItemIndex = list.findIndex((e) => e.id === id);
    const toastListItem = toastList.findIndex((e) => e.id === id);
    list.splice(listItemIndex, 1);
    toastList.splice(toastListItem, 1);
    setList([...list]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && toastList.length && list.length) {
        deleteToast(toastList[0].id);
      }
    }, autoDeleteTime);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div
        className={`${styles.Toast__container} ${
          styles[position || "bottom-right"]
        }`}
      >
        {list.map((toast, i) => (
          <div
            key={i}
            className={`${styles.Toast__notification} ${styles.Toast__toast} ${
              styles[position || "bottom-right"]
            } `}
            style={{ backgroundColor: toast.backgroundColor }}
          >
            <button onClick={() => deleteToast(toast.id)}>X</button>
            <div className={styles.Toast__notification__image}>
              <img src={toast.icon} alt="" />
            </div>
            <div>
              <p className={styles.Toast__notification__title}>{toast.title}</p>
              <p className={styles.Toast__notification__message}>
                {toast.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Toast;
