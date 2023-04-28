import styles from "@/styles/components/common/action.btn.module.css";
import { Icon } from "@iconify/react";

type Props = {
  color?: "blue" | "green" | "white" | "black";
  title: string;
  icon: string | null;
};

const ActionBtn = ({ color, title, icon }: Props) => {
  const buttonClassName = color ? `${styles["action-btn"]} ${styles[color]}` : styles["action-button"] 
  return (
    // <button className={[styles["action-btn"]].join(" ")}>
    <button className={buttonClassName}>
      <span className={styles.value}>{title}</span>
      {icon && <Icon icon={icon} className={styles["icon"]}></Icon>}
    </button>
  );
};

export default ActionBtn;
