import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Made with ❤️ by <span className={styles.footertext}>Gurmeet Singh</span></p>
    </footer>
  );
};

export default Footer;
