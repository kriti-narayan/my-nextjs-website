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
		<div class="text-center text-white md:text-left">Welcome</div>
		<div
			class="bg-black text-center text-4xl font-extrabold tracking-widest text-white md:text-7xl"
		>
			CyberGenix Security Pvt Ltd.
		</div>
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
