import { json } from "@sveltejs/kit";
import type { HydratedArticleMetadata, RawArticleMetadata } from "$lib/types";
import { AUTHORS } from "$lib/constants";

async function getPosts() {
  let rawPosts: RawArticleMetadata[] = [];

  const paths = import.meta.glob("/src/data/articles/*.md", { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").at(-1)?.replace(".md", "");

    if (file && typeof file === "object" && "metadata" in file && slug) {
      const metadata = file.metadata as Omit<RawArticleMetadata, "slug">;
      const post = { ...metadata, slug } satisfies RawArticleMetadata;
      rawPosts.push(post);
    }
  }

  rawPosts = rawPosts.sort(
    (first, second) =>
      new Date(second.publicationDate).getTime() -
      new Date(first.publicationDate).getTime()
  );

  // @ts-expect-error -- God knows
  const postsWithAuthorObjects: HydratedArticleMetadata[] = rawPosts.map(
    (post) => {
      // Replace author IDs with author objects
      const authorObjects = post.authorIds?.map((authorId: string) => {
        return AUTHORS.find((author) => author.id === authorId);
      });
      return {
        ...post,
        authors: authorObjects,
      };
    }
  );

  return postsWithAuthorObjects;
}

export async function GET() {
  const posts = await getPosts();
  return json(posts);
}
