import { allPosts } from "$lib/scripts/posts.js";

export async function load() {
  return { articles: allPosts };
}
