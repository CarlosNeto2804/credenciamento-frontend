  <template>
    <div class="fill-height">
    <v-container >
      <v-row justify="center" align="start">
        <v-col cols=12 lg=6  class="sandim">
           <v-alert
           dense
          dismissible
          v-model=showAlert
          color="red"
          type="error"
          outlined
          prominent
          border="left"
          transition="scale-transition"
          >
             Usuario ou Senha incorretos
          </v-alert>
        </v-col >
      </v-row>
  </v-container >
  <v-container class="fill-height">
    <v-row justify="center" align="center">
       <v-col   cols=12 lg=6  >
          <FormLogin></FormLogin>
        </v-col>
    </v-row>
  </v-container>
  </div>

</template>

<script>
// @ is an alias to /src
import FormLogin from '@/components/Account/FormLogin.vue';

export default {
  name: 'Login',
  components: {
    FormLogin,
  },
  computed: {
    showAlert: {
      get() {
        return this.$store.getters['auth/showAlert'];
      },
      set(value) {
        this.$store.commit('auth/showAlert', value);
      },
    },
  },
  methods: {
    async seila() {
      const response = await this.$http.get('event');
      console.log(response);
    },
  },
  mounted() {
    this.seila();
  },

};
</script>
<style scoped>
 .sandim{
   position:fixed;
 }

</style>
