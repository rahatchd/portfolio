<script lang=ts>
  import { fly, fade } from 'svelte/transition';
  let dropdown: boolean = false;

  const links: { href: string; text: string }[] = [
    { href: 'https://github.com/rahatchd', text: 'Github' },
    { href: 'https://www.linkedin.com/in/rahat-dhande-297122105/', text: 'Linkedin' },
    { href: 'https://www.instagram.com/rahatchd/', text: 'Instagram' },
  ];
</script>

<header>
  <a href="#" on:click={() => dropdown = !dropdown}>
  <img src={`/img/dropdown-${dropdown ? 'open' : 'closed'}.jpeg`} alt="avatar"/>
  </a>
</header>
{#if dropdown}
  <div
    class=dropdown
    in:fly|fade={{ y: -10, duration: 500 }}
    out:fly|fade={{ y: 10, duration: 500 }}
  >
    <p class=user>@rahatchd</p>
    <ul>
      {#each links as { href, text }}
      <li>
        <a class=link {href}>{text}</a>
      </li>
      {/each}
    </ul>
    <p class=disclaimer>
      ⚠️ Note: <i>site is under construction</i>
    </p>
  </div>
{/if}

<style>
  header {
    top: 0;
    width: 100vw;
    height: 40px;
    background-color: #222;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
  a {
    margin-right: 30px;
    padding: 5px 10px;
    border-radius: 10%;
  }
  a:hover {
    background-color: rgba(200, 200, 200, 0.2);
  }
  img {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: solid 1px white;
  }
  .dropdown {
    position: absolute;
    top: 50px;
    right: 30px;
    background-color: #eaeaea;
    color: #222;
    border-radius: 3px;
    border: solid #222 1px;
    width: 15vw;
    min-height: 5vh;
    display: flex;
    flex-direction: column;
  }
  .user {
    margin: 10px 0 0 0;
    padding: 0 10px 10px 10px;
    border-bottom: solid #222 1px;
  }
  .disclaimer {
    padding: 0 0 10px 10px;
    margin-bottom: 5px;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    border-bottom: solid #222 1px;
  }
  li {
    margin: 1px 0;
    padding: 10px 0;
    border-bottom: rgba(0, 0, 0, 0.2) solid 1px;
  }
  li:last-child {
    border: none;
  }
  li:hover {
    background-color: rgba(200, 200, 200, 0.5);
  }
  .link {
    position: relative;
    display: inline-block;
    text-decoration: none;
    text-transform: none;
    width: 100%;
    color: #222;
    background: none;
  }
</style>