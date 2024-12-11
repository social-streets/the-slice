<script lang="ts">
  import type { Author } from "$lib/types";
  import ArticleCardImage from "./ArticleCardImage.svelte";

  let {
    link,
    headline,
    description,
    authors,
    featuredImage,
  }: {
    link: string;
    headline: string;
    description: string;
    authors?: Author[];
    featuredImage?: string;
  } = $props();
</script>

<a href={link}>
  <div class="card">
    {#if featuredImage}
      <div class="card-image">
        <ArticleCardImage src={featuredImage} alt={headline} />
      </div>
    {/if}
    <div class="card-details">
      <h3>{headline}</h3>
      <div>{description}</div>
      {#if authors}
        <div class="byline">
          By {authors.map((author) => author.name).join(", ")}
        </div>
      {/if}
    </div>
  </div>
</a>

<style>
  a {
    text-decoration: none;
    color: inherit;
  }
  .card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .card-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
  }
  .card-image {
    flex: 2;
  }
  h3 {
    font-size: 1.8rem;
  }
  .byline {
    font-size: 0.9rem;
    font-weight: bold;
  }
  @media (min-width: 768px) {
    .card {
      flex-direction: row;
      flex-direction: row-reverse;
    }
  }
</style>
