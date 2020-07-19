<template>
<v-card elevation="15" class="">

          <v-card-title>Login</v-card-title>
            <v-card-text>
              <v-form>

                <v-text-field
                  label="Email"
                  prepend-icon="mdi-account"
                  v-model="email"
                  required
                  @keypress.enter="login"
                ></v-text-field>
                <v-text-field
                  @keypress.enter="login"
                  v-model="password"
                  prepend-icon="mdi-lock"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  name="input-10-1"
                  label="password"
                  @click:append="show = !show "
                ></v-text-field>
                <v-btn
                  class="mr-4"
                  color="success"
                  @click="login()"
                  @keypress.enter="login"
                >Login</v-btn>
                <v-btn
                  outlined
                  color="primary"
                  to="cadastrar"
                >Registrar</v-btn>
              </v-form>
            </v-card-text>
  </v-card>

</template>

<script>
export default {
  name: 'FormLogin',
  data: () => ({
    password: '',
    show: false,
    email: '',
  }),
  methods: {
    async login() {
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
