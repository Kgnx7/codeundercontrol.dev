<script>
  // import colResizeIcon from "./col-resize.svg";
  export let onResizing;
</script>

<style lang="scss">
  .conference__divider {
    width: 0;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }

  .divider__range {
    position: absolute;
    top: calc(50% - var(--conference__divider-height) / 2);
    left: calc(50% - var(--conference__divider-width) / 2);
    width: var(--conference__divider-width);
    height: var(--conference__divider-height);
    z-index: 999;
    border: none;

    -webkit-appearance: none;
    background-color: transparent;

    &:focus {
      outline: none;
    }

    &::-ms-track {
      width: 100%;
      cursor: pointer;
      background: transparent;
      border-color: transparent;
      color: transparent;
    }

    &::-webkit-slider-runnable-track {
      border: 0;
      cursor: pointer;
    }

    &::-webkit-slider-thumb {
      width: 10px;
      height: 50px;
      background: coral;
      border-radius: 50px;
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: -25px;
    }

    &::-webkit-slider-runnable-track {
      height: 0px;
      border: 0;
    }
  }
</style>

<div class="conference__divider">
  <input type="range" class="divider__range" on:input={onResizing} />
</div>
