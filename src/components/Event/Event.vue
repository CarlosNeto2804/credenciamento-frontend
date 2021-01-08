<template >
  <v-card >
    <v-img
      :src="cards[0].src"
      class="white--text"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="300px"
    >
    </v-img>
    <v-card-text>
      <v-card-title>
        {{ this.event.name }}
      </v-card-title>

      <div class="grey--text ml-4">{{ this.event.description }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-text>
      <v-chip-group column>
        <v-chip
          color="amber darken-2"
          text-color="white"
        >{{
          `Data Inicio
            ${toDefaultDate(this.event.datetime_init)}`
        }}</v-chip>
        <v-chip
          text-color="white"
          color="amber darken-2"
        >{{
          ` Data Fim  ${toDefaultDate(this.event.datetime_init)}`
        }}</v-chip>
      </v-chip-group>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn icon :link="true" :href="event.social_media.facebook" color="blue darken-4">
        <v-icon>mdi-facebook</v-icon>
      </v-btn>

      <v-btn icon :link="true"  :href="event.social_media.linkedin" color="blue darken-4">
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>

      <v-btn icon :link="true" :href="event.social_media.site" color="red">
        <v-icon>mdi-web</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import logo from '@/assets/teste.jpeg';

export default {
  name: 'FormLogin',
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    cards: [
      { title: 'Semana da Computação', src: logo, flex: 12 },
      {
        title: 'Favorite road trips',
        src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        flex: 6,
      },
      {
        title: 'Best airlines',
        src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        flex: 6,
      },
    ],
  }),
  methods: {
    toDefaultDate(isoDate) {
      const dateString = isoDate.toString();
      const date = dateString.substr(0, 10);
      const [year, month, day] = date.split('-');
      return `${day}/${month}/${year}`;
    },
  },
  mounted() {
    console.log(this.event);
  },
};
</script>
