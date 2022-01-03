<template>
	<div class="">
		<div class="carousel relative md:w-[900px] w-full bg-white">
			<div class="carousel-inner relative overflow-hidden md:w-[700px] w-full">
				<!--Slide 1-->
				<input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked" />
				<div class="flex flex-col md:flex-row carousel-item absolute opacity-0" style="height: auto">
					<div class="Photo h-[200px] md:h-auto md:w-1/3 w-full object-cover"></div>
					<div class="md:w-2/3 w-full md:pl-14 py-11 px-3">
						<div>
							<h1 class="md:w-[400px] px-0 font-semibold text-[32px] tracking-[0.3px] leading-[42px] pb-3">
								Redesign Landing Pages Kantor Pemerintahan Gubernur Jateng
							</h1>
							<p class="md:w-[400px] text-partner text-base font-regular text-[#5A5A5A] leading-[26px] tracking-[0.5px]">
								Beberapa waktu lalu kami berkesempatan untuk mengerjakan sebuah projek untuk melakukan pembaruan tampilan Landing Pages pada
								website pemerintahan gubernur Jawa Tengah...
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
				</div>
				<label
					for="carousel-3"
					class="
						prev
						control-1
						w-10
						h-10
						ml-2
						md:ml-10
						absolute
						cursor-pointer
						hidden
						text-3xl
						font-bold
						text-black
						hover:text-white
						rounded-full
						bg-white
						hover:bg-blue-700
						leading-tight
						text-center
						z-10
						inset-y-0
						left-0
						my-auto
					"
					>‹</label
				>
				<label
					for="carousel-2"
					class="
						next
						control-1
						w-10
						h-10
						mr-2
						md:mr-10
						absolute
						cursor-pointer
						hidden
						text-3xl
						font-bold
						text-black
						hover:text-white
						rounded-full
						bg-white
						hover:bg-blue-700
						leading-tight
						text-center
						z-10
						inset-y-0
						right-0
						my-auto
					"
					>›</label
				>

				<!--Slide 2-->
				<input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="" />
				<div class="carousel-item absolute opacity-0" style="height: 50vh">
					<div class="block h-full w-full bg-orange-500 text-blue-600 text-5xl text-center">Slide 2</div>
				</div>
				<label
					for="carousel-1"
					class="
						prev
						control-2
						w-10
						h-10
						ml-2
						md:ml-10
						absolute
						cursor-pointer
						hidden
						text-3xl
						font-bold
						text-black
						hover:text-white
						rounded-full
						bg-white
						hover:bg-blue-700
						leading-tight
						text-center
						z-10
						inset-y-0
						left-0
						my-auto
					"
					>‹</label
				>
				<label
					for="carousel-3"
					class="
						next
						control-2
						w-10
						h-10
						mr-2
						md:mr-10
						absolute
						cursor-pointer
						hidden
						text-3xl
						font-bold
						text-black
						hover:text-white
						rounded-full
						bg-white
						hover:bg-blue-700
						leading-tight
						text-center
						z-10
						inset-y-0
						right-0
						my-auto
					"
					>›</label
				>

				<!--Slide 3-->
				<input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="" />
				<div class="carousel-item absolute opacity-0" style="height: 50vh">
					<div class="block h-full w-full bg-green-500 text-white text-5xl text-center">Slide 3</div>
				</div>
				<label
					for="carousel-2"
					class="
						prev
						control-3
						w-10
						h-10
						ml-2
						md:ml-10
						absolute
						cursor-pointer
						hidden
						text-3xl
						font-bold
						text-black
						hover:text-white
						rounded-full
						bg-white
						hover:bg-blue-700
						leading-tight
						text-center
						z-10
						inset-y-0
						left-0
						my-auto
					"
					>‹</label
				>
				<label
					for="carousel-1"
					class="
						next
						control-3
						w-10
						h-10
						mr-2
						md:mr-10
						absolute
						cursor-pointer
						hidden
						text-3xl
						font-bold
						text-black
						hover:text-white
						rounded-full
						bg-white
						hover:bg-blue-700
						leading-tight
						text-center
						z-10
						inset-y-0
						right-0
						my-auto
					"
					>›</label
				>

				<!-- Add additional indicators for each slide-->
				<ol class="carousel-indicators">
					<li class="inline-block mr-3">
						<label for="carousel-1" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
					</li>
					<li class="inline-block mr-3">
						<label for="carousel-2" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
					</li>
					<li class="inline-block mr-3">
						<label for="carousel-3" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
					</li>
				</ol>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "CorouselDua",
};
</script>

<style>
.carousel-open:checked + .carousel-item {
	position: static;
	opacity: 100;
}
.carousel-item {
	-webkit-transition: opacity 0.6s ease-out;
	transition: opacity 0.6s ease-out;
}
#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
	display: block;
}
.carousel-indicators {
	list-style: none;
	margin: 0;
	padding: 0;
	position: absolute;
	bottom: 2%;
	left: 0;
	right: 0;
	text-align: center;
	z-index: 10;
}
#carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
#carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
#carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
	color: #2b6cb0; /*Set to match the Tailwind colour you want the active one to be */
}
.Photo {
	background-image: url("../static/images/graph.jpg");
	background-size: cover;
}
</style>
