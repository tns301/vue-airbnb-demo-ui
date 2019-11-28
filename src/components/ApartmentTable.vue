<template>
  <div>
    <v-simple-table class="my-6 shadow" fixed-header height="530px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Country</th>
            <th class="text-left">City</th>
            <th class="text-left">Price</th>
            <th class="text-left">Rating</th>
            <th class="text-left">Availability</th>
            <th class="text-left">Number of <i class="fas fa-bed"></i></th>
            <th class="text-left">Number of <i class="fas fa-users"></i></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in paginatedItems" :key="item.id" :class="{ disabled: !item.available }" v-on:dblclick="bookApartment(item.id)">
            <td>{{ item.country }}</td>
            <td>{{ item.city }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.rating }}</td>
            <td>{{ item.available }}</td>
            <td>{{ item.numberOfBedrooms }}</td>
            <td>{{ item.numberOfGuests }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div class="text-center pagination">
      <v-select :items="rowPerPageItems" v-model="rowPerPage" class="row-per-page"></v-select>
      <v-pagination
        v-model="currentPage"
        :length="numberOfPages"
        circle
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "apartment-table",
  props: {
		data: Array
  },
  data() {
    return {
      currentPage: 1,
      rowPerPage: 10,
      rowPerPageItems: [ 10, 25, 50],
      numberOfPages: 0
    }
  },
  methods: {
    ...mapActions(["bookApartment"])
  },
  computed: {
    paginatedItems() {
      this.numberOfPages = Math.ceil(this.data.length / this.rowPerPage);

      if (this.currentPage > this.numberOfPages) this.currentPage = this.numberOfPages
      
      const min = this.rowPerPage * (this.currentPage - 1),
          max = this.rowPerPage * this.currentPage;

      return this.data.slice(min, max)
    }
  }
};
</script>
