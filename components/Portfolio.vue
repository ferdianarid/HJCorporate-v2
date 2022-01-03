<template>
	<div class="w-full flex flex-col md:flex-row my-14">
		<div class="w-full md:w-1/3 card-images">
			<img src="../static/images/graph.jpg" alt="graph" />
		</div>
		<div class="shadowPort md:w-2/3 md:pl-6 pl-0 pt-4 border border-white">
			<h4 class="md:w-[400px] px-0 font-semibold text-[32px] tracking-[0.3px] leading-[42px] pb-3">
				Redesign Landing Pages Kantor Pemerintahan Gubernur Jateng
			</h4>
			<p class="md:w-[400px] text-partner text-base font-regular text-[#5A5A5A] leading-[26px] tracking-[0.5px]">
				Beberapa waktu lalu kami berkesempatan untuk mengerjakan sebuah projek untuk melakukan pembaruan tampilan Landing Pages pada website
				pemerintahan gubernur Jawa Tengah...
			</p>
			<div class="flex gap-x-2 mt-4 px-2 md:pb-0 pb-3">
				<div class="bg-blue-100 text-[#1189B8] font-medium py-1 px-3 rounded-3xl">
					<p class="text-blue-700">UI/UX Design</p>
				</div>
				<div class="bg-blue-100 text-[#1189B8] font-medium py-1 px-3 rounded-3xl">
					<p class="text-blue-700">Web Development</p>
				</div>
				<div class="bg-blue-100 text-[#1189B8] font-medium py-1 px-3 rounded-3xl">
					<p class="text-blue-700">Illustration</p>
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

.shadowPort {
	box-shadow: 0px 10px 50px rgba(34, 47, 62, 0.1);
}
</style>
