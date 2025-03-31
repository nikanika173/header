import React, { useState } from "react";
import styles from "../modules/Header.module.scss";
import logo from "../assets/cyber-logo.svg";
import searchIcon from "../assets/search-icon.svg";
import cartIcon from "../assets/cart-icon.svg";
import profileIcon from "../assets/profile-icon.svg";
import favoritesIcon from "../assets/favorites-icon.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Cyber Logo" />
      </div>

      <div className={styles.searchBar}>
        <img src={searchIcon} alt="Search" />
        <input type="text" placeholder="Search" />
      </div>

      <nav className={styles.nav}>
        <a href="/" className={styles.active}>Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact Us</a>
        <a href="/blog">Blog</a>
      </nav>

      <div className={styles.icons}>
        <img src={favoritesIcon} alt="Favorites" />
        <img src={cartIcon} alt="Cart" />
        <img src={profileIcon} alt="Profile" />
      </div>

      <div className={styles.burgerIcon} onClick={() => setMenuOpen(true)}>
        <div className={styles.burgerBar}></div>
        <div className={styles.burgerBar}></div>
        <div className={styles.burgerBar}></div>
      </div>

      <nav className={`${styles.mobileNav} ${menuOpen ? styles.open : ""}`}>
        <span className={styles.closeIcon} onClick={() => setMenuOpen(false)}>
          &times;
        </span>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact Us</a>
        <a href="/blog">Blog</a>
      </nav>
    </header>
  );
};

export default Header;
