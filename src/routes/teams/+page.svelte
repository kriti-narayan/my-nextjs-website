<script>
	import TopHero from '../../component/TopHero.svelte';

	let teams = [
		{
			name: 'Divyansh Mishra',
			position: 'Founder',
			profileImg:
				'https://static.wixstatic.com/media/f88665_e8b9f277538947e9843b2d86b4e29465~mv2.jpg/v1/crop/x_21,y_0,w_393,h_582/fill/w_313,h_464,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_storage_emulated_0_Pictures_Gallery_owner_ankaring%20in%20gu_IMG-20240109-WA0019_edited_edite.jpg',
			description:
				'Founder of Cybergenix Security Pvt.Ltd as well as a DCJSP certified ethical hacker with an aprox 2+ years of experience in the domain of cyber security.'
		},
		{
			name: 'Ayush Raturi',
			position: 'Co-Founder',
			profileImg:
				'https://static.wixstatic.com/media/f88665_f66ba2862cd142828ad4b65e03c22d34~mv2.jpg/v1/crop/x_22,y_0,w_341,h_505/fill/w_313,h_464,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1703570439354_edited.jpg',
			description:
				'Co-Founder of Cybergenix Security Pvt.Ltd and an CEH certified cyber security analyst , and aprox 2+ years of experience inthe domain of cyber security.'
		},
		{
			name: 'Kumar Tejaswee',
			position: 'CTO',
			profileImg:
				'https://static.wixstatic.com/media/f88665_8a12b7c9f5c84d64b5693a718c1f1bfa~mv2.jpg/v1/fill/w_319,h_517,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f88665_8a12b7c9f5c84d64b5693a718c1f1bfa~mv2.jpg',
			description:
				'Kumar Tejaswee serves as the CTO (Chief Technology Officer) of Cybergenix Security Pvt. Ltd., leading the company’s technological vision and innovation. With expertise in cutting-edge technologies and cybersecurity solutions, Tejaswee drives the development of advanced AI-driven tools and ensures the technical infrastructure aligns with the company’s strategic goals.'
		},
		{
			name: 'Anchit Pandey',
			position: 'CEO',
			profileImg:
				'https://static.wixstatic.com/media/f88665_bf43f2b6490b4c5eba481f95c7e6a5e3~mv2.jpg/v1/crop/x_49,y_0,w_652,h_966/fill/w_313,h_464,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/anchit_edited.jpg',
			description:
				' Anchit Pandey serves as the CEO of Cybergenix Security Pvt. Ltd., leading the company with a vision to revolutionize cybersecurity through innovative AI-driven solutions. With a strategic mindset and a commitment to excellence, Anchit oversees the company’s operations, growth strategies, and product development, ensuring Cybergenix Security remains at the forefront of the cybersecurity industry.'
		},
		{
			name: 'Raqibul Hoda',
			position: 'General Manager',
			profileImg:
				'https://static.wixstatic.com/media/f88665_bf4108d127ec47ee81868bb049ebc62c~mv2.jpg/v1/crop/x_156,y_0,w_648,h_960/fill/w_313,h_464,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/raquibul%20hoda.jpg',
			description:
				'Raqibul Hoda serves as the General Manager of Cybergenix Security Pvt. Ltd., bringing extensive expertise in ethical hacking and cybersecurity management to the team. With a focus on operational excellence and strategic leadership, Raqibul oversees daily operations, ensuring seamless execution of projects, team coordination, and alignment with the company’s long-term vision.'
		}
	];
</script>

<div class="flex flex-col space-y-9 text-center">
	<TopHero tag="team" title="our team">
		Meet the team at Cybergenix Security! Our experts in cybersecurity and software development
		<br />
		are dedicated to providing top-notch solutions and support. Get in touch with us
		<br />
		to see how our team can help secure your digital world and drive your success.
	</TopHero>

	{#each teams as team, idx (team.position)}
		<div class="container mx-auto flex justify-around">
			<div class="hidden grid-cols-1 gap-16 md:grid md:grid-cols-2">
				{#if (idx + 1) % 2 === 0}
					<img src={team.profileImg} alt="About1" class="mx-auto rounded-full" />
					<div class="text-left">
						<div class="mb-4 font-bold text-blue-300 uppercase">{team.position}</div>
						<div class="mb-4 text-4xl font-bold">{team.name}</div>
						<p>
							{team.description}
						</p>
					</div>
				{:else}
					<div class="text-left">
						<div class="mb-4 font-bold text-blue-300 uppercase">{team.position}</div>
						<div class="mb-4 text-4xl font-bold">{team.name}</div>
						<p>
							{team.description}
						</p>
					</div>
					<img src={team.profileImg} alt="About1" class="mx-auto rounded-full" />
				{/if}
			</div>
			<div class="grid grid-cols-1 gap-16 px-4 md:hidden md:grid-cols-2">
				<img src={team.profileImg} alt="About1" class="mx-auto rounded-full" />
				<div class="text-left">
					<div class="mb-4 font-bold text-blue-300 uppercase">{team.position}</div>
					<div class="mb-4 text-4xl font-bold">{team.name}</div>
					<p>
						{team.description}
					</p>
				</div>
			</div>
		</div>
	{/each}
</div>
