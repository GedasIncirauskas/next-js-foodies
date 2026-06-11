import Link from "next/link";
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
              <Link href="/meals">Meals</Link>
            </li>
            <li>
              <Link href="/community">Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
