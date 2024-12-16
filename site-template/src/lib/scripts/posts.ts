import type { RawArticleMetadata } from "@gonzo-engineering/libs";

function getAllPosts() {
  let rawPosts: RawArticleMetadata[] = [];

  const paths = import.meta.glob("/src/data/articles/*.md", { eager: true });

  for (const path in paths) {
    const file = paths[path];

    if (file && typeof file === "object" && "metadata" in file) {
      const metadata = file.metadata as Omit<RawArticleMetadata, "slug">;
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
  // const postsWithAuthorObjects: HydratedArticleMetadata[] = rawPosts.map(
  //   (post) => {
  //     // Replace author IDs with author objects
  //     const authorObjects = post.authorIds?.map((authorId: string) => {
  //       return AUTHORS.find((author) => author.id === authorId);
  //     });
  //     return {
  //       ...post,
  //       authors: authorObjects,
  //     };
  //   }
  // );

  return rawPosts;
}

export const allPosts = getAllPosts();
