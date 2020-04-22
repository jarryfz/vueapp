<template>
	<div data-page="home">
		
	</div>
</template>

<script>
export default {
	data () {
		return {}
	},
	created() {
		this.mui.plusReady(function () {
		  console.log(this.plus.webview.currentWebview())
		})
	},
	methods: {
		initApp() {
			
		},
		pullfresh() {
			
		}
	}
}
</script>

<style>
</style>
