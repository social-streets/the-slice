import { allPosts, formattedAuthorId } from "$lib/scripts/posts.js";
import type { Article } from "@gonzo-engineering/libs";
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

  const authorObject = {
    id: post.metadata.author,
    name: formattedAuthorId(post.metadata.author),
    bio: "A bio",
  };

  const article: Article = {
    ...post.metadata,
    authors: [authorObject],
    content,
  };

  return {
    article,
    otherArticles: randomOtherArticles,
  };
};
