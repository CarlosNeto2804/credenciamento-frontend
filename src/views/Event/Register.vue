<template>
  <v-container>
    <Navbar title="Cadastrar Novo Evento" ></Navbar>
      <v-stepper
    v-model="step"
    vertical
  >
    <v-stepper-step
      :complete="step > 1"
      step="1"
    >
      Cadastrar  Evento
    </v-stepper-step>

    <v-stepper-content step="1">
          <FormEvent/>
    </v-stepper-content>
    <v-stepper-step
      :complete="step > 2"
      step="2"
    >
      Cadastrar Atividade
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-card
        color="grey lighten-1"
        class="mb-12"
        height="200px"
      ></v-card>
      <v-btn
        color="primary"
        @click="step = 3"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>
     <v-stepper-step
      :complete="step > 3"
      step="3"
    >
      Cadastrar  Seções
    </v-stepper-step>

    <v-stepper-content step="3">
          <FormEvent/>
    </v-stepper-content>
  </v-stepper>
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
  computed: {
    step: {
      get() {
        return this.$store.getters['event/step'];
      },
      set(value) {
        this.$store.commit('event/step', value);
      },
    },
  },
  methods: {
    isFormNotInStepOne: () => this.$store.getters['event/step'] !== 1,
  },
  mounted() {
    if (this.isFormNotInStepOne()) this.$store.commit('event/step', 1);
  },
};
</script>
<style lang="scss" scoped>
</style>
