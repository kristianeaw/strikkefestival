import Head from "next/head";
import { useState, useEffect } from "react";
import Footer from "../components/footer";
import Menu from "../components/menu";
import { PostsSection } from "../components/posts";
import {
  fetchAllPosts,
  RecentPostsResponse,
} from "../sanityClient";
import styles from "../styles/Home.module.css";

export default function Posts() {
  const [postsState, setPostsState] = useState<RecentPostsResponse>({
    type: "LOADING",
  });

  useEffect(() => {
    fetchRecentPosts();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Artikler - Tromsø strikkefestival</title>
      </Head>

      <Menu />

      <main className={styles.main}>
        <PostsSection postsState={postsState} showSeeAllButton={false} headerText="Artikler" />
      </main>

      <Footer />
    </div>
  );

  function fetchRecentPosts() {
    fetchAllPosts().then((response) => setPostsState(response));
  }
}
