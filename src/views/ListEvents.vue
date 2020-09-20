<template>
<v-container>
  <Navbar></Navbar>
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
import Event from '@/components/Event.vue';
import Navbar from '@/components/Navbar.vue';

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
