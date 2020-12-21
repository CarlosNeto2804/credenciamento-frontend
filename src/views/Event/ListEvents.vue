<template>
<v-container>
  <Navbar title="Eventos Acontecendo ou Que irão acontecer neste Momento" ></Navbar>
    <v-row>
          <Event></Event>
          <Event></Event>
           <Event></Event>
          <Event></Event>
           <Event></Event>
          <Event></Event>
    </v-row>

    </v-container>
</template>
<script>

import Event from '@/components/Event/Event.vue';
import Navbar from '@/components/Shared/Navbar.vue';

export default {
  name: 'App',
  components: {
    Event,
    Navbar,
  },
  data: () => ({

  }),

};
</script>
