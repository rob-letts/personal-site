<template>
	<header>
		<h1>hi there 👋</h1>
		<p>
			i’m <span id="name" class="text-lg">rob letts</span> - a front-end
			web developer based in south london.
			<span class="text-lg">☕️</span>
		</p>
	</header>
</template>

<style>
header {
	margin-bottom: 2rem;
}

#name {
	font-weight: 900px;
	background-image: linear-gradient(to right, coral, deepskyblue);
	background-clip: text;
	color: transparent;
	position: relative;
	cursor: pointer;
}

#name:after {
	content: '';
	position: absolute;
	bottom: -0.5rem;
	left: 0px;
	width: 100%;
	border-style: solid;
	border-image: linear-gradient(to right, coral, deepskyblue);
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
