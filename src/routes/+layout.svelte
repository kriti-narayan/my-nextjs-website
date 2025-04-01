<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import Navbar from '../component/Navbar.svelte';
	import Footer from '../component/Footer.svelte';
</script>

<div class="h-screen w-screen overflow-x-hidden bg-black text-white">
	<Navbar />
	<main class="relative px-4">
		{@render children()}
	</main>
	<Footer />
</div>
