<script lang="ts">
	let { title, tag, children } = $props();
</script>

<div class="bg-gradient-to-r from-black via-blue-900 to-blue-500 pt-20">
	<div class="mb-8 text-center">
		<span class="rounded-full bg-blue-500/20 p-2 px-4 text-blue-300 uppercase">{tag}</span>
	</div>
	<div class="mb-8 text-center text-3xl font-bold capitalize md:text-5xl">{title}</div>
	<p class="text-md">
		{@render children()}
	</p>
	<div class="my-10 flex items-center justify-center">
		<div class="h-2 w-24 rounded-full bg-blue-500"></div>
	</div>
</div>
