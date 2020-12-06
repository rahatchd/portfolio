<script lang=ts>
	import Window from './components/Window.svelte';
	import Icon from './components/Icon.svelte';
	import { wm } from './stores/manager';

	const apps: { icon: string, title: string, src: string }[] = [
		{ icon: '📃', title: 'resume.md', src: './files/resume.html' },
		{ icon: '⚓', title: 'rock-the-boat', src: 'https://rahatchd.github.io/rock-the-boat/' },
		{ icon: '🕹', title: 'das-pan', src: 'https://rahatchd.github.io/das_pan/' },
		{ icon: '💞', title: 'little-hearts', src: 'https://rahatchd.github.io/littlehearts/' }
	];

</script>

<main>
	{#each apps as { icon, title, src}}
	<Icon
		{icon}
		{title}
		on:launch={() => wm.add({ title, src })}
	/>
	{/each}
	{#each $wm as { title, src }, idx (title)}
	<Window
		{title}
		on:close={() => wm.remove({ title })}
		on:focus={() => wm.add({ title, src })}
		let:focus
	>
		<iframe slot=content {src} {title} style={`border: none; width: 100%; height: 100%; pointer-events: ${focus ? 'auto' : 'none'}`}/>
	</Window>
	{/each}
</main>

<style>
	main {
		width: 100vw;
		height: 100vh;
	}
</style>
