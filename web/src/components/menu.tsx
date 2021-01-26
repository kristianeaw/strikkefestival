import styles from "../styles/Menu.module.css";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.menuLeft}>
        <a href="/">Tromsø strikkefestival</a>
      </div>
      {/*<div className={styles.menuRight}>
        <a href="">Hjem</a>
        <a href="/program">Program</a>
      </div>

      <button className={styles.menuMobile}>
        <div  className={styles.stackd}>
        <img src="/hamburger.png" alt="open-menu-icon"/>
        </div>
      </button>*/}
    </div>
  );
}
