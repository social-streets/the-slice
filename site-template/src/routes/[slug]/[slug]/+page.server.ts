import { allPosts } from "$lib/scripts/posts.js";
import type { Article } from "$lib/types";
import { render } from "svelte/server";

export const entries = () => {
  const allPostSlugs = allPosts.map((post) => {
    return { slug: post.slug };
  });
  return allPostSlugs;
};

export const load = async ({ params }) => {
  const post = await import(`../../../data/articles/${params.slug}.md`);
  const content = render(post.default).body;

  const randomOtherArticles = allPosts
    .filter((a) => a.slug !== params.slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  const article: Article = {
    ...post.metadata,
    content,
  };

  return {
    article,
    otherArticles: randomOtherArticles,
  };
};
