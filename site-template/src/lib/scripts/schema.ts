import type { Article, PublicationDetails } from "$lib/types";

export const makePublicationSchema = (
  publicationDetails: PublicationDetails
) => {
  return {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: publicationDetails.name,
    description: publicationDetails.description,
    url: publicationDetails.url,
    logo: publicationDetails.logoUrl,
    image: publicationDetails.emblemUrl,
    sameAs: publicationDetails.supportLink,
    potentialAction: {
      "@type": "DonateAction",
      name: "Support",
      target: publicationDetails.supportLink,
    },
  };
};

export const makeArticleSchema = (
  publicationDetails: PublicationDetails,
  article: Article
) => {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${publicationDetails.url}/${article.section}/${article.slug}`,
    },
    headline: article.title,
    image: article.featuredImage,
    datePublished: article.publicationDate,
    description: article.description,
    author: article.authors?.map((author) => {
      return {
        "@type": "Person",
        name: author.name,
      };
    }),
    publisher: {
      "@type": "Organization",
      name: publicationDetails.name,
      logo: {
        "@type": "ImageObject",
        url: publicationDetails.logoUrl,
      },
    },
    keywords: article.tags.join(", "),
  };
};
