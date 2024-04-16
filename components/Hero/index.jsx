import styles from "./Hero.module.scss";
import Logo from "../Logo";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__top}>
        <div>
          <Logo />
        </div>
        <span>about</span>
        <span>contact</span>
      </div>

      <h1 className={styles.hero__title}>
        <span>Ultra</span>
        <span className={styles.hero__line}></span>
        <span>agency</span>
      </h1>

      <div className={styles.hero__image}>
        <div className={styles.hero__imageOverlay}></div>
        <Image
          src="/images/blob.jpg"
          alt=""
          width={1728}
          height={650}
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default Hero;
