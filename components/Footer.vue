<template>
	<div class="md:pt-10 pt-10 md:pb-0 pb-10 w-full max-w-[1440px] mx-auto">
		<div class="row flex md:flex-row flex-col gap-x-16">
			<div class="col md:w-1/2 w-full text-left">
				<div class="flex items-center">
					<h6 class="text-lg text-[#187C79] font-sans font-medium pb-4">Kontak Kami</h6>
					&nbsp;&nbsp;
					<hr width="40px" color="white" class="-mt-3" />
				</div>

				<CardService />
			</div>
			<div class="col w-full md:w-1/2">
				<h6 class="text-lg text-black font-semibold text-left ml-0 md:-ml-2">Bisnis yang diinginkan<span class="text-red-500">*</span></h6>
				<div class="grid grid-cols-2 gap-4 pt-6 md:-ml-2 ml-0">
					<button class="py-2 px-6 outline-blue rounded font-medium text-primary hover:text-white hover:bg-primary mx-1">
						{{ nameButton[0] }}
					</button>
					<button class="py-2 px-6 outline-blue rounded font-medium text-primary hover:text-white hover:bg-primary mx-1">
						{{ nameButton[1] }}
					</button>
					<button class="py-2 px-6 outline-blue rounded font-medium text-primary hover:text-white hover:bg-primary mx-1">
						{{ nameButton[2] }}
					</button>
					<button class="py-2 px-6 outline-blue rounded font-medium text-primary hover:text-white hover:bg-primary mx-1">
						{{ nameButton[3] }}
					</button>
				</div>
				<form class="w-full max-w-lg pt-8 text-left">
					<div class="flex flex-wrap -mx-3 mb-6">
						<div class="w-full md:w-1/2 mx-2 md:mx-0 px-0 mb-6 md:mb-0">
							<label class="block tracking-wide text-gray-700 text-lg font-medium pb-2" for="grid-name"
								>Nama<span class="text-red-500">*</span>
							</label>
							<input
								class="
									appearance-none
									block
									w-full
									bg-gray-100
									text-gray-700
									border
									rounded
									py-3
									px-4
									mb-3
									leading-tight
									focus:outline-none focus:bg-white
								"
								id="grid-name"
								type="text"
								placeholder=""
							/>
						</div>
						<div class="w-full md:w-1/2 mx-2 md:mx-0">
							<div class="ml-0 md:ml-2">
								<label class="block tracking-wide text-gray-700 text-lg font-medium pb-2" for="grid-number"
									>No.Telepon/WhatsApp<span class="text-red-500">*</span></label
								>
								<input
									class="
										appearance-none
										block
										w-full
										bg-gray-100
										text-gray-700
										border border-gray-200
										rounded
										py-3
										px-4
										mb-3
										leading-tight
										focus:outline-none focus:bg-white focus:border-gray-500
									"
									id="grid-number"
									type="text"
									placeholder=""
								/>
							</div>
						</div>
					</div>
					<div class="flex flex-wrap -mx-3 mb-6">
						<div class="w-full md:w-1/2 px-0 mx-2 md:mx-0 mb-6 md:mb-0">
							<label class="block tracking-wide text-gray-700 text-lg font-medium pb-2" for="grid-email"
								>Email Address<span class="text-red-500">*</span></label
							>
							<input
								class="
									appearance-none
									block
									w-full
									bg-gray-100
									text-gray-700
									border
									rounded
									py-3
									px-4
									mb-3
									leading-tight
									focus:outline-none focus:bg-white
								"
								id="grid-email"
								type="text"
								placeholder=""
							/>
						</div>
						<div class="w-full md:w-1/2">
							<div class="mx-2 md:mx-0 ml-2 md:ml-2">
								<label class="block tracking-wide text-gray-700 text-lg font-medium pb-2" for="grid-document"> Upload Dokumen</label>
								<input
									class="
										appearance-none
										block
										w-full
										bg-gray-100
										text-gray-700
										border border-gray-200
										rounded
										py-2.5
										px-4
										leading-tight
										focus:outline-none focus:bg-white focus:border-gray-500
									"
									id="grid-document"
									type="file"
									placeholder=""
								/>
							</div>
						</div>
					</div>
					<div class="flex flex-wrap -mx-3 pb-6 mb-20">
						<div class="w-full mx-2 md:mx-0">
							<label class="block tracking-wide text-gray-700 text-lg font-medium pb-2" for="grid-detail">
								Detail Projek<span class="text-red-500">*</span></label
							>
							<textarea
								class="p-4 bg-gray-100 text-gray-700 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
								id=""
								name=""
								rows="7"
							></textarea>
							<button class="py-2 px-6 rounded font-medium text-white bg-[#187C79] hover:bg-[#115A58] mt-3">Kirim Pesan</button>
						</div>
					</div>
				</form>
			</div>
		</div>
		<hr class="-mt-10 mb-12" />
		<div>
			<div class="flex md:flex-row flex-col-reverse md:px-0 px-6">
				<div class="col md:w-1/3 w-full md:pb-0 text-left font-medium">
					<p>&copy;2021 HJ Corporate</p>
				</div>
				<div class="col md:w-1/3 md:pb-0 pb-6 w-full text-left font-semibold">
					<p>Sinduharjo, Kab. Sleman, Yogyakarta</p>
				</div>
				<div class="col md:w-1/3 w-full md:gap-x-4 gap-x-6 md:pb-0 pb-6 flex md:justify-end justify-start md:mb-20">
					<a href="">
						<img class="hover:text-black hover:opacity-[100%] opacity-[30%] scale-75" src="../static/tentang/emailFoot.png" alt="" />
					</a>
					<a href="">
						<img class="hover:text-black hover:opacity-[100%] opacity-[30%]" src="../static/tentang/linkeFoot.png" alt="" />
					</a>
					<a href="">
						<img class="hover:text-black hover:opacity-[100%] opacity-[30%]" src="../static/tentang/fbFoot.png" alt="" />
					</a>
					<a href="">
						<img class="hover:text-black hover:opacity-[100%] opacity-[30%]" src="../static/tentang/instaFoot.png" alt="" />
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CardService from "./CardService.vue";
export default {
	name: "Footer",
	components: { CardService },
	data() {
		return {
			nameButton: ["HJ Technology", "HJ Design", "HJ Consultant", "HJ Farm"],
		};
	},
};
</script>
<style>
.child {
	filter: drop-shadow(0px 10px 50px rgba(34, 47, 62, 0.1));
}
.button-footer {
	border-color: #187c79;
	color: #187c79;
}
textarea {
	width: 100%;
}
</style>
