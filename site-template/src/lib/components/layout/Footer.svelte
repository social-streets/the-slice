<script lang="ts">
  let { yearFounded, parentOrg }: { yearFounded: number; parentOrg: string } =
    $props();
</script>

<footer>
  <div>
    © {yearFounded} - {new Date().getFullYear()} • {parentOrg}
  </div>
  <div class="gonzo-plug">
    Powered by <a href="https://gonzo.engineering">Gonzo Engineering</a>
  </div>
</footer>

<style>
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 3rem 0;
    gap: 0.5rem;
  }
  .gonzo-plug {
    font-size: 0.8rem;
    a {
      color: inherit;
      text-decoration: none;
      font-weight: bold;
    }
  }
</style>
