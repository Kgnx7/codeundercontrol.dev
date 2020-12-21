<script>
  import Sandbox from "./Sandbox/";
  import VideChat from "./VideoChat";
  import Resizer from "./Resizer";

  let isResizing = false;

  const isTargetDivider = (target) =>
    target.closest(".conference__divider") !== null;

  const hanldeStartResizing = (event) => {
    if (isTargetDivider(event.target)) isResizing = true;
  };

  const handleEndResizing = () => {
    isResizing = false;
  };

  const handleRezing = (event) => {
    const range = event.target;
    const offset = range.value;

    conferenceRef.style.setProperty("--editor-width", `${offset}%`);
    conferenceRef.style.setProperty("--chat-width", `${100 - offset}%`);
  };

  let conferenceRef;
</script>

<style lang="scss">
  .conference__chat {
    flex-basis: var(--chat-width);

    background-color: AliceBlue;
  }
  .conference {
    --editor-width: 50%;
    --chat-width: 50%;

    --conference__divider-width: 100%;
    --conference__divider-height: 40px;

    display: flex;
    height: 100%;
  }
</style>

<div class="conference" bind:this={conferenceRef}>
  <Sandbox />
  <VideChat />
  <Resizer onResizing={handleRezing} />
</div>
