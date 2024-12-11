<script lang="ts">
  let {
    src,
    altText,
    caption,
  }: {
    src: string;
    altText: string;
    caption?: string;
  } = $props();
</script>

<figure>
  <img {src} alt={altText} />
  {#if caption}
    <figcaption>{caption}</figcaption>
  {/if}
</figure>

<style>
  img {
    border-radius: 0.5rem;
    width: 100%;
  }
  figcaption {
    font-size: 0.8rem;
    color: #666;
    text-align: right;
    margin-right: 0.2rem;
  }
  figure {
    margin-top: 1rem;
    @media (min-width: 768px) {
      width: 150%;
      margin-left: -25%;
      max-width: 150%;
    }
  }
</style>
