<script lang="ts">
  import type { HydratedArticleMetadata } from "$lib/types";
  import ArticleCardFeatured from "../cards/ArticleCardFeatured.svelte";
  import ArticleCardGrid from "../ArticleCardGrid.svelte";

  let {
    heading,
    articles,
  }: { heading?: string; articles: HydratedArticleMetadata[] } = $props();

  const mostRecentArticle = articles[0];
  const allOtherArticles = articles.slice(1);
</script>

<div class="page-container">
  {#if heading}
    <h2>{heading}</h2>
  {/if}

  <ArticleCardFeatured
    link={`/${mostRecentArticle.section}/${mostRecentArticle.slug}`}
    headline={mostRecentArticle.title}
    authors={mostRecentArticle.authors}
    description={mostRecentArticle.description}
    featuredImage={mostRecentArticle.featuredImage}
  />

  <ArticleCardGrid heading="Latest" articles={allOtherArticles} />
</div>

<style>
  h2 {
    font-size: 2rem;
    text-align: center;
  }
  .page-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
