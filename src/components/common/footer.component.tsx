import React from "react";
import styles from "@/styles/components/common/footer.component.module.css";

const FooterComponent: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles["created-by"]}>created by lil sunny 2023.</div>
      </div>
    </footer>
  );
};

export default FooterComponent;
