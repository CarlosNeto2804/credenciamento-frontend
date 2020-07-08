  <template>
   <v-container fluid class="fill-height">
      <v-row align="center"  justify="center" >
        <v-col cols="12" lg=4 sm=4>
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
};
</script>
