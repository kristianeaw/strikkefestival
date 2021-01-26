import { getImageUrl, RecentPostsResponse } from "../sanityClient";
import styles from "../styles/Home.module.css";
import { formatDate } from "../utils";

interface PostsSectionState {
  postsState: RecentPostsResponse;
  headerText: string;
  showSeeAllButton: boolean;
}

export const PostsSection = ({
  postsState,
  headerText,
  showSeeAllButton,
}: PostsSectionState) => {
  if (postsState.type === "ERROR") {
    return <></>;
  }

  if (postsState.type === "LOADING") {
    return (
      <section className={styles.posts}>
        <h2>{headerText}</h2>
      </section>
    );
  }

  return (
    <section className={styles.posts}>
      <h2>{headerText}</h2>

      {postsState.data.map((post) => {
        return (
          <a
            href={`/post/${post.slug.current}`}
            key={post.slug.current}
            className={styles.post}
          >
            <div>
              <p className={styles.postDate}>
                Publisert {formatDate(post.publishedAt)}
              </p>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <p className={styles.postIngress}>{post.ingress}</p>
            </div>

            <div className={styles.postImage}>
              <img src={getImageUrl(post.mainImage).url()} />
            </div>
          </a>
        );
      })}

      {showSeeAllButton && (
        <div className={styles.postsLinkSection}>
          <a href="/posts" className={styles.postsLink}>
            Se alle artikler
          </a>
        </div>
      )}
    </section>
  );
};
