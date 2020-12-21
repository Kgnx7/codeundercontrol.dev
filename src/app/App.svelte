<script>
  import { provideStoreon } from "@storeon/svelte";
  import { store } from "./store";
  import Router from "../components/Router.svelte";

  provideStoreon(store);
</script>

<style lang="scss" global>
  @import "./global.scss";
</style>

<Router />
