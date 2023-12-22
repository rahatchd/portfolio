<script lang="ts">
	import Window from "./components/Window.svelte";
	import Icon from "./components/Icon.svelte";
	import { wm } from "./stores/manager";
	import Topbar from "./components/Topbar.svelte";
	import GiMonoWheelRobot from "svelte-icons/gi/GiMonoWheelRobot.svelte";
	import IoIosBoat from "svelte-icons/io/IoIosBoat.svelte";
	import GiHeartOrgan from "svelte-icons/gi/GiHeartOrgan.svelte";
	import TiDocument from "svelte-icons/ti/TiDocument.svelte";
	import GiChecklist from "svelte-icons/gi/GiChecklist.svelte";
	import FaRegFolder from "svelte-icons/fa/FaRegFolder.svelte";
	import Resume from "./files/Resume.svelte";
	import Todo from "./files/Todo.svelte";
	import Docs from "./files/Docs.svelte";

	const apps: {
		icon: any;
		comp: any;
		title: string;
		src: string;
		color: string;
	}[] = [
		{
			icon: TiDocument,
			comp: Resume,
			title: "resume.md",
			src: "",
			color: "#ffd700",
		},
		{
			icon: FaRegFolder,
			comp: Docs,
			title: "docs/",
			src: "",
			color: "#aaaaaa",
		},
		{
			icon: IoIosBoat,
			comp: undefined,
			title: "rock-the-boat.exe",
			src: "https://rahatchd.github.io/rock-the-boat/",
			color: "#2288bb",
		},
		{
			icon: GiMonoWheelRobot,
			comp: undefined,
			title: "das-pan.exe",
			src: "https://rahatchd.github.io/das_pan/",
			color: "#22bb88",
		},
		{
			icon: GiHeartOrgan,
			comp: undefined,
			title: "little-hearts.exe",
			src: "https://rahatchd.github.io/littlehearts/",
			color: "#aa2233",
		},
		{
			icon: GiChecklist,
			comp: Todo,
			title: "TODO.txt",
			src: "",
			color: "#111111",
		},
	];
	let background;
</script>

<svelte:body
	on:mousedown={(event) => {
		if (event.target === background) {
		}
	}}
/>

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
			<div slot="content" class="content">
				{#if comp}
					<svelte:component this={comp} {focus} />
				{:else}
					<iframe
						{src}
						{title}
						style={`pointer-events: ${focus ? "auto" : "none"}`}
					/>
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
