<template>
  <v-card class="p-4 ml-12">
    <v-app-bar height="160" class="teal darken-3">
      <v-col>
        <v-row>
          <h4 class="white--text"
            >Heart Rate</h4
          >
        </v-row>
        <v-row>
          <h2 class="white--text">112 bpm</h2>
        </v-row>
      </v-col>
      <v-col>
        <v-icon color="white" size="120">{{ icons.heart }}</v-icon>
      </v-col>
    </v-app-bar>
  </v-card>
</template>

<script>
import * as Icons from "../constants/icons";

export default {
  name: "CardHealth",
  data: () => ({
    icons: {
      heart: Icons.ICON_HEART
    }
  })
};
</script>

<style>
</style>