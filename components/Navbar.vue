<template>
	<div>
		<div class="font-sans antialiased" id="app">
			<!-- Class Navbar -->
			<nav class="navbar flex items-center justify-between flex-wrap bg-transparent py-6 relative">
				<!-- Brand and Logos -->
				<div class="flex items-center flex-no-shrink">
					<h1 class="font-extrabold">HJ Corporate</h1>
				</div>
				<!-- Hamburger Component -->
				<div class="block sm:hidden">
					<button
						@click="toggle"
						class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"
					>
						<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<title>Menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
						</svg>
					</button>
				</div>
				<!-- Hamburger Action -->
				<div :class="open ? 'block' : 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
					<!-- Navigation  Links-->
					<div class="text-sm sm:flex-grow sm:text-right">
						<div class="mr-40">
							<a href="/" class="no-underline block mt-4 sm:mx-3 sm:inline-block sm:mt-0 text-teal-lighter hover:text-[#187C79] mr-4">
								Beranda
							</a>
							<a href="/portfolio" class="no-underline block mt-4 sm:mx-3 sm:inline-block sm:mt-0 text-teal-lighter hover:text-[#187C79]">
								Portofolio
							</a>
							<a href="/tentang" class="no-underline block mt-4 sm:mx-3 sm:inline-block sm:mt-0 text-teal-lighter hover:text-[#187C79]">
								Tentang Kami
							</a>
							<a href="/contact" class="kontak no-underline block mt-4 sm:mx-3 sm:inline-block sm:mt-0 text-teal-lighter"> Kontak Kami </a>
						</div>
						<a
							href="/contact"
							class="tentang absolute no-underline block pt-4 sm:px-6 sm:inline-block sm:pt-0 text-teal-lighter text-white pr-4"
						>
							<img src="../static/images/star.png" alt="star" class="absolute top-0 right-0" />
							<h1 class="text-base leading-5 text-left">
								Siap <br />
								berkolaborasi?
							</h1>
							<p class="p-card text-sm pt-3 flex text-left text-yellow-100">
								Kontak kami
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pl-1" viewBox="0 0 20 20" fill="currentColor">
									<path
										fill-rule="evenodd"
										d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/>
								</svg>
							</p>
						</a>
					</div>
				</div>
			</nav>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			open: false,
		};
	},
	methods: {
		toggle() {
			this.open = !this.open;
		},
	},
};
</script>
<style>
.tentang {
	height: 9rem;
	top: 0;
	right: 0;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	background-color: #187c79;
}
.tentang h1 {
	padding-top: 3.5rem;
}
.tentang img {
	width: 4.2rem;
}
.kontak {
	display: none;
}
@media screen and (max-width: 768px) {
	.tentang {
		display: none;
	}
	.kontak {
		display: block;
	}
}
</style>
