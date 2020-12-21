<template>
  <v-container>
    <Navbar title="Cadastrar Novo Evento" ></Navbar>
    <FormEvent/>
  </v-container>
</template>

<script>
import Navbar from '@/components/Shared/Navbar.vue';
import FormEvent from '@/components/Event/FormEvent.vue';

export default {
  components: {
    Navbar,
    FormEvent,
  },
};
</script>

<style lang="scss" scoped>
</style>
