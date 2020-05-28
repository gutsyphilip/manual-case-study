import React from "react";

import styles from "./landing-page.module.scss";
interface Props {
  servicesList: {
    tagLine: string;
    title: string;
    description: string;
    src: string;
    srcSet: string[];
  }[];
}

const Services: React.FC<Props> = ({ servicesList }) => {
  return (
    <section className={styles.services}>
      <header className={styles.services_header}>
        <h2 className={styles.services_header_title}>What we can help with</h2>
      </header>
      <div className={styles.services_list}>
        {servicesList.map(
          ({ tagLine, title, description, src, srcSet }, index) => {
            return (
              <div
                className={styles.services_list_item}
                key={`${title.replace(" ", "+")}`}
              >
                <img
                  className={styles.services_list_item_image}
                  src={src}
                  srcSet={srcSet.join(", ")}
                  alt={title}
                />
                <article className={styles.services_list_item_caption}>
                  <h6 className={styles.services_list_item_caption_tagLine}>
                    {tagLine}
                  </h6>
                  <h3 className={styles.services_list_item_caption_title}>
                    {title}
                  </h3>
                  <p className={styles.services_list_item_caption_description}>
                    {description}
                  </p>
                </article>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Services;
