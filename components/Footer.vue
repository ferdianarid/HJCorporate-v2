<template>
	<div class="py-10">
		<div class="row flex md:flex-row flex-col gap-x-16">
			<div class="col md:w-1/2 w-full text-left">
				<div class="flex items-center">
					<h6 class='text-lg font-sans font-medium pb-4'>Kontak Kami</h6>
						&nbsp;&nbsp;
					<hr width='100px' color='white' class='-mt-3' />
				</div>
				<h3 class="text-4xl font-medium pt-1.5 pb-6">Siap berkolaborasi bersama kami?</h3>
       			<p class="text-base pb-10">Jika anda sudah memiliki ide dan konsep mengenai projek apa yang akan dikerjakan maka, dapat mengisikan formulir</p>
				<CardService />
			</div>
			<div class="col w-full md:w-1/2">
				<h6 class="text-lg text-black font-semibold text-left ml-0 md:-ml-2">Bisnis yang diinginkan<span class="text-red-500">*</span></h6>
				<div class="grid grid-cols-2 gap-4 pt-6 md:-ml-2 ml-0">
					<button class="py-2 px-6 outline-blue rounded font-medium text-primary hover:text-white  hover:bg-primary mx-1">
						{{ nameButton[0] }}
					</button>
					<button class="py-2 px-6 outline-blue rounded font-medium text-primary hover:text-white  hover:bg-primary mx-1">
						{{ nameButton[1] }}
					</button>
					<button class="py-2 px-6 outline-blue rounded font-medium text-primary hover:text-white  hover:bg-primary mx-1">
						{{ nameButton[2] }}
					</button>
					<button class="py-2 px-6 outline-blue rounded font-medium text-primary hover:text-white  hover:bg-primary mx-1">
						{{ nameButton[3] }}
					</button>
				</div>
				<form class="w-full max-w-lg pt-8 text-left">
					<div class="flex flex-wrap -mx-3 mb-6">
						<div class="w-full md:w-1/2 mx-2 md:mx-0 px-0 mb-6 md:mb-0">
							<label class="block tracking-wide text-gray-700 text-lg font-medium pb-2" for="grid-name">Nama<span class="text-red-500">*</span> </label>
							<input class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" type="text" placeholder="" />
						</div>
						<div class="w-full md:w-1/2 mx-2 md:mx-0">
						<div class="ml-0 md:ml-2">
							<label class="block tracking-wide text-gray-700 text-lg font-medium pb-2" for="grid-number">No.Telepon/WhatsApp<span class="text-red-500">*</span></label>
							<input
								class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-number"
								type="text"
								placeholder=""
							/>
						</div>
						</div>
					</div>
					<div class="flex flex-wrap -mx-3 mb-6">
						<div class="w-full md:w-1/2 px-0 mx-2 md:mx-0 mb-6 md:mb-0">
							<label class="block tracking-wide text-gray-700 text-lg font-medium pb-2" for="grid-email">Email Address<span class="text-red-500">*</span></label>
							<input class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="text" placeholder="" />
						</div>
						<div class="w-full md:w-1/2">
						<div class=" mx-2 md:mx-0 ml-2 md:ml-2">
							<label class="block tracking-wide text-gray-700 text-lg font-medium pb-2" for="grid-document"> Upload Dokumen</label>
							<input
								class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-2.5 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-document"
								type="file"
								placeholder=""
							/>
							</div>
						</div>
					</div>
					<div class="flex flex-wrap -mx-3 pb-6 mb-20">
						<div class="w-full mx-2 md:mx-0">
							<label class="block tracking-wide text-gray-700 text-lg font-medium pb-2" for="grid-detail"> Detail Projek<span class="text-red-500">*</span></label>
							<textarea class="bg-gray-100 text-gray-700 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500" id="" name="" rows="7"></textarea>
							<button class="py-2 px-6 rounded font-medium text-white hover:text-white  bg-primary mt-3">Submit</button>
						</div>
					</div>
				</form>
			</div>
		</div>
		<hr class="-mt-10 mb-12" />
		<div class="flex flex-col md:flex-row items-center justify-center">
			<div class="col md:mb-0 mb-4 w-full md:w-1/3 text-center md:text-left font-medium">
				<p>&copy;2021 HJ Corporate</p>
			</div>
			<div class="col md:mb-0 mb-4 w-full md:w-1/3  text-center md:text-left font-semibold">
				<p>Sinduharjo, Kab. Sleman, Yogyakarta</p>
			</div>
			<div class="col md:mb-0 mb-4 w-full md:w-1/3 gap-x-4 flex justify-center  text-center md:text-left md:justify-end">
				<a href="">
					<img src="../static/images/mail.svg" alt="" />
				</a>
				<a href="">
					<img src="../static/images/linkedIn.svg" alt="" />
				</a>
				<a href="">
					<img src="../static/images/facebook.svg" alt="" />
				</a>
				<a href="">
					<img src="../static/images/instagram.svg" alt="" />
				</a>
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
                     nameButton: [
                            "HJ Technology",
                            "HJ Design",
                            "HJ Consultant",
                            "HJ Farm"
                     ]
              }
       }
}
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