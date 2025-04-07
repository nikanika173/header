import React, { useState } from "react";
import styles from "../modules/Header.module.scss";

import Logo from "../assets/Logo.svg";
import SearchIcon from "../assets/Search.svg";
import FavoritesIcon from "../assets/Favorites.svg";
import CartIcon from "../assets/Cart.svg";
import UserIcon from "../assets/User.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className={`${styles.header} container`}>
        <figure className={styles.logoWrapper}>
          <a href="/"><img src={Logo} alt="cyber-logo" /></a>
        </figure>

        <div className={styles.searchWrapper}>
          <img src={SearchIcon} alt="search" className={styles.searchIcon} />
          <input type="text" placeholder="Search" />
        </div>

        <nav className={styles.navBarWrapper}>
          <ul className={styles.navBar}>
            <li>Home</li>
            <li className={styles.nonActive}>About</li>
            <li className={styles.nonActive}>Contact Us</li>
            <li className={styles.nonActive}>Blog</li>
          </ul>
        </nav>

        <figure className={styles.actionsWrapper}>
          <img src={FavoritesIcon} alt="favorites" />
          <a href="/shopping-cart" className={styles.shoppingCartBtn}>
            <img src={CartIcon} alt="cart" />
          </a>
          <img src={UserIcon} alt="user" />
        </figure>

        <div className={styles.burgerMenu} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.closeBtn} onClick={toggleMenu}>×</button>
          <div className={styles.mobileSearch}>
            <input type="text" placeholder="Search keyword ..." />
            <img src={SearchIcon} alt="search" />
          </div>
          <ul className={styles.mobileNav}>
            <li>HOME</li>
            <li>SERVICES</li>
            <li>PROJECTS</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
