import Head from "next/head";
import BlockContent from "@sanity/block-content-to-react";
import client, {
  fetchPost,
  PostResponse,
  getImageUrl,
} from "../../sanityClient";
import RedirectToNotFound from "../../components/redirectToNotFound";
import styles from "../../styles/Post.module.css";
import Menu from "../../components/menu";
import { formatDate } from "../../utils";
import Footer from "../../components/footer";

const Post = (props: PostResponse) => {
  if (props.type === "NOT_FOUND") {
    return <RedirectToNotFound />;
  }

  const post = props.data;

  return (
    <div>
      <Head>
        <title>{post.title} - Tromsø strikkefestival</title>
      </Head>

      <Menu />

      <article className={styles.post}>
        <div className={styles.postHeader}>
          <div>
            <h1>{post.title}</h1>
            <p className={styles.date}>
              Publisert {formatDate(post.publishedAt)}
            </p>
          </div>

          <div className={styles.image}>
            <img src={getImageUrl(post.mainImage).url()} />
          </div>
        </div>

        <div className={styles.articleBody}>
          <BlockContent
            blocks={post.body}
            imageOptions={{ w: 320, h: 240, fit: "max" }}
            {...client.config()}
          />
        </div>
      </article>

      <Footer />
    </div>
  );
};

Post.getInitialProps = async function (context) {
  const { slug = "" } = context.query;
  return await fetchPost(slug);
};

export default Post;
