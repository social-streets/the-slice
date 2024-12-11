import type { Article, ArticleMetadata } from "$lib/types";

export const load = async ({ fetch, params, url }) => {
  const articleResponse = await fetch(`/api/articles/${params.slug}`);
  const article: Article = await articleResponse.json();

  const otherArticlesResponse = await fetch(`/api/articles`);
  const otherArticles: ArticleMetadata[] = await otherArticlesResponse.json();

  const randomOtherArticles = otherArticles
    .filter((a) => a.slug !== params.slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  if (!article || !url.pathname.includes(`/${article.section}/`)) {
    throw new Error("Not found");
  }

  return {
    article,
    otherArticles: randomOtherArticles,
  };
};
