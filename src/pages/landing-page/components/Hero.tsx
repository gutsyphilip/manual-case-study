import React from "react";
import styles from "./landing-page.module.scss";
import { ManualLogo } from "../../../assets/svgs";
interface Props {}

const Hero = (props: Props) => {
  return (
    <header className={styles.hero}>
      <ManualLogo className={styles.hero_logo} />
      <h1 className={styles.hero_title}>BE GOOD TO YOURSELF</h1>
      <p className={styles.hero_description}>
        We’re working around the clock to bring you a holistic approach to your
        wellness. From top to bottom, inside and out.
      </p>
    </header>
  );
};

export default Hero;
