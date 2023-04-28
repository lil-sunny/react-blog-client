import React, { useState } from "react";
import Link from "next/link";
import styles from "@/styles/components/common/menu.component.module.css";

const MenuComponent: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className={styles["menu-wrapper"]}>
      <div className="menu">
        <ul className={styles["menu-list"]}>
          <li className={styles.item}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuComponent;
