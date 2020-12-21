<template>
  <v-container>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      dark
      color="primary"
      app
      :mini-variant.sync="mini"
      permanent
      v-model="drawer"
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in listNavItems" :key="item.title"
        :to="item.to" link >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  props: {
    title: { String, required: true },
  },
  data() {
    return {
      drawer: true,
      NavBaritems: [
        {
          title: 'Home', icon: 'mdi-home', to: { name: 'events' }, role: 'normal',
        },
        {
          title: 'Minha Conta', icon: 'mdi-account', to: { name: 'account' }, role: 'normal',
        },
        {
          title: 'Criar Eventos', icon: 'mdi-calendar', to: { name: 'eventCreate' }, role: 'admin',
        },
        {
          title: 'Emitir Certificados', icon: 'mdi-certificate', to: '', role: 'admin',
        },
      ],
      mini: true,
    };
  },
  computed: {
    listNavItems() {
      const auth = false;
      if (auth) return this.NavBaritems.filter((itemNavBar) => itemNavBar.role !== 'admin');
      return this.NavBaritems;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
