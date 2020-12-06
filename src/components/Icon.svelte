<script lang=ts>
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';

  export let icon: string = '📄';
  export let title: string = 'untitled';

  const dispatch = createEventDispatcher();
</script>

<div transition:fade on:dblclick={() => dispatch('launch', { title })}>
  <span class=icon>{icon}</span>
  <span class=caption>{title}</span>
</div>

<style>
  div {
    width: 90px;
    height: 90px;
    padding: 10px;
    margin: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    border-radius: 5%;
  }
  div:hover {
    background-color: whitesmoke;
    cursor: pointer;
  }
  span.icon {
    font-size: 40px;
    text-align: center;
  }
  span.caption {
    margin-top: 5px;;
    font-size: 14px;
    text-align: center;
  }
</style>
