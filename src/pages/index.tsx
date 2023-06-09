import Head from "next/head";
import HeaderComponent from "@/components/common/header.component";
import Banner from "@/components/Index/banner.component";
import OfferItem from "@/components/Blog/offer.item";
import FooterCoponent from "@/components/common/footer.component";
import styles from "@/styles/pages/Index.module.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MenuComponent from "@/components/common/menu.component";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const articles = [
    {
      title: "Article 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Griffin",
      views: 1212,
    },
    {
      title: "About India",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Amrit",
      views: 42,
    },
    {
      title: "6+ years experiance in BDSM",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Sexslave",
      views: 708,
    },
    {
      title: "Vue better than React.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Expert",
      views: 3000,
    },
  ];

  useEffect(() => {
    gsap.to(".trigger1", {
      y: "-50%",
      ease: "none",
      scrollTrigger: {
        trigger: ".trigger1",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeaderComponent />
        {menuIsOpen && <MenuComponent />}
        <div className={styles.app}>
          <div style={{ overflow: "hidden" }}>
            <Banner />
            <div className={[styles.container, "trigger1"].join(" ")}>
              {/* <idea-section /> */}
              <div className={styles["idea-section"]}>
                <h3 className={styles.title}>IDEA</h3>
                <div className={styles.description}>
                  An easy way to track, manage and share your time. The service
                  will provide you with free calendar functions, creation of
                  cases, the ability to keep your diary of problem solutions
                  and, if you wish, it can help others
                </div>
                <div className={styles["tabs-wrapper"]}>
                  <div className={styles["image-wrapper"]}>
                    <Image
                      src="/images/todo1.png"
                      alt="My Image"
                      className={styles.image}
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className={styles["text-wrapper"]}>
                    You can create new projects and groups of deals deals for
                    easy manage.
                  </div>
                </div>
              </div>
              <div className={styles["third-section"]}>
                <div className={styles["image-back"]}></div>
                <div className={styles.background}>
                  <div className={styles.phrase}>
                    don`t make life difficult for yourself
                  </div>
                  <button className={styles["main-btn"]}>Try it</button>
                </div>
              </div>
              <div className={styles["recomended-articles-section"]}>
                <h3 className={styles.title}>Popular articles</h3>
                <div className={styles["scroll-wrapper"]}>
                  {/* <offer-item /> */}
                  {articles.map((article, index) => (
                    <OfferItem
                      key={index}
                      title={article.title}
                      description={article.description}
                      author={article.author}
                      views={article.views}
                    />
                  ))}
                </div>
              </div>
              <FooterCoponent />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
