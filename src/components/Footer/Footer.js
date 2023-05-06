import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Made with ❤️ by <a href="https://gurmeet-portfolio.web.app/" target="_blank"><span className={styles.footertext}>Gurmeet Singh</span></a></p>
    </footer>
  );
};

export default Footer;
