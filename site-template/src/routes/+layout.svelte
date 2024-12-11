<script lang="ts">
  import "$lib/styles/reset.css";
  import Footer from "$lib/components/layout/Footer.svelte";
  import Header from "$lib/components/layout/Header.svelte";
  import Ad from "$lib/components/ads/Ad.svelte";

  let { children, data } = $props();

  const { publication, ads } = data;
</script>

<svelte:head>
  <link rel="icon" href={data.publication.faviconUrl} />
</svelte:head>

<Header
  publicationName={publication.name}
  navigation={publication.navigation}
/>

<!-- <Ad ad={ads.banner} /> -->

<main>
  {@render children()}
</main>

<!-- <Ad ad={ads.sideA} />
<Ad ad={ads.sideB} /> -->

<Footer
  yearFounded={publication.yearFounded}
  parentOrg={publication.parentOrganization}
/>

<style>
  /* @import url("https://fonts.googleapis.com/css2?family=Bokor&family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap"); */

  :global(body) {
    --main-titlepiece-font: "Georgia", serif;
    --main-serif-font: "Georgia", serif;
    --main-sans-serif-font: Arial, sans-serif;

    font-family: var(--main-sans-serif-font);
  }
  :global(h1, h2, h3, h4, h5, h6) {
    font-family: var(--main-serif-font);
    line-height: 1.1;
  }
  :global(p) {
    font-family: var(--main-sans-serif-font);
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  main {
    max-width: 1300px;
    margin: 2rem auto;
    padding: 0 1rem;
  }
</style>
