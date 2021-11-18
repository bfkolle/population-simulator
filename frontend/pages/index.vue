<template>
	<div>
		<div>{{ post }}</div>
		<button @click="refresh">Refresh</button>
	</div>
</template>

<script>
	export default {
		async asyncData(context) {
			const post = await context.app.$http.$get("http://localhost:8080/all")
			return { post }
		},
		methods: {
			refresh() {
				this.$nuxt.refresh()
			}
		}
	}
</script>

