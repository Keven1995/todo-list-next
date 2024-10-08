import React from "react";
import Image from "next/image";
import logo from "../images/logo.png";
import styles from "../styles/styles.module.scss";

interface HeaderProps {
  userName?: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <div className={styles.headerContainer}>
      <Image src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.date}>Segunda, 01 de dezembro de 2025</div>
      <div className={styles.welcomeMessage}>Seja bem-vindo, {userName}</div>
    </div>
  );
};

export default Header;
