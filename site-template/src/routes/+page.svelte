<script lang="ts">
  import FrontBasic from "$lib/components/front-layouts/FrontBasic.svelte";
  import SupportPrompt from "$lib/components/SupportPrompt.svelte";
  import { makePublicationSchema } from "$lib/scripts/schema.js";

  let { data } = $props();
</script>

<svelte:head>
  <title>{data.publication.name}</title>
  <meta name="description" content={data.publication.description} />
  {@html `<script type="application/ld+json">${JSON.stringify(makePublicationSchema(data.publication))}</script>`}
</svelte:head>

<FrontBasic articles={data.articles} />

<SupportPrompt
  message={"Power journalism by and for the people."}
  link={data.publication.supportLink}
  linkText={"Become a patron"}
  image={{
    src: data.publication.emblemUrl,
    alt: "A hand holding a pen, writing on a piece of paper.",
  }}
/>
