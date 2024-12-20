import { PUBLICATION_DETAILS } from "$lib/constants.js";
import { allPosts } from "$lib/scripts/posts.js";
import type { ArticleMetadata } from "@gonzo-engineering/libs";
import { error } from "@sveltejs/kit";

export function entries() {
  const slugs = PUBLICATION_DETAILS.sections.map((section) => {
    return { slug: section.slug };
  });
  return slugs;
}

export async function load({ params }) {
  try {
    const articles: ArticleMetadata[] = allPosts;

    const articlesInSection = articles.filter((article) => {
      return article.section === params.slug;
    });

    return {
      section: params.slug,
      articlesInSection,
    };
  } catch {
    error(404, `Could not find ${params.slug}`);
  }
}
