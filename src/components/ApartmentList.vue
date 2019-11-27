<template>
	<div>
		<v-row>
			<v-col cols="6" md="6">
				<v-select :items="items" v-model="selectedFilter" @change="clearSearch"></v-select>
			</v-col>
			<v-col cols="6" md="6s">
				<v-autocomplete :items="autocomplete[selectedFilter]" v-model="selectedValue"></v-autocomplete>
			</v-col>
		</v-row>
		<apartment-card v-for="(eachApartment, key) in filterArray" :key="key" :apartment="eachApartment"></apartment-card>
	</div>
</template>

<script>
import ApartmentCard from "./ApartmentCard";
import { mapGetters } from "vuex";

export default {
	name: "apartment-list",
	components: {
		ApartmentCard
	},
	props: {
		data: Array
	},
	data() {
		return {
			items: ["country", "city", "rating", "price"],
			selectedFilter: "country",
			selectedValue: "",
			autocomplete: null
		};
	},
	created() {
		this.autocomplete = this.returnAutocomplete;
	},
	methods: {
		clearSearch() {
			this.selectedValue = "";
		},
		removeChar(value) {
			return value.toString().replace(/\D+/g, "");
		}
	},
	computed: {
		filterArray() {
			if (this.selectedValue === "") return this.data;

			let arr,
				type = this.selectedFilter,
				value = this.selectedValue;

			if (type === "country" || type === "city") {
				arr = this.data.filter(item => item[type].indexOf(value) > -1);
			} else if (type === "rating" || type === "price") {
				arr = this.data.sort((a, b) => {
					let tmpA = this.removeChar(a[type]),
						tmpB = this.removeChar(b[type]);

					if (value === "low to high") {
						return tmpA - tmpB;
					} else {
						return tmpB - tmpA;
					}
				});
			}

			return arr;
		},
		...mapGetters(["returnAutocomplete"])
	}
};
</script>
