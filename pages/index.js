import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to Godson's Portfolio</h1>
          <p className={styles.description}>
            Explore my projects and learn more about my skills.
          </p>
        </main>
      </div>
      <Footer />
    </div>
  );
}
