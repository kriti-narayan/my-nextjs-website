<script lang="ts">
	let { title, tag, children } = $props();
	import { Motion } from 'svelte-motion';
</script>

<Motion initial={{ x: 10 * 1000 }} animate={{ x: 0 }} transition={{ duration: 0.5 }} let:motion>
	<div use:motion class="bg-gradient-to-r from-black via-blue-900 to-blue-500 pt-20">
		<div class="mb-8 text-center">
			<span class="rounded-full bg-blue-500/20 p-2 px-4 text-blue-300 uppercase">{tag}</span>
		</div>
		<Motion
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 2 }}
			let:motion
		>
			<span use:motion>
				<div class="mb-8 text-center text-3xl font-bold capitalize md:text-5xl">
					{title}
				</div>
				<p class="text-md">
					{@render children()}
				</p>
			</span>
		</Motion>
		<div class="my-10 flex items-center justify-center">
			<div class="h-2 w-24 rounded-full bg-blue-500"></div>
		</div>
	</div>
</Motion>
