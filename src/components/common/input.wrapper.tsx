import styles from "@/styles/components/common/input.wrapper.module.css";

const InputWrapper = ({ ...props }) => {
  return (
    <div className={styles["input-wrapper"]}>
      <div className={styles["title"]}>{props.title}</div>
      <input className={styles["input"]} type="text" />
    </div>
  );
};

export default InputWrapper;
