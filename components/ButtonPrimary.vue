<template lang="">
	<div>
		<button class="py-2 px-6 outline-blue rounded font-medium text-primary hover:text-white hover:bg-primary mx-1">
			{{ nameButton[0] }}
		</button>
	</div>
</template>
<script>
export default {
	name: "ButtonPrimary",
	data() {
		return {
			nameButton: ["HJ Technology", "HJ Design", "HJ Consultant", "HJ Farm"],
		};
	},
};
</script>
<style lang=""></style>
