<script lang="ts">
  import { FrontBasic } from "@gonzo-engineering/dummy-ui";

  let { data } = $props();

  const { articlesInSection, section } = $derived(data);

  // Replace all dashes with spaces and capitalize the first letter of each word
  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const formattedSection = $derived(
    section.split("-").map(capitalize).join(" ")
  );
</script>

<svelte:head>
  <title>{formattedSection} | {data.publication.name}</title>
  <meta property="og:type" content="article" />
</svelte:head>

{#key articlesInSection}
  {#if articlesInSection.length === 0}
    <p>No articles found in this section.</p>
  {:else}
    <FrontBasic heading={formattedSection} articles={articlesInSection} />
  {/if}
{/key}
