<template>
	<header>
		<h1>
			hi there
			<img class="emoji" src="/logo-wave.png" alt="a waving hand emoji" />
		</h1>
		<p>
			i’m <a class="name" href="https://github.com/robertletts">Rob Letts</a> - a front-end web developer based in
			<span class="no-wrap">
				South London.
				<img class="emoji" src="/logo-coffee.png" alt="a coffee cup emoji" />
			</span>
		</p>
	</header>
</template>

<style>
h1 {
	margin-bottom: 1rem;
}

header {
	text-align: center;
	margin-bottom: 3.5rem;
}

.name {
	font-weight: 700;
	font-size: 1.75em;
	background-image: var(--brandGradient);
	background-clip: text;
	color: transparent;
	position: relative;
}

.name:after {
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

.name:hover:after {
	transform: scaleX(1);
}
</style>
