<template>
	<div>
		<div>
			<h4 class="text-visi text-3xl font-semibold pb-4 md:pt-12 pt-20">Visi Kami</h4>
			<p class="text-misi md:pl-12 pl-0 leading-7 font-normal pb-20">
				{{visiDesc}}
			</p>
		</div>
		<div>
			<h4 class="text-misi text-3xl font-semibold pb-4">Misi Kami</h4>
			<p class="text-misi md:pl-12 pl-0 leading-7 font-normal">
				{{ misiDesc }}
			</p>
		</div>
	</div>
</template>

<script>
import axios from "axios"
export default {
	name: "VisiMisi",
	data() {
		return {
			visiDesc: null,
			misiDesc: null
		}
	},
	mounted() {
		axios.get(`https://becompro.hjcorporate.co.id/api/visi-misi`)
		.then(response => (
			this.visiDesc = response.data.data.visi_misi[0].content,
			this.misiDesc = response.data.data.visi_misi[1].content
		))
	}
};
</script>

<style>
.text-visi {
	color: #404852;
}

.text-misi {
	color: #404852;
}
</style>
