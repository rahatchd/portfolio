<script lang="ts">
    const TODO_LIST = [
        "[site] optimize for small screens",
        "[site] themes and backgrounds",
        "[code] setup linting",
        "[content] add robotics tutorials",
        "[content] impl terminal emulator",
    ];
    let check_list: [string, boolean][] = TODO_LIST.map<[string, boolean]>(
        (item) => [item, false],
    );
</script>

<section>
    <h1>TODO</h1>

    <ul>
        {#each check_list as item}
            <li>
                <label>
                    <input type="checkbox" bind:checked={item[1]} />
                    {item[0]}
                </label>
            </li>
        {/each}
    </ul>

    {#if check_list.some((e) => e[1])}
    <div class="msg">
        <p>Checking it doesn't make it true y'know...</p>
    </div>
    {/if}
</section>

<style>
    section {
        padding: 0.5em 1em;
    }

    ul {
        list-style: none;
    }

    .msg {
        background: #def;
        border-left: 5px solid #59d;
        padding: 1.5em;
    }
</style>
