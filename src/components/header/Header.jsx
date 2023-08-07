"use client";

import Link from "next/link";
import React from "react";
import styles from "./header.module.css";
import { useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Blogs",
    url: "/blogs",
  },
  {
    id: 4,
    title: "Profile",
    url: "/profile",
  },
];

const Header = () => {
  const openNav = (e) => {
    const burger = document.getElementById("burg");
    const linkList = document.getElementById("linked");
    burger.classList.toggle("burg");
    linkList.classList.toggle("linked");
  };

  const session = useSession();
  return (
    <div className={`${styles.header} container`}>
      <Link href="/">Loople</Link>
      <div className={styles.burger} id="burg" onClick={openNav}>
        <div className="b1"></div>
        <div className="b2"></div>
        <div className="b3"></div>
      </div>
      <div className={styles.linkList} id="linked">
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
