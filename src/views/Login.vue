  <template>
   <v-container fluid class="fill-height">

      <v-row align="center"  justify="center" >

        <v-col cols="12" lg=4 sm=4>
        <v-alert
              dismissible
              v-model=showAlert
              close-label="teste"
              color="red"
              type="error"
              outlined
              prominent
              border="left"
              transition="scale-transition"
       >
    Usuario ou Senha incorretos
    </v-alert>
          <FormLogin></FormLogin>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
// @ is an alias to /src
import FormLogin from '@/components/FormLogin.vue';

export default {
  name: 'Login',
  components: {
    FormLogin,
  },
  computed: {
    showAlert: {
      get() { return this.$store.getters.hitlogin; },
      set(value) { this.$store.commit('change', value); },
    },
  },
};
</script>
