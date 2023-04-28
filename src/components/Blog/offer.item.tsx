import React from "react";
import Image from "next/image";
import styles from "@/styles/components/Blog/offer.item.module.css";
import { Icon } from "@iconify/react";

interface OfferItemInterface {
  title: string;
  description: string;
  author: string;
  views: number;
}

const OfferItem: React.FC<OfferItemInterface> = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.preview}>
        <Image
          src={"/images/article.jpg"}
          width={500}
          height={500}
          alt={"article"}
        />
      </div>
      <div className={styles["text-info"]}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.description}>{props.description}</div>
        <div className={styles["important-info"]}></div>
        <div className={styles["author-block"]}>
          <div className={styles.author}>
            <div className={styles.avatar}></div>
            <div className={styles.name}>{props.author}</div>
          </div>
          <div className={styles.views}>
            <span className={styles["views-count"]}>{props.views}</span>
            <Icon icon="ic:round-remove-red-eye" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferItem;
