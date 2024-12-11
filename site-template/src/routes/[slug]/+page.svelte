<script lang="ts">
  import FrontBasic from "$lib/components/front-layouts/FrontBasic.svelte";

  let { data } = $props();

  const { articlesInSection } = $derived(data);
</script>

<svelte:head>
  <title>{data.section.label} | {data.publication.name}</title>
  <meta property="og:type" content="article" />
</svelte:head>

{#if articlesInSection.length === 0}
  <p>No articles found in this section.</p>
{:else}
  <FrontBasic heading={data.section.label} articles={articlesInSection} />
{/if}
