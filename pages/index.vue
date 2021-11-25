<template>
	<div>
		<div class="main md:px-32 px-4 m-auto">
			<!-- Navbar -->
			<Navbar />
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
					<h3 class="text-4xl pt-1.5 pb-16 font-medium">
						Keuntungan menjadi partner <br />
						kerja pada HJ Corporate
					</h3>
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
<<<<<<< HEAD
=======
=======
  <div class="main px-32">
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
        <h3 class="text-5xl pt-1.5 pb-16 tracking-wide">
          Keuntungan menjadi partner <br />
          kerja pada HJ Corporate
        </h3>
      </div>
      <CardBenefit />
    </div>
    <!-- About Us -->
    <div class="flex items-center">
      <h6 class="text-lg font-sans font-medium pb-4">Tentang Kami</h6>
      &nbsp;&nbsp;
      <hr width="100px" color="white" class="-mt-3" />
    </div>
    <div>
      <h3 class="text-5xl pt-1.5 pb-16 tracking-wide">
        Kami selalu mengedepankan kepuasan para partner kami demi menghasilkan
        sebuah produk yang diinginkan
      </h3>
      <Twoacc />
      <img class="pb-6" src="../static/images/maskImage.svg" alt="" />
    </div>
    <Accessories />
    <Footer />
  </div>
>>>>>>> d66d8a3bcfff389f2ff9312a91dccfbf563e3341
>>>>>>> 7851891fd93040b91062e829a31a8ff635f57ef8
</template>

<script>
import Navbar from "../components/Navbar.vue"
import SecondGlass from "~/components/SecondGlass.vue";
export default {
	components: {
		Navbar,
		SecondGlass
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
