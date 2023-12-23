<script lang=ts>
  import { createEventDispatcher } from 'svelte';
  import { pannable } from '../utils/pannable';
  import { fade, scale } from 'svelte/transition';

  const dispatch = createEventDispatcher();
  export let min_width = 600;
  export let min_height = 500;

  export let title: string = 'untitled';
  export let zidx: number = 0;
  export let x: number = Math.round(Math.random() * 200) + 100;
  export let y: number = Math.round(Math.random() * 50) + 50;
  export let w: number = min_width;
  export let h: number = min_height;

  let focus: boolean = false;
</script>

<article
  style={`top: ${y}px; left: ${x}px; height: ${h}px; width: ${w}px; z-index: ${zidx}`}
  on:mousedown={() => {
    dispatch('focus', { title });
  }}
  in:scale={{ duration: 100 }}
  out:fade={{ duration: 150 }}
>
  <header
    use:pannable
    on:panstart={() => {
      document.body.style.cursor = 'move';
      focus = false;
    }}
    on:panmove={({ detail }) => {
      x += detail.dx;
      y += detail.dy;
    }}
    on:panend={() => {
      document.body.style.cursor = 'auto';
      focus = true;
    }}
  >
    <h1>{title}</h1>
    <span class=close on:mouseup={() => dispatch('close', { title })}>close</span>
  </header>
  <main on:mousedown={() => {
    dispatch('focus', { title });
    focus = true;
  }}>
    <slot name=content class=content {focus}></slot>
  </main>
  <div class=resize
    use:pannable
    on:panstart={() => {
      document.body.style.cursor = 'nw-resize';
      focus = false;
    }}
    on:panmove={({ detail }) => {
      w = Math.max(min_width, w + detail.dx);
      h = Math.max(min_height, h + detail.dy);
    }}
    on:panend={() => {
      document.body.style.cursor = 'auto';
      focus = true;
    }}
  />
</article>

<style>
  article {
    position: absolute;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    border: solid 3px #222;
  }
  header {
    position: relative;
    padding: 4px 0;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: #222;
    color: #eee;
  }
  h1 {
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 16px;
  }
  span.close {
    position: absolute;
    right: 4px;
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 16px;
  }
  span.close:hover {
    cursor: pointer;
  }
  main {
    position:relative;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    width: 100%;
    height: 100%;
    background-color: white;
  }
  .content {
    position:relative;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  div.resize {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 10px;
    width: 10px;
  }
  div.resize:hover {
    cursor: nw-resize;
  }
  iframe {
    height: 100%;
    width: 100%;
    border: none;
  }
</style>
