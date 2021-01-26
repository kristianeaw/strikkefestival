import Head from "next/head";
import { useState, useEffect } from "react";
import Footer from "../components/footer";
import Menu from "../components/menu";
import { PostsSection } from "../components/posts";
import {
  fetchLatestPosts,
  RecentPostsResponse,
} from "../sanityClient";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [postsState, setPostsState] = useState<RecentPostsResponse>({
    type: "LOADING",
  });

  useEffect(() => {
    fetchRecentPosts();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Tromsø strikkefestival</title>
      </Head>

      <header className={styles.header}>
        <Menu />

        <div className={styles.headerInner}>
          <h1>Nordnorsk strikkelykke</h1>

          <img
            src="/tree.png"
            alt="tree image"
            className={styles.headerImageTree}
          />

          <p>
            Vi løfter temaet Nordnorsk stikkelykke med oss videre i år også, og
            håper at årets festival, for 9ende år på rad, vil gi påfyll av enorm
            strikkeglede og inspirasjon.
          </p>
        </div>

        <div className={styles.images}>
          <div>
            <img src="/festival.jpg" alt="festivalshop" />
            <img src="/votter.jpg" alt="votter" />
          </div>
          <div className={styles.imagesInnerSecond}>
            <img src="/afterstrikk.jpg" alt="afterstrikk" />
            <img src="/heart.jpg" alt="garn" />
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.introSection}>
          <div className={styles.introSectionFlex}>
            <img src="/festivalshop.jpg" alt="festivalshop" />
          </div>

          <div className={styles.introSectionFlex}>
            <h2>Om festivalen</h2>
            <p>
              Tromsø strikkefestival en ideell festival og bestreber å arrangere
              gratis foredrag og kurs med lav pris slik at alle skal ha mulighet
              til å delta. Vi vil rette en stor takk til våre bidragsytere, som
              gjør det mulig for oss å gjennomføre festivalen. Stor takk til
              alle frivillige, Stiftelsen til fremme av husflidssaken i Troms,
              Fylkeshusflidslaget og husflidskonsulenten i Troms.
            </p>
          </div>
        </section>

        <PostsSection
          postsState={postsState}
          headerText="Siste nytt"
          showSeeAllButton={true}
        />
      </main>
      <Footer />
    </div>
  );

  function fetchRecentPosts() {
    fetchLatestPosts().then((response) => setPostsState(response));
  }
}
