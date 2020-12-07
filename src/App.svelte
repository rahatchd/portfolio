<script lang=ts>
	import Window from './components/Window.svelte';
	import Icon from './components/Icon.svelte';
	import { wm } from './stores/manager';
	import Topbar from './components/Topbar.svelte';
	import GiMonoWheelRobot from 'svelte-icons/gi/GiMonoWheelRobot.svelte';
	import IoIosBoat from 'svelte-icons/io/IoIosBoat.svelte';
	import GiHeartOrgan from 'svelte-icons/gi/GiHeartOrgan.svelte';
	import TiDocument from 'svelte-icons/ti/TiDocument.svelte';
	import Resume from './files/Resume.svelte';

	const apps: {
		icon: any;
		comp: any;
		title: string;
		src: string;
		color: string;
	}[] = [
		{ icon: TiDocument, 			comp: Resume, 	 title: 'resume.md', 		 src: '', color: 'orange' },
		{ icon: IoIosBoat, 				comp: undefined, title: 'rock-the-boat', src: 'https://rahatchd.github.io/rock-the-boat/', color: '#2299aa' },
		{ icon: GiMonoWheelRobot, comp: undefined, title: 'das-pan', 			 src: 'https://rahatchd.github.io/das_pan/', color: '#22bb99' },
		{ icon: GiHeartOrgan, 		comp: undefined, title: 'little-hearts', src: 'https://rahatchd.github.io/littlehearts/', color: '#bb2233' }
	];
	let background;

</script>

<svelte:body on:mousedown={event => {
	if (event.target === background) {
		
	}
}}/>

<Topbar />
<main bind:this={background}>
	{#each apps as { icon, comp, title, src, color }}
	<Icon
		{title}
		{icon}
		{color}
		on:launch={() => wm.add({ title, comp, src })}
	/>
	{/each}
	{#each $wm as { title, src, comp }, idx (title)}
	<Window
		{title}
		on:close={() => wm.remove({ title })}
		on:focus={() => {
			wm.add({ title, comp, src });
			console.table($wm);
		}}
		let:focus
		zidx={idx}
	>
		<div slot=content class=content>
			{#if comp}
			<svelte:component this={comp} {focus}/>
			{:else}
		  <iframe {src} {title} style={`pointer-events: ${focus ? 'auto' : 'none'}`}/>
			{/if}
		</div>
	</Window>
	{/each}
</main>

<style>
	main {
		position: relative;
		width: 100vw;
		height: 100vh;
	}
	.content {
		position: relative;
		height: 100%;
		width: 100%;
	}
	iframe {
    height: 100%;
    width: 100%;
    border: none;
  }
</style>
