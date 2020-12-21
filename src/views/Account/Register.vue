<template>
    <v-container class="fill-height">
        <v-row justify=center align=center>
            <v-col lg=4 sm=4>
                <FormRegister></FormRegister>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import FormRegister from '@/components/Account/FormRegister.vue';

export default {
  components: {
    FormRegister,
  },
};
</script>

<style lang="scss" scoped>

</style>
