<template>
  <v-card
    class="mx-12 rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-xl"
  >
    <v-app-bar color="grey darken-4" flat class="m-8 mt-0 mb-0">
      <h5 class="white--text">Statistics of your health!</h5>
      <v-spacer></v-spacer>
      <v-btn color="teal" text>
        2019
        <v-icon right color="white">{{ icons.chevronDown }}</v-icon>
      </v-btn>
      <v-btn color="teal" rounded dark depressed>Year</v-btn>
      <v-btn class="white--text" text>Month</v-btn>
    </v-app-bar>
      <v-sparkline
        :value="value"
        color="teal"
        :smooth="radius || false"
        :padding="padding"
        :line-width="width"
        :stroke-lineCap="lineCap"
        :fill="fill"
        :type="type"
        :auto-line-width="autoLineWidth"
        auto-draw
      ></v-sparkline>
  </v-card>
</template>

<script>
import * as Icons from "../constants/icons";

export default {
  name: "CardStatistics",
  data: () => ({
    icons: {
      chevronDown: Icons.ICON_DOWN,
    },
    width: 2,
    radius: 15,
    padding: 6,
    lineCap: "round",
    value: [0, 10, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    fill: false,
    type: "trend",
    autoLineWidth: true,
  }),
};
</script>

<style>
</style>