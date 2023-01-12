import React, { useState } from "react";
import styles from "../Header/Header.module.css";
import ResumeSvg from "../../assets/resume.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={styles.container}
        id="home"
        onMouseEnter={() => navigate("#home")}
      >
        <div className={styles.left}>
          <p className={styles.heading}>
            A <span>Resume</span> that stands out!
          </p>
          <p className={styles.heading}>
            Make your own resume. <span>It's free.</span>
          </p>
        </div>
        <div className={styles.right}>
          <img src={ResumeSvg} alt="Resume" />
        </div>
      </div>
      <div className={styles.headerWarn}>
        Your Resume data is saved in your Local Storage
        &nbsp;<a href="https://developer.chrome.com/docs/devtools/storage/localstorage/" target="_blank" className={styles.headerWarnKnow}>Know More</a>
      </div>
    </>
  );
};

export default Header;
