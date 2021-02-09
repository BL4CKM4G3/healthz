<template>
  <v-card
    class="ml-6 mr-12 rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-xl"
  >
    <v-app-bar flat class="m-8 mt-0 mb-0">
      <h5 class="teal--text">Your Activity</h5>
      <v-spacer></v-spacer>
      <v-btn color="teal" rounded dark depressed>Week</v-btn>
      <v-btn color="teal" class="white--text" text>Month</v-btn>
    </v-app-bar>

    <v-app-bar height="100">
      <v-progress-circular
        indeterminate
        rotate="360"
        size="100"
        width="15"
        color="teal darken-4"
        class="mt-1 mr-1"
      >
        20
      </v-progress-circular>
      <v-progress-circular
        indeterminate
        rotate="360"
        size="100"
        width="15"
        value="90"
        color="red darken-4"
        class="mt-1 mr-1"
      >
        90
      </v-progress-circular>
      <v-progress-circular
        indeterminate
        rotate="360"
        size="100"
        width="15"
        value="50"
        color="blue darken-4"
        class="mt-1"
      >
        50
      </v-progress-circular>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>