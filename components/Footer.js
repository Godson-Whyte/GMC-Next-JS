import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Son Of God. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
