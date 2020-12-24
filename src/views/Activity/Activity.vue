<template>
    <v-container>
        <NavBar title="Atividade"></NavBar>
        Atividade {{this.$route.params.event}}
        <FormActivity></FormActivity>
    </v-container>
</template>

<script>
import NavBar from '@/components/Shared/Navbar.vue';
import FormActivity from '@/components/Activity/FormActivity.vue';

export default {
  components: {
    NavBar,
    FormActivity,
  },
  mounted() {
    // fazer request para pegar evento com base no slug
  },
};
</script>

<style lang="scss" scoped>

</style>
