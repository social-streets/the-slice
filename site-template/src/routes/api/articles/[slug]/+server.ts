// import type { Author } from "$lib/types/index.js";
import { AUTHORS } from "$lib/constants.js";
import type { Article } from "$lib/types/index.js";
import { json } from "@sveltejs/kit";
import { render } from "svelte/server";

export async function GET({ params }) {
  try {
    const post = await import(`../../../../data/articles/${params.slug}.md`);
    const content = render(post.default).body;

    // // Replace author IDs with author objects
    const postsWithAuthorObjects: Article = {
      ...post.metadata,
      authors: post.metadata.authorIds.map((authorId: string) => {
        return AUTHORS.find((author) => author.id === authorId);
      }),
      content,
    };

    return json(postsWithAuthorObjects);
  } catch {
    return json({ error: "Not found" }, { status: 404 });
  }
}
