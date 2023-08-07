import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  title: "Loople | About Us",
  description:
    "Loople is a website created specially for reading and writing blogs",
};

const About = () => {
  return (
    <div className={`${styles.aboutCont} container`}>
      <div className={styles.aboutImg}>
        <Image
          fill={true}
          src="https://source.unsplash.com/mk7D-4UCfmg"
          alt="about-image"
          placeholder="blur"
          blurDataURL="https://source.unsplash.com/mk7D-4UCfmg"
        />
      </div>
      <div className={styles.aboutSect}>
        <h2>About Us</h2>
        <p>
          Loople is a blog website, created for reading and writing various
          kinds of blogs. You can write your thoughts and share it online, where
          many people from all over the world can read the thing you created.
          So, if you are interested in writing and reading different ideas or
          topics, Loople is the best place to join.
        </p>
        <p>
          Loople Blogs is one of the few projects that I made. I am Prashant
          Shiwakoti, and I made this website using Next JS and Mongo DB. For
          more information about me, you can check out my website at{" "}
          <a
            href="https://prsn.lovestoblog.com"
            target="_blank"
            attribute
            style={{ color: "blue" }}
          >
            https://prsn.lovestoblog.com
          </a>
          .
        </p>
        <p>
          Thank you for checking out Loople Blogs. More features will be updated
          in the future. So, I hope you'll enjoy it.
        </p>
      </div>
    </div>
  );
};

export default About;
