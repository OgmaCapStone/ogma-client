import React from "react";
import styles from "@styles/SkillCard.module.scss";
import ProgressBar from "@components/ProgressCircleBar";
import { ChevronRightIcon } from "@icons";

const SkillCard = ({ progress, image, techName }) => (
  <div className={styles.SkillCard}>
    <ProgressBar
      className={styles.SkillCard__Progress}
      progress={progress}
      image={image}
      techName={techName}
    />
    <p className={styles.SkillCard__Text}>{techName}</p>
    <ChevronRightIcon size={20} className={styles.SkillCard__Icon} />
  </div>
);

export default SkillCard;
