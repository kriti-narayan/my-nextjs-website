<script lang="ts">
	import { Application } from '@splinetool/runtime';
	import { onMount } from 'svelte';
	import { Motion } from 'svelte-motion';
	onMount(() => {
		// @ts-expect-error html element
		const canvas: HTMLCanvasElement = document.getElementById('canvas3d');
		const app = new Application(canvas);
		app.load('https://prod.spline.design/NNfGHj4gsBiVtyuU/scene.splinecode');
	});
</script>

<div class="font-turret flex h-screen w-screen flex-col items-center justify-center uppercase">
	<div>
		<span class="text-center text-white md:text-left">
			<Motion initial={{ x: 10 * 1000 }} animate={{ x: 0 }} transition={{ duration: 2 }} let:motion>
				<div use:motion>Welcome</div>
			</Motion></span
		>
		<span
			class="bg-black text-center text-4xl font-extrabold tracking-widest text-white md:text-7xl"
		>
			<Motion initial={{ x: -1000 }} animate={{ x: 0 }} transition={{ duration: 2 }} let:motion>
				<div use:motion>CyberGenix Security Pvt Ltd.</div>
			</Motion>
		</span>

		<div class="hidden md:block">
			<div class="absolute inset-0 text-center opacity-90">
				<div class="relative">
					<canvas id="canvas3d"></canvas>
					<div class="absolute bottom-0 h-14 w-screen bg-black text-white"></div>
				</div>
			</div>
		</div>
	</div>
</div>
