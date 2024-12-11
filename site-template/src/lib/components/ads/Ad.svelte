<script lang="ts">
  import type { Ad } from "$lib/types";

  const { ad }: { ad: Ad } = $props();
</script>

<aside>
  <div class="ad-label">Advertisement</div>
  <img src={ad.img} alt={`Advertisement for ${ad.name}`} />
</aside>

<style>
  aside {
    border: 2px solid black;
    position: relative;
  }
  .ad-label {
    font-size: 0.8rem;
    position: absolute;
    top: -23px;
    right: -2px;
    background-color: black;
    color: white;
    padding: 0.1rem 0.5rem;
    border-radius: 5px 5px 0 0;
  }
  img {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }
</style>
