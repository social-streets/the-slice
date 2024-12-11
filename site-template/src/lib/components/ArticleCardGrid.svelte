<script lang="ts">
  import type { ArticleMetadata } from "$lib/types";
  import ArticleCard from "./cards/ArticleCardRegular.svelte";

  let { heading, articles }: { heading?: string; articles: ArticleMetadata[] } =
    $props();
</script>

<div>
  {#if heading}
    <h3>{heading}</h3>
  {/if}
  <div class="related-articles-grid">
    {#each articles as article}
      <ArticleCard
        headline={article.title}
        description={article.description}
        path={`/${article.section}/${article.slug}`}
        publicationDate={article.publicationDate}
        featuredImage={article.featuredImage}
      />
    {/each}
  </div>
</div>

<style>
  h3 {
    font-size: 1.5rem;
    text-align: center;
    border-top: solid 1px #ccc;
    border-bottom: solid 1px #ccc;
    margin-bottom: 0.5rem;
    padding: 0.5rem 0;
  }
  .related-articles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
  }
</style>
