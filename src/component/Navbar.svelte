<script lang="ts">
	import { Motion } from 'svelte-motion';
	let menuOpen = $state(false);
</script>

<div
	class="font-turret z-90 flex justify-between border-b-2 border-b-blue-700 px-8 pt-4 text-white"
>
	<div class="flex w-fit items-center text-center text-xl">
		<Motion let:motion animate={{ rotate: 720 }}>
			<img use:motion src="/cybergenix.png" alt="logo" class="size-20" />
		</Motion>
		<span class="hidden md:block">
			<Motion
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2 }}
				let:motion
			>
				<div use:motion>
					CyberGenix <br />Security
				</div>
			</Motion>
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

	<Motion animate={{ y: [-100, 10, 0] }} let:motion>
		<div use:motion class="hidden w-1/4 items-center justify-between text-xl md:flex">
			<a href="/"> Home </a>
			<a href="/about"> About Us </a>
			<a href="/services"> Services </a>
			<a href="/teams"> Teams</a>
		</div>
	</Motion>
</div>
{#if menuOpen}
	<div
		class="text-md absolute z-10 flex w-full flex-col items-center justify-between bg-gray-600 p-4"
	>
		<a onclick={() => (menuOpen = false)} href="/"> Home </a>
		<a onclick={() => (menuOpen = false)} href="/about"> About Us </a>
		<a onclick={() => (menuOpen = false)} href="/services"> Services </a>
		<a onclick={() => (menuOpen = false)} href="/teams"> Teams</a>
	</div>
{/if}
