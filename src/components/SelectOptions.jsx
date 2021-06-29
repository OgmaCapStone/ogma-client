import React from "react";
import styles from "@styles/SelectOptions.module.scss";

export default function selectOptions({
  onChange,
  options,
  icon,
  background,
  className,
  cardStyles,
}) {
  return (
    <div
      onChange={onChange}
      className={`${className || ""} ${styles.options__container}`}
    >
      {options.map((item, index) => (
        <label htmlFor={`option-${index}`} key={`option-${index}`}>
          <input
            className={styles.options__radio}
            type="radio"
            name="options"
            id={`option-${index}`}
            value={item.value}
            required
          />
          <div
            className={`${styles[`options__${background || "default"}`]} ${
              styles.options__card
            } ${styles[`options__${cardStyles}`]}`}
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
