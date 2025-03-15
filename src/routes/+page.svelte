<script lang="ts">
	import { Application } from '@splinetool/runtime';
	import { onMount } from 'svelte';
	onMount(() => {
		// @ts-expect-error html element
		const canvas: HTMLCanvasElement = document.getElementById('canvas3d');
		const app = new Application(canvas);
		app.load('https://prod.spline.design/NNfGHj4gsBiVtyuU/scene.splinecode');
	});
</script>

<div class="font-turret flex h-screen w-screen flex-col items-center justify-center uppercase">
	<div>
		<span class="text-white"> Welcome </span>
		<div class="bg-black text-8xl font-extrabold tracking-widest text-white">
			Cyber Genix Pvt Ltd.
		</div>
		<canvas id="canvas3d" class="absolute inset-0 text-center opacity-90"></canvas>
	</div>
</div>
