import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.helpSection}>
        <p>
          <strong>Spørsmål?</strong> Send oss en {' '}
          <a
            href="mailto:tstrikkefestival@gmail.com?Subject=Hei, jeg har et spørmål!"
            target="_top"
          >
            epost
          </a>
        </p>
        <p>
          <strong>Lik oss</strong> på {' '}
          <a
            href="https://www.facebook.com/strikkefestivalenitromso/"
            target="_blank"
          >
            facebook
          </a>
          !
        </p>
      </div>
      <div>
        <p className={styles.info}>
          Tromsø strikkefestival arrangeres av Tromsø og Kvaløysletta
          husflidslag og Norsk Flid Husfliden Tromsø.
        </p>
      </div>
    </div>
  );
}
