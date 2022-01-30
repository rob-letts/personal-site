<template>
	<header>
		<h1>
			hi there
			<span
				><img
					class="emoji"
					src="/logo-wave.png"
					alt="a waving hand emoji"
			/></span>
		</h1>
		<p>
			i’m <span id="name" class="text-lg">Rob Letts</span> - a front-end
			web developer based in
			<span class="no-wrap">
				South London.
				<span
					><img
						class="emoji"
						src="/logo-coffee.png"
						alt="a coffee cup emoji"
				/></span>
			</span>
		</p>
	</header>
</template>

<style>
h1 {
	margin-bottom: 1.5rem;
}

header {
	text-align: center;
}

#name {
	font-weight: 700;
	background-image: var(--brandGradient);
	background-clip: text;
	color: transparent;
	position: relative;
}

#name:after {
	content: '';
	position: absolute;
	bottom: -0.5rem;
	left: 0px;
	width: 100%;
	border-style: solid;
	border-image: var(--brandGradient);
	border-image-slice: 100%;
	border-image-slice: 1;
	transform: scaleX(0);
	transition: transform 0.25s ease-out;
	transform-origin: bottom left;
}

#name:hover:after {
	transform: scaleX(1);
}
</style>
