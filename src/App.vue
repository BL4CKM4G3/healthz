<template>
  <v-app>
    <sidebar></sidebar>
    <v-main>
      <transition name="fade">
        <v-container>
          <router-view></router-view>
        </v-container>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'App',

  components: {
    Sidebar,
  },

  data: () => ({
    //
  }),
};
</script>
