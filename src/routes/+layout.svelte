<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="h-screen w-screen overflow-x-hidden bg-black text-white">
	<div class="font-turret z-90 flex justify-around pt-10 text-white">
		<div class="flex w-fit items-center text-center text-xl">CyberGenix</div>
		<div class="flex w-1/4 justify-between text-xl">
			<a href="/"> Home </a>
			<a href="/about"> About Us </a>
			<a href="/services"> Services </a>
			<a href="/teams"> Teams</a>
		</div>
	</div>
	<main class="relative">
		{@render children()}
	</main>
</div>
