<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  export let icon: any;
  export let title: string = "untitled";
  export let color: string = "grey";

  const dispatch = createEventDispatcher();
</script>

<div transition:fade on:dblclick={() => dispatch("launch", { title })}>
  <span class="icon" style={`color: ${color};`}>
    <svelte:component this={icon} />
  </span>
  <span class="caption">{title}</span>
</div>

<style>
  div {
    width: 90px;
    height: 90px;
    padding: 10px;
    margin: 5px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5%;
  }
  div:hover {
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  .icon {
    display: inline-flex;
    height: 40px;
    width: 40px;
  }
  .caption {
    margin-top: 5px;
    font-size: 14px;
    text-align: center;
  }
</style>
