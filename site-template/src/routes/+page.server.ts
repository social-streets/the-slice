import type { HydratedArticleMetadata } from "$lib/types";

export async function load({ fetch }) {
  const articlesResponse = await fetch("/api/articles");
  const articles: HydratedArticleMetadata[] = await articlesResponse.json();
  return { articles };
}
