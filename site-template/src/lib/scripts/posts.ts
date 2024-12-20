import type {
  HydratedArticleMetadata,
  RawArticleMetadata,
} from "@gonzo-engineering/libs";

export const formattedAuthorId = (id: string) => {
  return id
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
};

// TODO: Const hydrateArticleMetadata

function getAllPosts() {
  let rawPosts = [];

  const paths = import.meta.glob("/src/data/articles/*.md", { eager: true });

  for (const path in paths) {
    const file = paths[path];

    if (file && typeof file === "object" && "metadata" in file) {
      const metadata = file.metadata as RawArticleMetadata & {
        author: string;
      };
      const slug = path.replace("/src/data/articles/", "").replace(".md", "");
      const post = {
        ...metadata,
        slug,
      } satisfies RawArticleMetadata;
      rawPosts.push(post);
    }
  }

  rawPosts = rawPosts.sort(
    (first, second) =>
      new Date(second.publicationDate).getTime() -
      new Date(first.publicationDate).getTime()
  );

  // // @ts-expect-error -- God knows
  const postsWithAuthorObjects: HydratedArticleMetadata[] = rawPosts.map(
    (post) => {
      // Replace author IDs with author objects
      // const authorObjects = post.authorIds?.map((authorId: string) => {
      //   return AUTHORS.find((author) => author.id === authorId);
      // });
      // Convert string in formt 'john-doe' to 'John Doe'
      const authorObject = {
        id: post.author,
        name: formattedAuthorId(post.author),
        bio: "A bio",
      };
      return {
        ...post,
        authors: [authorObject],
      };
    }
  );

  return postsWithAuthorObjects;
}

export const allPosts = getAllPosts();
