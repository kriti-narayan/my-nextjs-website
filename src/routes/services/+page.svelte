<script>
	const events = [
		{
			name: 'Spreading Awareness',
			description:
				'At Cybergenix Security, we spread cybersecurity awareness through dynamic sessions and seminars at schools and colleges. Our engaging presentations and workshops aim to equip students with essential knowledge and skills to navigate the digital world safely and securely. Join us in empowering the next generation to protect themselves and their online futures.',
			imageUrl:
				'https://static.wixstatic.com/media/f88665_4ddd04d725d64d31aa51fe14cacd090e~mv2.jpg/v1/crop/x_0,y_1303,w_4440,h_4054/fill/w_360,h_327,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/pexels-bertellifotografia-3321796.jpg'
		},
		{
			name: 'Training',
			description:
				'At Cybergenix Security, we focus on teaching cybersecurity through engaging sessions and seminars at schools and colleges. Our goal is to equip students with vital knowledge and practical skills to stay safe online. Through interactive workshops and presentations, we help build a foundation for digital security and empower the next generation to protect their online futures.',
			imageUrl:
				'https://static.wixstatic.com/media/f88665_0a6be900a86546829a23ed2d6c0d4476~mv2.jpg/v1/crop/x_810,y_0,w_4380,h_4000/fill/w_360,h_327,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/pexels-max-fischer-5212332.jpg'
		},
		{
			name: 'Project Handeling',
			description:
				"At Cybergenix Security, we excel in project handling. Our experienced team ensures meticulous planning, efficient resource allocation, proactive problem-solving, and clear communication. We adapt swiftly to changes, guaranteeing successful project outcomes. We don't just manage projects; we orchestrate success",
			imageUrl:
				'https://static.wixstatic.com/media/f88665_b350975f9e56468d859148f343fe080b~mv2.jpg/v1/crop/x_236,y_0,w_2190,h_2000/fill/w_360,h_327,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/pexels-canvastudio-3153198_edited.jpg'
		},
		{
			name: 'Event Conduction',
			description:
				'Cybergenix Security, where we specialize in turning visions into unforgettable experiences. From meticulous planning to creative design, vendor coordination, and a focus on guest experience, we craft seamless and memorable events tailored to your unique needs. Let us elevate your next gathering into a momentous occasion.',
			imageUrl:
				'https://static.wixstatic.com/media/f88665_275bc84b3e2744f5b2a3a3a40ea5c48f~mv2.jpg/v1/crop/x_777,y_0,w_4205,h_3840/fill/w_360,h_327,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/markus-spiske-UCbMZ0S-w28-unsplash.jpg'
		}
	];
</script>

<div class="mt-10 flex flex-col space-y-9 text-center">
	<div class="bg-gradient-to-r from-black via-blue-900 to-blue-500 pt-20">
		<div class="mb-8 text-center">
			<span class="rounded-full bg-blue-500/20 p-2 px-4 text-blue-300 uppercase">Services</span>
		</div>
		<div class="mb-8 text-center text-5xl font-bold">Exclusive Services</div>
		<p>
			At Cybergenix Security, we specialize in two key areas: cybersecurity <br />
			and software development. Our cybersecurity services offer robust protection against emerging threats,
			while our software development <br />
			expertise delivers custom solutions tailored to your needs. Together, these services ensure your
			digital assets are secure and your <br />
			technology drives growth. Discover how Cybergenix Security can enhance your defenses and advance
			your business.
		</p>
		<div class="my-10 flex items-center justify-center">
			<div class="h-2 w-24 rounded-full bg-blue-500"></div>
		</div>
	</div>
</div>
<div class="container mx-auto mt-20 block">
	<div class="grid grid-cols-4 gap-16">
		{#each events as event (event.name)}
			<div class="rounded-xl bg-white/10 p-4 text-center">
				<img src={event.imageUrl} alt="img" class="mb-4 rounded-xl border-2 border-white" />
				{event.name}
				<hr class="my-4" />
				{event.description}
			</div>
		{/each}
	</div>
</div>
