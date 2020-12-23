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
        <v-col cols="12" lg="4" sm="12">
          <v-menu
            ref="menuDateInit"
            v-model="menuDateInit"
            :close-on-content-click="false"
            :return-value.sync="dateInit"
            transition="scale-transition"
            offset-y
            min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="dateInit"
            label="Data Inicial"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="dateInit"
          no-title
          scrollable
          :min="minDateRegisterOrFinalEvent"
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menuDateInit.save(dateInit)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
                <v-menu
            ref="menuDateFinal"
            v-model="menuDateFinal"
            :close-on-content-click="false"
            :return-value.sync="dateFinal"
            transition="scale-transition"
            offset-y
            min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="dateFinal"
            label="Data Final"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="dateFinal"
          no-title
          scrollable
          :min="minDateRegisterOrFinalEvent"
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancelar
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menuDateFinal.save(dateFinal)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>

        </v-col>
        <v-col cols="12"  lg="6" sm="12">
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
      dateInit: '',
      dateFinal: '',
      nameEvent: '',
      descriptionEvent: '',
      orientationDatePicker: false,
      minDateRegisterOrFinalEvent: new Date().toISOString(),
    };
  },
  methods: {
    submit() {
      console.log(this.dateInit);
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
