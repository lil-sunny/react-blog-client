import React from "react";
import { Icon } from "@iconify/react";
import PreviewSearch from "../Banner/preview.search";
import styles from "@/styles/components/Index/banner.module.css";

const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <div className={styles["left-side"]}>
          <div className={styles["main-text"]}>
            {/* <Icon className="icon" icon="material-symbols:search" /> */}
            <span className={styles.text}>SEARCH</span>
          </div>
          <div className={styles["short-description"]}>Have a problem? Find a solving</div>
          <button className={styles["main-btn"]}>Try it</button>
        </div>
        <div className={styles["right-side"]}>
          {/* search */}
          <div className={styles.text}>
            Try to find the problem which you want to solwing
          </div>
          <PreviewSearch />
        </div>
      </div>
      <div className={styles["pagination-wrapper"]}>
        <button className={styles["slider-btn"]}>
          <Icon icon="material-symbols:chevron-left" />
        </button>
        <div className={styles["slider-pages"]}>
        <button className={[styles["page-btn"], styles.active].join(" ")}></button>
        <button className={styles["page-btn"]}></button>
        <button className={styles["page-btn"]}></button>
        </div>
        <button className={styles["slider-btn"]}>
          <Icon icon="material-symbols:navigate-next" />
        </button>
      </div>
    </div>
  );
};

export default Banner;