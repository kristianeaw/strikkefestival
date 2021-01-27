import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export interface SanityPost {
  slug: { current: string };
  categories: string[];
  title: String;
  body: [];
  ingress: string;
  publishedAt: string;
  mainImage: {};
}

export type PostResponse =
  | {
      type: "NOT_FOUND";
    }
  | {
      type: "DATA";
      data: SanityPost;
    };

export const fetchPost = async (slug: string): Promise<PostResponse> => {
  const response = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  );
  if (response === null) {
    return { type: "NOT_FOUND" };
  }
  return {
    type: "DATA",
    data: response,
  };
};

export type RecentPostsResponse =
  | {
      type: "ERROR";
    }
  | {
      type: "LOADING";
    }
  | {
      type: "DATA";
      data: SanityPost[];
    };

export const fetchLatestPosts = async (): Promise<RecentPostsResponse> => {
  const response = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) [0..4]`
  );
  if (response === null) {
    return { type: "ERROR" };
  }
  return {
    type: "DATA",
    data: response,
  };
};

export const fetchAllPosts = async (): Promise<RecentPostsResponse> => {
  const response = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc)`
  );
  if (response === null) {
    return { type: "ERROR" };
  }
  return {
    type: "DATA",
    data: response,
  };
};

export const getImageUrl = (source: {}) => {
  return imageUrlBuilder(client).image(source);
}

const client = sanityClient({
  projectId: "7w0ihe82", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
});

export default client;
