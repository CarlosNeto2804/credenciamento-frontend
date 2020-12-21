<template>
  <v-card elevation="15" class="">
    <v-card-text>
      <v-form>
        <v-text-field
          label="Nome"
          v-model="nameEvent"
          required
          color="#CFAF7B"
        >
            <v-icon slot="prepend"  color="#CFAF7B" >mdi-calendar</v-icon>
        </v-text-field>
        <v-textarea
          label="Descrição"
          v-model="descriptionEvent"
          rows="2"
          required
          clearable
          clear-icon="mdi-close-circle"
          color="#CFAF7B"
        >
           <v-icon slot="prepend"  color="#CFAF7B" >mdi-card-text</v-icon>
        </v-textarea>
        <v-row>
        <v-col  lg="4">
          Selecionar Data Inicial e Final do Evento
          <v-date-picker
            color="#CFAF7B"
            :landscape=orientationDatePicker
            :min="minDateRegisterEvent"
            v-model="dates"
            range></v-date-picker>
        </v-col>
        <v-col  lg="6">
        <v-text-field
            label="Link Instagram (Opcional)"
            color="red"
        >
          <v-icon slot="prepend" color="red">mdi-instagram</v-icon>
        </v-text-field>
        <v-text-field
            label="Link Facebook (Opcional)"
            color="primary"
        >
            <v-icon slot="prepend" color="primary">mdi-facebook</v-icon>
        </v-text-field>
        </v-col>
        </v-row>
        <v-col align=center>
          <v-btn
            class="mr-4"
            color="success"
            @click="submit()"
            @keypress.enter="submit()"
            >Criar Evento</v-btn
          >
          <v-btn
              outlined
              color="primary"
              :to="{ name: 'events'}"
            >Voltar</v-btn>
        </v-col>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      dates: [],
      nameEvent: '',
      descriptionEvent: '',
      orientationDatePicker: false,
      minDateRegisterEvent: new Date().toISOString(),
    };
  },
  methods: {
    submit() {
      console.log(this.dates);
    },
  },
  mounted() {
    window.addEventListener('orientationchange', () => {
      this.orientationDatePicker = !this.orientationDatePicker;
      console.log('orientation change');
    });
  },
};
</script>

<style lang="scss" scoped>

</style>
