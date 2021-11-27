<template>
	<div>
		<div class="main md:px-32 px-4 m-auto">
			<!-- Navbar -->
			<Navbar />
			<!-- Header Section -->
			<header class="row md:flex h-auto mb-16">
				<!-- Heading -->
				<div class="w-full md:w-1/2 md:pt-10 md:mb-8 md:pb-10">
					<h1 class="title-heading text-4xl pt-3 md:text-5xl font-extrabold md:leading-tight md:pb-3">Transfer Beda Bank Bebas Biaya Admin.</h1>
					<p class="pt-5 md:pr-16 md:leading-7 md:pt-3 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, facere? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
					<!-- Button Call to Action -->
					<button class="px-14 bg-brand py-2 bg-green-400 mt-5 rounded-md md:py-3 md:px-16 md:rounded-md md:mt-4 hover:bg-green-600">
						<p class="text-lg text-white font-bold">Daftar</p>
					</button>
				</div>
				<!-- Header Images -->
				<div class="w-full md:w-1/2 mt-10 flex justify-center items-center">
					<img src="../static/images/masking.jpg" alt="headingImages" style="height: 500px">
				</div>
			</header>
		<Slide />
		<!-- Card Service -->
		<div class="flex items-center pt-16">
				<h6 class="text-lg font-sans font-medium pb-4">
					Portfolio
				</h6>
				&nbsp;&nbsp;
				<hr width="100px" color="white" class="-mt-3" />
			</div>
			<div>
				<h3 class="text-4xl pt-1.5 pb-2 font-medium">
					Proyek yang pernah kami kerjakan.
				</h3>
				<p class="pb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi commodi quaerat ullam.</p>
			<div class="grid grid-cols-1  md:grid-cols-2 gap-4">
				<CardService />
				<CardService />
				<CardService />
				<CardService />
			</div>
		</div>
		<!-- Card Portfolio -->
		<div class="pt-16 pb-10">
			<div class="flex items-center">
				<h6 class="text-lg font-sans font-medium pb-4">
					Portfolio
				</h6>
				&nbsp;&nbsp;
				<hr width="100px" color="white" class="-mt-3" />
			</div>
			<div>
				<h3 class="text-4xl pt-1.5 pb-2 font-medium">
					Proyek yang pernah kami kerjakan.
				</h3>
				<p class="pb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi commodi quaerat ullam.</p>
				<div class="flex flex-col md:flex-row">
					<div class="mb-4 md:mb-0">
						<ButtonPrimary />
					</div>
					<div class="mb-4 md:mb-0">
						<ButtonPrimary />
					</div>
					<div class="mb-4 md:mb-0">
						<ButtonPrimary />
					</div>
					<div class="mb-4 md:mb-0">
						<ButtonPrimary />
					</div>
				</div>
			</div>
		<Portfolio />
		<!-- Benefit -->
		<div class="py-10">
			<div class="flex items-center">
				<h6 class="text-lg font-sans pt-8 font-medium pb-4">
					Keuntungan Partner Kami
				</h6>
				&nbsp;&nbsp;
				<hr width="100px" color="white" class="-mt-3" />
			</div>
			<div>
				<h3 class="text-4xl pt-1.5 pb-2 font-medium">
					Keuntungan menjadi partner kerja pada HJ Corporate.
				</h3>
				<p class="pb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi commodi quaerat ullam.</p>
			</div>
			<div class="flex md:flex-row flex-col items-center">
				<CardBenefit />
				<CardBenefit />
				<CardBenefit />
			</div>
		</div>
		<!-- About Us -->
		<div class="py-10">
			<div class="flex items-center">
				<h6 class="text-lg font-sans font-medium pb-4">Tentang Kami</h6>
				&nbsp;&nbsp;
				<hr width="100px" color="white" class="-mt-3" />
			</div>
			<div>
				<h3 class="description-about text-4xl pt-1.5 pb-8 font-medium">
					Kami selalu mengedepankan kepuasan para partner kami demi menghasilkan
					sebuah produk yang diinginkan
				</h3>
				<Glass />
				<img class="image-about pb-6" src="../static/images/maskImage.svg" alt="" />
			</div>
			<SecondGlass />
		</div>
			<Footer />
		</div>
		</div>
	</div>
</template>
<script>
import Navbar from "../components/Navbar.vue"
import SecondGlass from "~/components/SecondGlass.vue"
import Portfolio from "~/components/Portfolio.vue";
import Slide from "../components/Slide.vue"
import ButtonPrimary from "~/components/ButtonPrimary.vue";
export default {
	components: {
    Navbar,
    SecondGlass,
    Portfolio,
    Slide,
    ButtonPrimary
}
};
</script>

<style>
* {
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
  margin: 0;
  scroll-behavior: smooth;
}

.main {
  max-width: 1440px;
}

@media screen and (max-width: 768px) {
	.description-about {
		padding-bottom: 7rem;
	}
	.image-about {
		padding-bottom: 4rem;
	}
}
</style>
