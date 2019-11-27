<template>
	<div>
		<v-select :items="items" v-model="selectedFilter" @change="clearSearch"></v-select>
		<v-autocomplete :items="autocomplete[selectedFilter]" v-model="selectedValue"></v-autocomplete>
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
      this.selectedValue = ''
    }
  },
	computed: {
		filterArray() {
			if (this.selectedValue === "") return this.data;

			let arr;

			if (this.selectedFilter === "country" || this.selectedFilter === "city") {
				arr = this.data.filter(
					item => item[this.selectedFilter].indexOf(this.selectedValue) > -1
				);
			} else if (
				this.selectedFilter === "rating" ||
				this.selectedFilter === "price"
			) {
				let type = this.selectedFilter,
					value = this.selectedValue;

				arr = this.data.sort(function(a, b) {
          let tmpA = removeChar(a[type]), tmpB = removeChar(b[type])

					if (value === "low to high") {
						return tmpA - tmpB;
					} else {
						return tmpB - tmpA;
          }

          function removeChar(value) {
            return value.toString().replace(/\D+/g, '')
          }
				});
			}

			return arr;
		},
		...mapGetters(["returnAutocomplete"])
	}
};
</script>
