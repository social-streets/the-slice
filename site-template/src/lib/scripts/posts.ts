import type { ArticleMetadata } from "@gonzo-engineering/libs";

export const turnAuthorIdsIntoObjects = (authorIds: string[]) => {
  const formattedAuthorId = (id: string) => {
    return id
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  };
  return authorIds.map((authorId) => {
    return {
      slug: authorId,
      name: formattedAuthorId(authorId),
      bio: "Blah",
    };
  });
};

function getAllPosts() {
  const rawPosts = [];

  const paths = import.meta.glob("/src/data/articles/*.md", { eager: true });

  for (const path in paths) {
    const file = paths[path];

    if (file && typeof file === "object" && "metadata" in file) {
      const rawMetadata = file.metadata as {
        title: string;
        publicationDate: string;
        authors: string[];
        section: string;
      };
      const slug = path.replace("/src/data/articles/", "").replace(".md", "");
      const postMetadata = {
        ...rawMetadata,
        authors: turnAuthorIdsIntoObjects(rawMetadata.authors),
        slug,
      };
      rawPosts.push(postMetadata);
    }
  }

  const sortedPosts: ArticleMetadata[] = rawPosts.sort(
    (first, second) =>
      new Date(second.publicationDate).getTime() -
      new Date(first.publicationDate).getTime()
  );

  return sortedPosts;
}

export const allPosts = getAllPosts();
