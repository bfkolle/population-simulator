<template>
    <div>
        <ul>
            <li v-for="country in countries" :key="country.name">
				<div>{{ country }}</div>
			</li>
        </ul>
        <button @click="$fetch">Refresh</button>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				countries: []
			}
		},
		async fetch() {
			this.countries = await this.$http.$get("/tick")
			this.countries = await this.$http.$get("/country?name=greece")
		}
	}
</script>