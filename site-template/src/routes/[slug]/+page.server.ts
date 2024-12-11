import type { ArticleMetadata, PublicationDetails } from "$lib/types/index.js";
import { error } from "@sveltejs/kit";

export async function load({ fetch, params }) {
  try {
    const publicationDetailsResponse = await fetch("/api/publication-details");
    const publicationDetails: PublicationDetails =
      await publicationDetailsResponse.json();

    const section = publicationDetails.sections.find(
      (section) => section.slug === params.slug
    );

    if (!section) {
      throw error(404, `Could not find ${params.slug}`);
    }

    const articlesResponse = await fetch(`/api/articles`);
    const articles: ArticleMetadata[] = await articlesResponse.json();

    const articlesInSection = articles.filter((article) => {
      return article.section === params.slug;
    });

    return {
      section,
      articlesInSection,
    };
  } catch {
    error(404, `Could not find ${params.slug}`);
  }
}
