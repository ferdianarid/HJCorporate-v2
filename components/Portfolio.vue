<template>
	<div class="portfolio flex my-14">
		<div class="card-images">
			<img src="../static/images/graph.jpg" alt="graph">
		</div>
		<div class="p-6">
			<h4 class="font-semibold text-4xl tracking-wide pb-4">
				Redesign Landing Pages Kantor Pemerintahan Gubernur Jateng
			</h4>
			<p class="text-partner text-base tracking-wide font-regular">
				Beberapa waktu lalu kami berkesempatan untuk mengerjakan sebuah projek
				untuk melakukan pembaruan tampilan Landing Pages pada website
				pemerintaha
			</p>
			<div class="flex gap-x-2 mt-4">
				<div
					class="
						bg-white
						text-gray-800
						font-semibold
						py-1
						px-3
						rounded-3xl
					"
				>
					UI/UX Design
				</div>
				<div
					class="
						bg-white
						text-gray-800
						font-semibold
						py-1
						px-3
						rounded-3xl
					"
				>
					Web Development
				</div>
				<div
					class="
						bg-white
						text-gray-800
						font-semibold
						py-1
						px-3
						rounded-3xl
					"
				>
					Illustration
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
.portfolio {
	width: 1097px;
}
.portfolio .card-images {
	width: 600px;
	background-color: chartreuse;
}

.portfolio .card-images img {
	background-size: cover;
}
</style>
