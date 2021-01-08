<template>
  <v-container
    fluid
    class="background"
  >
    <Navbar
      title="Eventos Acontecendo ou Que irão acontecer neste Momento"
    ></Navbar>
    <v-row >
      <v-col lg="3" v-for="event in events" :key="event.id" >
        <Event :event="event" />
      </v-col>
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
    events: [],
  }),
  methods: {
    async getData() {
      const response = await this.$http.get('event/');
      console.log(response);
      this.events = response.data.results;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style scoped>
  .background {
      background-color: #E3F2FD
;
  }
</style>
