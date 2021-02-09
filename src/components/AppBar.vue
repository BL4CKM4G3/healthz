<template>
  <v-app-bar color="transparent" elevation="0">
    <v-row align-content="center" class="mt-2 ml-1">
      <v-text-field
        color="teal"
        placeholder="Search your symptoms"
        flat
        success
        :prepend-icon="icons.search"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-chip class="m-2" color="transparent">
        <v-icon left color="teal">
          {{ icons.clock }}
        </v-icon>
        14:02 PM Today Feb,8
      </v-chip>
    </v-row>
  </v-app-bar>
</template>

<script>
import * as Icons from "../constants/icons";

export default {
  name: "AppBar",
  data: () => ({
    icons: {
      search: Icons.ICON_SEARCH,
      clock: Icons.ICON_TIME,
    },
  }),
};
</script>

<style>
</style>