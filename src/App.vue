<template>
  <div id="app">
    <v-app>
      <sidebar></sidebar>
      <v-main>
        <transition name="fade">
          <v-container class="mr-0 pr-0 pl-0 ml-0">
            <router-view></router-view>
          </v-container>
        </transition>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",

  components: {
    Sidebar,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
html::-webkit-scrollbar {
  width: 6px;
  background: #01d3b7;
}
html::-webkit-scrollbar-thumb {
  width: 6px;
  background: #004D40;
}
</style>