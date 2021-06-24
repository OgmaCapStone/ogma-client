import React from "react";
import styles from "@styles/selectOptions.module.scss";

export default function selectOptions({
  options,
  icon,
  background,
  className,
}) {
  return (
    <div className={`${className} ${styles.options__container}`}>
      {options.map((item, index) => (
        <label htmlFor={`option-${index}`} key={`option-${index}`}>
          <input
            className={styles.options__radio}
            type="radio"
            name="options"
            id={`option-${index}`}
            value=""
          />
          <div
            className={`${styles[`options__${background || "default"}`]} ${
              styles.options__card
            }`}
          >
            <div className={styles.options__info}>
              {icon}
              <p className={styles.options__label}>{item.label}</p>
              <p className={styles.options__subLabel}>{item.subLabel}</p>
              <p className={styles.options__text}>{item.text}</p>
            </div>
            {item.image && <img src={item.image} alt={`Option ${index}`} />}
          </div>
        </label>
      ))}
    </div>
  );
}
