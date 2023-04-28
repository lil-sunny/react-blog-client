import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import styles from "@/styles/components/Blog/simple.offer.item.module.css";

interface SimpleOfferItemInterface {
  title: string;
}

const SimpleOfferItem: React.FC<SimpleOfferItemInterface> = ({ title }: SimpleOfferItemInterface) => {
  return (
    <div className={styles.item}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>Test descroption baby back</div>
      <div className={styles["author-block"]}>
        <div className={styles.author}>
          <div className={styles.avatar}>
            <Image
              src="/public/images/article.jpg"
              alt="My Image"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.name}>adminka</div>
        </div>
        <div className={styles.views}>
          <span className={styles["views-count"]}>11</span>
          <Icon className={styles.icon} icon="ic:baseline-remove-red-eye" />
        </div>
      </div>
    </div>
  );
};

export default SimpleOfferItem;
