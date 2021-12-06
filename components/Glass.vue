<template>
	<div class="glass-card w-80 flex ml-80 h-28 absolute rounded-lg">
		<div class="flex items-center">
			<img class="pl-7" src="../static/images/iconGraph.svg" alt="" />
		</div>
		<div class="flex flex-col justify-start pl-4">
			<h3 class="font-semibold text-3xl pt-6">10 +</h3>
			<h3 class="font-medium">Tahun Berpengalaman</h3>
		</div>
	</div>
</template>

<script>
export default {
	nama: "Glass",
};
</script>

<style>
.glass-card {
	margin-top: 3rem;
	left: 18rem;
	background: rgba(255, 255, 255, 0.7);
	box-shadow: 0px 30px 60px rgba(32, 56, 85, 0.15);
	backdrop-filter: blur(16px);
	z-index: 2;
}

@media screen and (max-width: 768px) {
	.glass-card {
		left: -18rem;
		margin-top: -92px;
	}
}
</style>
