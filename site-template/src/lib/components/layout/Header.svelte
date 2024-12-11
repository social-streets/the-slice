<script lang="ts">
  import type { NavSection } from "$lib/types";
  import HeaderLink from "./HeaderLink.svelte";
  let {
    publicationName,
    navigation,
  }: {
    publicationName: string;
    navigation: NavSection[];
  } = $props();
</script>

<header>
  <a href="/"><h1>{publicationName}</h1></a>
  <nav>
    <ul>
      {#each navigation as { label, url, subNav }}
        <li>
          <HeaderLink title={label} href={url} />
          {#if subNav}
            <ul class="sub-nav">
              {#each subNav as { label, url }}
                <li>
                  <a href={url}>{label}</a>
                </li>
              {/each}
            </ul>
          {/if}
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
    padding: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  h1 {
    font-family: var(--main-titlepiece-font);
  }
  nav {
    display: flex;
    justify-content: center;
  }
  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    gap: 0.5rem;
  }
  .sub-nav {
    display: none;
    position: absolute;
    background-color: white;
    border: 1px solid black;
    padding: 0;
  }
  li:hover .sub-nav {
    display: block;
  }
  a {
    text-decoration: none;
    color: black;
  }
</style>
