<script>
  import Route from "./Route.svelte";
  import Starter from "../features/Starter";
  import Conference from "../features/Conference";
</script>

<Route page="starter" component={Starter} />
<Route page="conference" component={Conference} />
