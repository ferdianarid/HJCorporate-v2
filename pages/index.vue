<template>
	<div>
		<div class="main md:px-32 px-4 m-auto">
		<!-- Navbar -->
		<Navbar />
		<Slide />
		<!-- Card Service -->
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
			<div class="grid grid-cols-1  md:grid-cols-2 gap-4">
				<CardService />
				<CardService />
				<CardService />
				<CardService />
			</div>
		</div>
		<!-- Card Portfolio -->
		<div class="py-10">
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
		<div>
			<div class="flex items-center">
				<h6 class="text-lg font-sans font-medium pb-4">
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
				<h3 class="text-4xl pt-1.5 pb-16 font-medium">
					Kami selalu mengedepankan kepuasan para partner kami demi menghasilkan
					sebuah produk yang diinginkan
				</h3>
				<Glass />
				<img class="pb-6" src="../static/images/maskImage.svg" alt="" />
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
</style>
