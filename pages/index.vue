<template>
	<div>
		<div class="main md:px-32 px-4 m-auto">
			<!-- Navbar -->
			<Navbar />
			<div class="flex items-center pt-10 md:pt-16">
				<h6 class="text-lg font-sans font-medium pb-4">
					HJ Corporate
				</h6>
			&nbsp;&nbsp;
			<hr width="40px" color="white" class="-mt-3" />
			</div>
			<!-- Header Section -->
			<header class="row md:flex h-auto mb-16">
				<!-- Heading -->
				<div class="w-full md:w-1/2 md:mb-8 mb-12 md:pb-10">
					<h1 class="title-heading text-4xl pt-2 md:text-5xl font-medium md:leading-tight md:pb-2">Membantu mengubah produk menjadi luar biasa.</h1>
					<p class="pt-5 md:pr-16 md:leading-7 pb-8 md:pt-3 text-gray-600">Kami adalah perusahaan yang berfokus pada bidang teknologi, desain, konsultan, dan peternakan. Kami selalu memperhatikan setiap detail kecil dari produk yang kami kerjakan.</p>
					<!-- Button Call to Action -->
					<ButtonCallAction />
				</div>
				<!-- Header Images -->
				<div class="w-full md:w-1/2 flex justify-center items-center relative">
					<img src="../static/images/masking.jpg" alt="headingImages" style="height: 500px">
					<div class="first-glass-card image-head glass-card flex ml-80 h-28 absolute rounded-lg">
						<div class="flex items-center">
							<img class="pl-7" src="../static/images/iconPeople.svg" alt="" />
						</div>
						<div class="flex flex-col justify-start pl-4">
							<h3 class="font-semibold text-3xl pt-6">50 +</h3>
							<h3 class="font-medium">Loyal Business Partner</h3>
						</div>
					</div>
					<div class="second-glass-card second-image-head glass-card flex ml-0 h-28 absolute rounded-lg">
						<div class="flex items-center">
							<img class="pl-7" src="../static/images/iconGraph.svg" alt="" />
						</div>
						<div class="flex flex-col justify-start pl-4">
							<h3 class="font-semibold text-3xl pt-6">100 +</h3>
							<h3 class="font-medium">Proyek terselesaikan</h3>
						</div>
					</div>
				</div>
			</header>
		<Slide />
		<!-- Section Services -->
		<div class="flex items-center pt-16">
				<h6 class="text-lg font-sans font-medium pb-4">
					Bisnis Kami
				</h6>
				&nbsp;&nbsp;
				<hr width="40px" color="white" class="-mt-3" />
			</div>
			<div>
				<h3 class="text-4xl pt-1.5 pb-2 font-medium">
					Bidang bisnis yang kami tawarkan
				</h3>
				<p class="pb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi commodi quaerat ullam.</p>
			<div class="grid grid-cols-1  md:grid-cols-2 gap-4">
				<div>
					<div class="child text-left pb-14">
						<div class="bg-white p-12 md:p-14 border-techColor border-t-4">
							<img class="pb-8 h-28" src="../static/images/technology.png" alt="hjtech" />
							<h4 class="pb-8 text-3xl font-medium">HJ<br>Technology</h4>
							<p class="pb-8">Menyediakan jasa seputar techonology seperti: Web development, Mobile Apps Development, WordPress.</p>
						</div>
					</div>
				</div>
				<div>
					<div class="child text-left pb-14">
						<div class="bg-white p-12 md:p-14 border-red-600 border-t-4">
							<img class="pb-8 h-28" src="../static/images/design.png" alt="hjdesign" />
							<h4 class="pb-8 text-3xl font-medium">HJ<br>Design</h4>
							<p class="pb-8">Menyediakan jasa seputar design seperti: Landing Pages, User Flow, Wireframing, Prototyping, Mobile App.</p>
						</div>
					</div>
				</div>
				<div>
					<div class="child text-left pb-14">
						<div class="bg-white p-12 md:p-14 border-consultantColor border-t-4">
							<img class="pb-8 h-28" src="../static/images/consultant.png" alt="hjconsultant" />
							<h4 class="pb-8 text-3xl font-medium">HJ<br>Consultant</h4>
							<p class="pb-8">Partner akan dimudahkan dengan sistem komunikasi kami yang tersedia untuk kapan saja.</p>
						</div>
					</div>
				</div>
				<div>
					<div class="child text-left pb-14">
						<div class="bg-white p-12 md:p-14 border-farmColor border-t-4">
							<img class="pb-8 h-28" src="../static/images/farm.png" alt="hjfarm" />
							<h4 class="pb-8 text-3xl font-medium">HJ<br>Farm</h4>
							<p class="pb-8">Partner akan dimudahkan dengan sistem komunikasi kami yang tersedia untuk kapan saja.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Card Portfolio -->
		<div class="pt-16 pb-10">
			<div class="flex items-center">
				<h6 class="text-lg font-sans font-medium pb-4">
					Portfolio
				</h6>
				&nbsp;&nbsp;
				<hr width="40px" color="white" class="-mt-3" />
			</div>
			<div>
				<h3 class="text-4xl pt-1.5 pb-2 font-medium">
					Proyek yang pernah kami kerjakan.
				</h3>
				<p class="pb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi commodi quaerat ullam.</p>
				<div class="flex flex-col md:flex-row">
					<div class="mb-4 md:mb-0">
						<button class="py-2 px-6 outline-blue rounded font-medium text-primary hover:text-white  hover:bg-primary mx-1">
							{{ nameButton[0] }}
						</button>
					</div>
					<div class="mb-4 md:mb-0">
						<button class="py-2 px-6 outline-blue rounded font-medium text-primary hover:text-white  hover:bg-primary mx-1">
							{{ nameButton[1] }}
						</button>
					</div>
					<div class="mb-4 md:mb-0">
						<button class="py-2 px-6 outline-blue rounded font-medium text-primary hover:text-white  hover:bg-primary mx-1">
							{{ nameButton[2] }}
						</button>
					</div>
					<div class="mb-4 md:mb-0">
						<button class="py-2 px-6 outline-blue rounded font-medium text-primary hover:text-white  hover:bg-primary mx-1">
							{{ nameButton[3] }}
						</button>
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
				<hr width="40px" color="white" class="-mt-3" />
			</div>
			<div>
				<h3 class="text-4xl pt-1.5 pb-2 font-medium">
					Keuntungan menjadi partner kerja pada HJ Corporate.
				</h3>
				<p class="pb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi commodi quaerat ullam.</p>
			</div>
			<div class="flex md:flex-row flex-col items-center">
				<!-- First Card -->
				<div class="w-auto h-auto tracking-wide mb-14 border border-black-300 mx-1 rounded-lg relative">
					<div class="small-banner w-1 h-20 bg-blue-600 absolute rounded-tl-md"></div>
					<h5 class="text-2xl font-semibold pl-6 pt-6 pr-6 pb-2">
					Komunikasi yang jelas dan mudah.
					</h5>
					<p class="text-base font-regular p-6">
					Partner akan dimudahkan dengan sistem komunikasi kami yang tersedia untuk kapan saja.
					</p>
				</div>
				<!-- Second Card -->
				<div class="w-auto h-auto tracking-wide mb-14 border border-black-300 mx-1 rounded-lg relative">
					<div class="small-banner w-1 h-20 bg-blue-600 absolute rounded-tl-md"></div>
					<h5 class="text-2xl font-semibold pl-6 pt-6 pr-6 pb-2">
					Proyek sesuai permintaan partner.
					</h5>
					<p class="text-base font-regular p-6">
					Partner dapat mengajukan konsepnya pada projek yang diajukan sesuai dengan keinginannya.
					</p>
				</div>
				<!-- Third Card -->
				<div class="w-auto h-auto tracking-wide mb-14 border border-black-300 mx-1 rounded-lg relative">
					<div class="small-banner w-1 h-20 bg-blue-600 absolute rounded-tl-md"></div>
					<h5 class="text-2xl font-semibold pl-6 pt-6 pr-6 pb-2">
					Ketepatan dalam waktu pengerjaan
					</h5>
					<p class="text-base font-regular p-6">
					Projek yang diberikan partner akan dapat diselesaikan tepat waktu sesuai waktu yang diinginkan partner
					</p>
				</div>
			</div>
		</div>
		<!-- About Us -->
		<div class="py-10 relative">
			<div class="flex items-center">
				<h6 class="text-lg font-sans font-medium pb-4">Tentang Kami</h6>
				&nbsp;&nbsp;
				<hr width="40px" color="white" class="-mt-3" />
			</div>
			<div class="relative">
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
import ButtonCallAction from "../components/ButtonCallAction.vue"
export default {
	components: {
		Navbar,
		SecondGlass,
		Portfolio,
		Slide,
		ButtonPrimary,
		ButtonCallAction
	},
	data() {
              return {
                     nameButton: [
                            "HJ Technology",
                            "HJ Design",
                            "HJ Consultant",
                            "HJ Farm"
                     ]
              }
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

.image-head {
	margin-top: -340px;
}

.second-image-head {
	margin-top: 340px;
}

.first-glass-card {
	left: -8rem;
	margin-top: -342px;
	background: rgba(255, 255, 255, 0.7);
	box-shadow: 0px 30px 60px rgba(32, 56, 85, 0.15);
	backdrop-filter: blur(16px);
	z-index: 2;
	width: 20rem;
}

@media screen and (max-width: 768px) {
	.description-about {
		padding-bottom: 7rem;
	}
	.image-about {
		padding-bottom: 4rem;
	}
	.first-glass-card {
		margin-top: -382px;
		left: -18rem;
	}
	.image-head {
		margin-top: -340px;
		margin-left: 86%;
	}
	.second-image-head {
		margin-top: 480px;
		margin-left: 86%;
	}
}
</style>
