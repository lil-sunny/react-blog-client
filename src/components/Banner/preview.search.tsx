import { Icon } from "@iconify/react";
import React from "react";
import styles from "@/styles/components/Banner/preview.search.module.css";

const PreviewSearch: React.FC = () => {
  return (
    <div className={styles["preview-search"]}>
      <div className={styles["search-wrapper"]}>
        <input className={styles.search} type="text" placeholder="Search" />
        <button className={styles["search-btn"]}>
          <Icon className={styles.icon} icon="material-symbols:search" />
        </button>
      </div>
      <div className={styles["resuts-wrapper"]}>
        <div className={styles["simple-articles-wrapper"]}>
          <div className={styles.item}>
            <div className={styles.title}>Test</div>
            <div className={styles.description}>Test descroption baby back</div>
            <div className={styles["author-block"]}>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {/* <img src="" alt="" /> */}
                </div>
                <div className={styles.name}>adminka</div>
              </div>
              <div className={styles.views}>
                <span className={styles["views-count"]}>11</span>
                <Icon className={styles.icon} icon="ic:baseline-remove-red-eye" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewSearch;