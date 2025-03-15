<script lang="ts">
	import '../app.css';
	let { children } = $props();
	let menuOpen = $state(false);
</script>

<div class="h-screen w-screen overflow-x-hidden bg-black text-white">
	<div
		class="font-turret z-90 flex justify-between border-b-2 border-b-blue-700 px-8 pt-4 text-white shadow-2xl shadow-blue-700"
	>
		<div class="flex w-fit items-center text-center text-xl">
			<img src="/cybergenix.png" alt="logo" class="size-20" />
			<span class="hidden md:block">
				CyberGenix <br />Security
			</span>
		</div>
		<div class="flex items-center justify-between md:hidden">
			{#if menuOpen}
				<button onclick={() => (menuOpen = false)} aria-label="close">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			{:else}
				<button onclick={() => (menuOpen = true)} aria-label="open">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			{/if}
		</div>

		<div class="hidden w-1/4 items-center justify-between text-xl md:flex">
			<a href="/"> Home </a>
			<a href="/about"> About Us </a>
			<a href="/services"> Services </a>
			<a href="/teams"> Teams</a>
		</div>
	</div>
	{#if menuOpen}
		<div
			class="text-md absolute z-10 flex w-full flex-col items-center justify-between bg-white/20 p-4"
		>
			<a onclick={() => (menuOpen = false)} href="/"> Home </a>
			<a onclick={() => (menuOpen = false)} href="/about"> About Us </a>
			<a onclick={() => (menuOpen = false)} href="/services"> Services </a>
			<a onclick={() => (menuOpen = false)} href="/teams"> Teams</a>
		</div>
	{/if}
	<main class="relative">
		{@render children()}
	</main>
	<footer class="body-font mt-8 bg-gray-900 text-gray-400">
		<div class="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
			<div
				class="title-font flex items-center justify-center font-medium text-white md:justify-start"
			>
				<img class="size-20 rounded-full p-2 text-white" src="/cybergenix.png" alt="Logo" />
				<span class="ml-3 text-xl">CyberGenix Security</span>
			</div>
			<p
				class="mt-4 text-sm text-gray-400 sm:mt-0 sm:ml-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:pl-4"
			>
				© 2025 CyberGenix Security
			</p>
			<span class="mt-4 inline-flex justify-center sm:mt-0 sm:ml-auto sm:justify-start">
				<a href="." aria-label="button" class="text-gray-400">
					<svg
						fill="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="h-5 w-5"
						viewBox="0 0 24 24"
					>
						<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
					</svg>
				</a>
				<a href="." aria-label="button" class="ml-3 text-gray-400">
					<svg
						fill="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="h-5 w-5"
						viewBox="0 0 24 24"
					>
						<path
							d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
						></path>
					</svg>
				</a>
				<a href="." aria-label="button" class="ml-3 text-gray-400">
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="h-5 w-5"
						viewBox="0 0 24 24"
					>
						<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
						<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
					</svg>
				</a>
				<a href="." aria-label="button" class="ml-3 text-gray-400">
					<svg
						fill="currentColor"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="0"
						class="h-5 w-5"
						viewBox="0 0 24 24"
					>
						<path
							stroke="none"
							d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
						></path>
						<circle cx="4" cy="4" r="2" stroke="none"></circle>
					</svg>
				</a>
			</span>
		</div>
	</footer>
</div>
