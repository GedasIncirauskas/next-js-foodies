import Link from "next/link";
import NavLink from "./nav-link";
import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./main-header-background";

import styles from "./main-header.module.css";
import Image from "next/image";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImg} alt="Foodies Logo" priority />
          Next.js Foodies
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
