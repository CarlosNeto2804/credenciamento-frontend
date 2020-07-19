<template>
<v-card elevation="15">
          <v-card-title>Cadastrar</v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field
                label="Nome Completo"
                prepend-icon="mdi-account"
                required
                ></v-text-field>
                <v-text-field
                  label="Email"
                  prepend-icon="mdi-account"
                  v-model="email"
                  required
                ></v-text-field>
                  <v-text-field
                    v-model="password"
                    prepend-icon="mdi-lock"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show ? 'text' : 'password'"
                    name="input-10-1"
                    label="password"
                    @click:append="show = !show "
                  ></v-text-field>
                  <v-expand-transition>
                    <v-text-field
                      prepend-icon="mdi-smart-card"
                      v-if="option"
                      label="RGA"
                    ></v-text-field>
                  </v-expand-transition>
                  <v-expand-transition>
                    <v-text-field
                      v-if="option"
                      label="Curso"
                      prepend-icon="mdi-school"
                    ></v-text-field>
                  </v-expand-transition>
                    <v-checkbox
                      label="Estudante da UFMS?"
                      v-model="option"
                    ></v-checkbox>
                    <v-btn
                      class="mr-4"
                      color="success"
                    >Cadastrar</v-btn>
                    <v-btn
                      outlined
                      color="primary"
                      to="login"
                    >Voltar</v-btn>
              </v-form>
            </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'FormLogin',
  data: () => ({
    curso: '',
    rga: '',
    option: false,
    password: '',
    show: false,
    email: '',
  }),
  methods: {
    login() {
      if (this.email === 'teste@teste.com' && this.password === 'pudim') {
        this.$router.push('listevents');
        this.$store.commit('change', false);
        // this.$router.push('listevents');
      } else if (!this.$store.state.hitlogin) {
        this.$store.commit('change', true);
      }
    },
  },

};
</script>
