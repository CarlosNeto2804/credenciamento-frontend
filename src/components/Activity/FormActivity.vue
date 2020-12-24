<template>

<v-card elevation="15" class="">

            <v-card-text>
              <v-form>
                <v-text-field
                  label="Nome"
                  prepend-icon="mdi-account"
                  v-model="name"
                  required
                ></v-text-field>
                <v-autocomplete
                    label="Evento"
                    :search-input.sync="search"
                    hide-no-data
                    hide-selected
                ></v-autocomplete>
                <v-select
                    :items="['palestra', 'minicurso' , 'mesa redonda']"
                    label="Tipo da Atividade"
                ></v-select>
                 <v-menu
        ref="menu"
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="time"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="time"
            label="Inicio"
            prepend-icon="mdi-clock-time-four-outline"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="menu2"
          v-model="time"
          full-width
          @click:minute="$refs.menu.save(time)"
        ></v-time-picker>
      </v-menu>
       <v-menu
        ref="menu"
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="time"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="time"
            label="Fim"
            prepend-icon="mdi-clock-time-four-outline"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="menu2"
          v-model="time"
          full-width
          @click:minute="$refs.menu.save(time)"
        ></v-time-picker>
      </v-menu>

                <v-checkbox
                label="Opção Avançada"
                v-model="advancedOption"
            ></v-checkbox>
                    <v-expand-transition >
                        <v-text-field
                        v-if="advancedOption"
                        label="Quantidade de Seções"
                        prepend-icon="mdi-account"
                        v-model="QuantitySections"
                        required
                ></v-text-field>
                    </v-expand-transition>
                    <v-expand-transition>
                <v-text-field label="seila " v-if="advancedOption">
                </v-text-field>
                    </v-expand-transition >
            <v-checkbox
                v-model="isActivityAllowedExternalPeople"
                label="Permitido para publico externo"
            ></v-checkbox>
            <v-btn
                class="mr-4"
                color="success"
                @click="login()"
                @keypress.enter="login"
            >Login</v-btn>
            <v-btn
                outlined
                color="primary"
                :to="{ name: 'events'}"
            >Registrar</v-btn>
            </v-form>
            </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      search: null,
      typesOfActivity: ['palestra', 'minicurso', 'mesa redonda'],
      isActivityAllowedExternalPeople: false,
      isloading: false,
      events: [],
      QuantitySections: 1,
      QuantitySectionsWinCertificate: 1,
      advancedOption: false,
    };
  },
  watch: {
    search(val) {
      // Items have already been loaded
      if (this.events.length > 0) return;

      // Items have already been requested
      if (this.isLoading) return;

      this.isLoading = true;
      console.log(val);
      // Lazily load input items
      // request api
    },

  },

};
</script>

<style lang="scss" scoped>

</style>
