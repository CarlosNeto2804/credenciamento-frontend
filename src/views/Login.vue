  <template>
    <div class="fill-height">
    <v-container>
      <v-row>
        <v-row justify="center" align="start">
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
        </v-row >
      </v-row>
  </v-container >
  <v-container class="fill-height">
    <v-row>
       <v-row  justify="center" align="center" >
          <FormLogin></FormLogin>
        </v-row>
    </v-row>
  </v-container>
  </div>

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
<style scoped>
 .sandim{
   height: 100%;
   width: 100%;
 }

</style>
