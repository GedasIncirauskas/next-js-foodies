import Link from "next/link";
import MealsGrid from "../components/meals/meals-grid";
import styles from "./page.module.css";

export default function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Meals Page for <span className={styles.highlight}>you</span>
        </h1>
        <p>Discover and share your favorite meals with our community!</p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your meal</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
