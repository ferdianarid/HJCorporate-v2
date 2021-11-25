<template>
	<div>
		<div class="main md:px-32 px-4">
			<Navbar />
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
					<Twoacc />
					<img class="pb-6" src="../static/images/maskImage.svg" alt="" />
			</div>
			<Accessories />
			<Footer />
		</div>
	</div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
export default {
	components: {
		Navbar
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
