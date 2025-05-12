import styles from '../styles/Home.module.css';

export default function Custom404() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.description}>
        Oops! The page you're looking for doesn’t exist.
      </p>
      <a href="/" className={styles.button}>Back to Home</a>
    </div>
  );
}
