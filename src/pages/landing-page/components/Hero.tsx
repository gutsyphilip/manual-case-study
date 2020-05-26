import React from "react";
import { Button } from "../../../components/button";
import { ManualLogo } from "../../../assets/svgs";

import styles from "./landing-page.module.scss";

interface Props {}

const Hero = (props: Props) => {
  return (
    <header className={styles.hero}>
      <ManualLogo className={styles.hero_logo} />
      <div className={styles.hero_caption}>
        <h1 className={styles.hero_caption_title}>BE GOOD TO YOURSELF</h1>
        <p className={styles.hero_caption_description}>
          We’re working around the clock to bring you a holistic approach to
          your wellness. From top to bottom, inside and out.
        </p>
        <Button className={styles.hero_caption_button} variant="themed">
          TAKE THE QUIZ
        </Button>
      </div>
    </header>
  );
};

export default Hero;
