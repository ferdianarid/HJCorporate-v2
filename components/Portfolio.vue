<template>
	<div class="w-full flex flex-col md:flex-row my-14">
		<div class="w-full md:w-1/3 card-images">
			<img src="../static/images/graph.jpg" alt="graph">
		</div>
		<div class="w-full md:w-2/3 md:pl-6 pl-0 pt-4">
			<h4 class="w-full px-0 font-semibold text-4xl tracking-wide pb-4">
				Redesign Landing Pages Kantor Pemerintahan Gubernur Jateng
			</h4>
			<p class="text-partner text-base tracking-wide font-regular">
				Beberapa waktu lalu kami berkesempatan untuk mengerjakan sebuah projek
				untuk melakukan pembaruan tampilan Landing Pages pada website
				pemerintahan
			</p>
			<div class="flex gap-x-2 mt-4 px-2">
				<div class="bg-blue-100 text-gray-800 font-semibold py-1 px-3 rounded-3xl">
					<p class="text-blue-700">Design</p>
				</div>
				<div class="bg-blue-100 text-gray-800 font-semibold py-1 px-3 rounded-3xl">
					<p class="text-blue-700">Development</p>
				</div>
				<div class="bg-blue-100 text-gray-800 font-semibold py-1 px-3 rounded-3xl">
					<p class="text-blue-700">Illustrations</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Portfolio",
};
</script>

<style>
.portfolio .card-images {
	background-color: chartreuse;
	width: 100%;
}

@media screen and(max-width: 768px) {
	.portfolio .card-images img {
		width: 100%;
	}
}
</style>
