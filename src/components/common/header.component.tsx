import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import styles from "@/styles/components/common/header.component.module.css";

const HeaderComponent: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles["left-side"]}>
        <div className={styles.logo}>
          <Image
            src="/images/logo.png"
            className={styles["logo-img"]}
            alt="My Image"
            width={320}
            height={175}
          />
        </div>
      </div>
      <div className={styles["right-side"]}>
        <button className={styles["menu-btn"]}>
          <Icon className={styles.icon} icon="material-symbols:menu" />
        </button>
      </div>
    </header>
  );
};

export default HeaderComponent;
