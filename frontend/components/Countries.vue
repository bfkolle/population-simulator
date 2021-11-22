<!-- Design originally from https://ctnicholas.medium.com/create-a-searchable-dropdown-list-in-vue-js-139dd064e845 -->

<template>
	<div class="dropdown">
		<input v-if="Object.keys(selectedCountry).length === 0" ref = "dropdowninput" v-model.trim="inputValue" class="dropdown-input" type="text" placeholder="Search countries" />
		<div v-else @click="resetCountry" class="dropdown-selected">
			{{ selectedCountry.name }}
		</div>
		<div v-show="inputValue" class="dropdown-list">
			<div v-show="countryVisible(country)" v-for="country in countries.payload" :key="country.name"  @click="selectCountry(country)" class="dropdown-item">
				{{ country.name }}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				countries: [],
				inputValue: '',
				selectedCountry: {}
			}
		},
		async fetch() {
			this.countries = await this.$http.$get("/all")
		},
		methods: {
			countryVisible(country) {
				let currentName = country.name.toLowerCase()
				let currentInput = this.inputValue.toLowerCase()
				return currentName.startsWith(currentInput)
			},
			selectCountry(country) {
				this.selectedCountry = country
				this.inputValue = ""
				this.$emit('on-country-selected', country)
			},
			resetCountry() {
				this.selectedCountry = {}
				this.$nextTick( () => this.$refs.dropdowninput.focus() )
				this.$emit('on-country-reset')
			}
		}
	}
</script>

<style>
	.dropdown {
		position: relative
	}

	.dropdown-list {
		position: absolute
	}
</style>