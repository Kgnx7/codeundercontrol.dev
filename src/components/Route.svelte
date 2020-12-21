<script>
  import { useStoreon } from "@storeon/svelte";
  import { routerKey } from "@storeon/router";

  export let page = "";
  export let component = null;

  const { [routerKey]: route } = useStoreon(routerKey);
</script>

{#if $route.match.page === page}
  <svelte:component this={component} />
{/if}
