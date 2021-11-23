<!-- Incorporates some design from https://ctnicholas.medium.com/create-a-searchable-dropdown-list-in-vue-js-139dd064e845 -->

<template>
	<div class="dropdown">
		<h1>Population Simulator</h1>

		<div><button>Start Simulation</button> Current Year: {{ currentYear }}</div>

		<input v-if="isEmptyObject(selectedCountry)" ref="dropdowninput" v-model.trim="inputValue" class="dropdown-input" type="text" placeholder="Search countries" />
		<div v-else @click="resetCountry" class="dropdown-selected">
			{{ selectedCountry.name }}
		</div>
		<div v-show="inputValue" class="dropdown-list">
			<div v-show="countryVisible(country)" v-for="country in countries.payload" :key="country.name"  @click="selectCountry(country)" class="dropdown-item">
				{{ country.name }}
			</div>
		</div>

		<div v-if="!isEmptyObject(selectedCountry)">
			<h2>{{ selectedCountry.name }}</h2>
			<ul>
				<li>Population: {{ selectedCountry.population.toLocaleString() }}</li>
				<li>Population Growth Rate: 
					<input type="range" min="-0.1" max="0.1" step="0.001" v-model.trim="sliderValue">{{ (sliderValue * 100).toFixed(2) }}%
					<button @click="updatePopulationGrowth()">Update</button>
				</li>
				<li>GDP Per Capita: ${{ getGdpPercapita(selectedCountry).toLocaleString('en-US', { maximumFractionDigits: 2 }) }}</li>
				<li>GDP Growth Rate: {{ (selectedCountry.economy.gdpGrowthRate * 100).toFixed(2) }}%</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				currentYear: 2022,
				countries: [],
				inputValue: '',
				sliderValue: '',
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
				this.sliderValue = country.populationGrowthRate
				this.inputValue = ""
			},
			resetCountry() {
				this.selectedCountry = {}
				this.$nextTick( () => this.$refs.dropdowninput.focus() )
			},
			isEmptyObject(object) {
				return Object.keys(object).length === 0
			},
			getGdpPercapita(country) {
				let economy = country.economy
				return economy.gdp / country.population
			},
			updatePopulationGrowth() {
				this.selectedCountry.populationGrowthRate = this.sliderValue
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