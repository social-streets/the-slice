<script lang="ts">
  import { makeArticleSchema } from "@gonzo-engineering/libs";
  import {
    ArticleCardGrid,
    ArticleFeaturedImage,
    ArticleHead,
  } from "@gonzo-engineering/dummy-ui";
  import { injectAdInArticle } from "$lib/scripts/ads.js";

  let { data } = $props();

  const { article } = $derived(data);

  $effect(() => {
    injectAdInArticle(
      data.ads.banner.img,
      `Advertisement for ${data.ads.banner.name}`
    );
  });
</script>

<svelte:head>
  <title>{article.title} | {data.publication.name}</title>
  <meta property="og:type" content="article" />
  {@html `<script type="application/ld+json">${JSON.stringify(makeArticleSchema(data.publication, article))}</script>`}
</svelte:head>

<div class="container">
  <article>
    <ArticleHead
      title={article.title}
      description={article.description ? article.description : ""}
      publicationDate={article.publicationDate}
      authors={article.authors}
    />
    {#if article.featuredImage}
      <ArticleFeaturedImage
        src={article.featuredImage}
        altText={""}
        caption={article.featuredImageCaption}
      />
    {/if}
    <div>
      {@html article.content}
    </div>
  </article>

  <!-- <Ad ad={data.ads.banner} /> -->

  <ArticleCardGrid heading="Related articles" articles={data.otherArticles} />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  article {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
