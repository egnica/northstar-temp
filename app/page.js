// app/page.js
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Just a visual indicator (not functional)
  const progress = 75;

  return (
    <main className={styles.shell}>
      {/* Top-right "HOME" (you can repoint this later) */}
      <div className={styles.topRight}>
        <Link href="/" className={styles.homeLink}>
          HOME
        </Link>
      </div>

      <section className={styles.card} aria-label="Under construction">
        <h1 className={styles.title}>Northstar Cleanouts</h1>
        <h2>Junk Removal</h2>
        {/* Logo placeholder (drop your logo into /public/logo.png) */}
        <div className={styles.logoWrap}>
          <Image
            src="/logo.png"
            alt="Northstar Cleanouts logo"
            width={140}
            height={140}
            className={styles.logo}
            priority
          />
        </div>

        <h1 className={styles.title}>
          UNDER
          <br />
          CONSTRUCTION
        </h1>

        <p className={styles.subtitle}>SITE NEARLY READY</p>

        <div className={styles.progressBlock}>
          <div
            className={styles.progressTrack}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className={styles.progressLabels}>
            <span>0%</span>
            <span>100%</span>
          </div>
        </div>
        <br />
        <h1>Junk Removal</h1>
        <h2>Need some help now?</h2>
        {/* Button (simple; you can later swap to a contact form) */}
        <a className={styles.button} href="mailto:info@northstarcleanouts.com">
          MESSAGE ME
        </a>

        {/* Footer note */}
        <p className={styles.footer}>
          © {new Date().getFullYear()} Northstar Cleanouts
        </p>
      </section>
    </main>
  );
}
