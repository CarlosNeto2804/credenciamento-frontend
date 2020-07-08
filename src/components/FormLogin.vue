<template>
<v-card elevation="15">
          <v-card-title>Login</v-card-title>
            <v-card-text>
              <v-form>
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
                  hint="At least 8 characters"
                  @click:append="show = !show "
                  ></v-text-field>
                    <v-btn
                      color="success"
                    >
                    Login
                    </v-btn>
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
};
</script>
