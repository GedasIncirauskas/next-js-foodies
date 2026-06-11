import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}></div>
        <div>
          <div className={styles.hero}>
            <h1>Welcome to Next.js Foodies</h1>
            <p>Discover and share delicious meals with our community!</p>
          </div>
          <div className={styles.cta}>
            <Link href="/community" className={styles.ctaButton}>
              Join the Community
            </Link>
            <Link href="/meals" className={styles.ctaButton}>
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
