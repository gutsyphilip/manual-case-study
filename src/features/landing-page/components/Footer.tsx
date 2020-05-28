import React from "react";
import { Link } from "react-router-dom";

import {
  ManualLogo,
  FacebookIcon,
  TwitterIcon,
  LinkedInIcon,
} from "../../../assets/svgs";

import styles from "./landing-page.module.scss";

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer_main}>
        <ManualLogo className={styles.footer_main_logo} />
        <nav className={styles.footer_main_nav}>
          <div className={styles.footer_main_nav_group}>
            <header className={styles.footer_main_nav_group_header}>
              <h5 className={styles.footer_main_nav_group_header_title}>
                PRODUCT
              </h5>
            </header>
            <ul className={styles.footer_main_nav_group_list}>
              <li className={styles.footer_main_nav_group_list_item}>
                <Link to="">Popular</Link>
              </li>
              <li className={styles.footer_main_nav_group_list_item}>
                <Link to="">Trending</Link>
              </li>
              <li className={styles.footer_main_nav_group_list_item}>
                <Link to="">Guided</Link>
              </li>
              <li className={styles.footer_main_nav_group_list_item}>
                <Link to="">Products</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer_main_nav_group}>
            <header className={styles.footer_main_nav_group_header}>
              <h5 className={styles.footer_main_nav_group_header_title}>
                Company
              </h5>
            </header>
            <ul className={styles.footer_main_nav_group_list}>
              <li className={styles.footer_main_nav_group_list_item}>
                <Link to="">Press Releases</Link>
              </li>
              <li className={styles.footer_main_nav_group_list_item}>
                <Link to="">Mission</Link>
              </li>
              <li className={styles.footer_main_nav_group_list_item}>
                <Link to="">Strategy</Link>
              </li>
              <li className={styles.footer_main_nav_group_list_item}>
                <Link to="">About</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer_main_nav_group}>
            <header className={styles.footer_main_nav_group_header}>
              <h5 className={styles.footer_main_nav_group_header_title}>
                INFO
              </h5>
            </header>
            <ul className={styles.footer_main_nav_group_list}>
              <li className={styles.footer_main_nav_group_list_item}>
                <Link to="">Support</Link>
              </li>
              <li className={styles.footer_main_nav_group_list_item}>
                <Link to="">Customer Service</Link>
              </li>
              <li className={styles.footer_main_nav_group_list_item}>
                <Link to="">Get Started Guide</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer_main_nav_group}>
            <header className={styles.footer_main_nav_group_header}>
              <h5 className={styles.footer_main_nav_group_header_title}>
                Follow us
              </h5>
            </header>
            <ul className={styles.footer_main_nav_group_icons}>
              <li className={styles.footer_main_nav_group_icons_icon}>
                <Link to="">
                  <FacebookIcon />
                </Link>
              </li>
              <li className={styles.footer_main_nav_group_icons_icon}>
                <Link to="">
                  <TwitterIcon />
                </Link>
              </li>
              <li className={styles.footer_main_nav_group_icons_icon}>
                <Link to="">
                  <LinkedInIcon />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </section>
      <div className={styles.footer_sub}>
        <hr />
        <p className={styles.footer_sub_credits}>
          &copy; 2019 Manual. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
