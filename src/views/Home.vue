<template>
  <div class="home">
    <v-layout row>
      <v-flex md8>
        <v-container fluid class="pl-15 teal lighten-5">
          <v-row>
            <v-col cols="12" md="12" sm="12">
              <app-bar></app-bar>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12" sm="12">
              <card-offers></card-offers>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12" sm="12">
              <card-statistics></card-statistics>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" sm="12">
              <card-health></card-health>
            </v-col>
            <v-col cols="12" md="6" sm="12">
              <card-activity></card-activity>
            </v-col>
          </v-row>
        </v-container>
      </v-flex>
      <v-flex md4>
        <v-container fluid class="fill-height mr-0 mr-n8 mt-n15">
              <side-area></side-area>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import AppBar from "../components/AppBar.vue";
import CardActivity from "../components/CardActivity.vue";
import CardHealth from "../components/CardHealth.vue";
import CardOffers from "../components/CardOffers.vue";
import CardStatistics from "../components/CardStatistics.vue";
import SideArea from "../components/SideArea.vue";

export default {
  name: "Home",
  components: {
    AppBar,
    CardOffers,
    CardStatistics,
    CardActivity,
    CardHealth,
    SideArea,
  },
};
</script>

<style scoped>
</style>