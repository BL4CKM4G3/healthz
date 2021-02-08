<template>
  <div class="home">
    <v-layout row>
      <v-flex md8>
        <v-container>
          <v-row>
            <v-col cols="12" md="12" sm="12">
              <app-bar></app-bar>
            </v-col>
          </v-row>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import AppBar from "../components/AppBar.vue";

export default {
  name: "Home",
  components: {
    AppBar,
  },
};
</script>
