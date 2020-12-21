<template >
  <v-col cols="12" lg="4">
<v-card>
            <v-img
              :src="cards[0].src"
              class="white--text"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="300px"
            >
             <v-card-title v-text="cards[0].title"></v-card-title>

            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
    </v-col>
</template>
<script>
import logo from '@/assets/teste.jpeg';

export default {
  name: 'FormLogin',
  data: () => ({
    cards: [
      { title: 'Semana da Computação', src: logo, flex: 12 },
      { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
    ],
  }),
};
</script>
