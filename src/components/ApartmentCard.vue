<template>
  <v-card class="mx-auto my-6" max-width="374" :disabled="!apartment.available">
    <v-img
      height="250"
      :src="apartment.image.src"
      :alt="apartment.image.alt"
    ></v-img>
    <v-card-title>{{ apartment.country }}, {{ apartment.city }}</v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="apartment.rating"
          length="10"
          dense
          half-increments
          readonly
        ></v-rating>
        <div class="grey--text ml-4">{{ apartment.rating }}</div>
      </v-row>
      <div class="my-4 subtitle-1 black--text">{{ apartment.price }}</div>
      <div class="apartment-description">
        {{ description.start }}
        <template v-if="readMore">
          <template v-if="showFullText">
            {{ description.end }}
          </template>
          <v-btn
            color="primary"
            small
            text
            :ripple="false"
            @click="toggleFullText"
            >{{ description.button }}</v-btn
          >
        </template>
      </div>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-title>
      {{ apartment.owner.firstName }}
      {{ apartment.owner.lastName }}
    </v-card-title>
    <v-card-text>
      <v-chip outlined><i class="fas fa-bed mr-2"></i> {{ apartment.numberOfBedrooms }}</v-chip>
      <v-divider class="mx-1" vertical></v-divider>
      <v-chip outlined><i class="fas fa-users mr-2"></i> {{ apartment.numberOfGuests }}</v-chip>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" text>Reserve</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "apartment-card",
  data() {
    return {
      readMore: false,
      showFullText: false,
      descriptionLength: 0,
      description: {
        button: "Read more...",
        start: "",
        end: ""
      }
    };
  },
  props: {
    apartment: Object
  },
  created() {
    const descLength = this.apartment.description.length;

    this.descriptionLength = descLength;
    this.readMore = this.descriptionLength > 200;

    this.description.start = this.apartment.description.substring(0, 200);

    if (this.readMore) {
      this.description.end = this.apartment.description.substring(
        200,
        descLength
      );
    }
  },
  methods: {
    toggleFullText() {
      this.description.button = this.showFullText
        ? "Read more..."
        : "...Hide more";

      this.showFullText = !this.showFullText;
    }
  }
};
</script>
