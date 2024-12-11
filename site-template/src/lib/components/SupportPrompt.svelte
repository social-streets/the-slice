<script lang="ts">
  let {
    message,
    link,
    linkText,
    image,
  }: {
    message: string;
    link: string;
    linkText: string;
    image?: {
      src: string;
      alt: string;
    };
  } = $props();
</script>

<div class="support-prompt">
  {#if image}
    <img src={image.src} alt={image.alt} />
  {/if}
  <div>{message} <a href={link}>{linkText}</a></div>
</div>

<style>
  .support-prompt {
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    padding: 1rem;
  }
  img {
    max-width: 50px;
    border-radius: 10px;
  }
</style>
