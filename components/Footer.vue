<template>
	<div class="container py-14">
		<div class="row flex gap-x-16">
			<div class="col w-1/2 text-left">
				<div class="flex items-center">
					<h6 class='text-lg font-sans font-medium pb-4'>Kontak Kami</h6>
						&nbsp;&nbsp;
					<hr width='100px' color='white' class='-mt-3' />
				</div>
				<h3 class="text-5xl font-medium pt-1.5 pb-6">Siap berkolaborasi bersama kami?</h3>
				<p class="text-base pb-10">Jika anda sudah memiliki ide dan konsep mengenai projek apa yang akan dikerjakan maka, dapat mengisikan formulir</p>
				<div class="child text-left pb-14">
					<div class="bg-white p-14 border-black border-t-4">
						<img class="pb-8" src="../static/images/phone.svg" alt="" />
						<h4 class="pb-8 text-4xl">Belum memiliki ide untuk projek anda?</h4>
						<button class="button-footer bg-transparent text-blue-700 font-semibold hover:text-white hover:border-green-400 hover:bg-green-400 py-3 px-10 border rounded">Jadwalkan Meeting</button>
					</div>
				</div>
			</div>
			<div class="col w-1/2">
				<h6 class="text-lg text-black font-semibold text-left">Bisnis yang diinginkan<span class="text-red-500">*</span></h6>
				<div class="flex gap-x-2 pt-6">
					<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 py-2 border border-blue-500 hover:border-transparent rounded">HJ Design</button>
					<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 py-2 border border-blue-500 hover:border-transparent rounded">HJ Technology</button>
					<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 py-2 border border-blue-500 hover:border-transparent rounded">HJ Consultant</button>
				</div>
				<form class="w-full max-w-lg pt-8 text-left">
					<div class="flex flex-wrap -mx-3 mb-6">
						<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label class="block tracking-wide text-gray-700 text-lg font-bold pb-6" for="grid-name">Nama<span class="text-red-500">*</span> </label>
							<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" type="text" placeholder="" />
						</div>
						<div class="w-full md:w-1/2 px-3">
							<label class="block tracking-wide text-gray-700 text-lg font-bold pb-6" for="grid-number">No.Telepon/WhatsApp<span class="text-red-500">*</span></label>
							<input
								class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-number"
								type="text"
								placeholder=""
							/>
						</div>
					</div>
					<div class="flex flex-wrap -mx-3 mb-6">
						<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label class="block tracking-wide text-gray-700 text-lg font-bold pb-6" for="grid-email">Email<span class="text-red-500">*</span></label>
							<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="text" placeholder="" />
						</div>
						<div class="w-full md:w-1/2 px-3">
							<label class="block tracking-wide text-gray-700 text-lg font-bold pb-6" for="grid-document"> Upload Dokumen</label>
							<input
								class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-document"
								type="file"
								placeholder=""
							/>
						</div>
					</div>
					<div class="flex flex-wrap -mx-3 pb-6 mb-20">
						<div class="w-full">
							<label class="block tracking-wide text-gray-700 text-lg font-bold pb-6" for="grid-detail"> Detail Projek<span class="text-red-500">*</span></label>
							<textarea class="bg-gray-200 text-gray-700 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500" id="" name="" rows="7" cols="25"></textarea>
							<button class="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-9 mt-8 rounded">Kirim Pesan</button>
						</div>
					</div>
				</form>
			</div>
		</div>
		<hr class="-mt-10 mb-12" />
		<div class="flex">
			<div class="col w-1/3 text-left font-medium">
				<p>&copy;2021 HJ Corporate</p>
			</div>
			<div class="col w-1/3 text-left font-semibold">
				<p>Sinduharjo, Kab. Sleman, Yogyakarta</p>
			</div>
			<div class="col w-1/3 gap-x-4 flex justify-end">
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
export default {
	name: 'Footer'
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
</style>