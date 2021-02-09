<template>
  <v-card
    class="mx-12 rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-xl mt-2"
  >
    <v-list-item three-line>
      <v-list-item-content class="pa-10">
        <v-row align-content="center" justify="space-between">
          <v-col cols="12" md="7">
            <v-list-item-title class="headline mt-6 mb-1">
              Today<span class="teal--text"> -10% </span>discount<br />on lung
              examinations!
            </v-list-item-title>

            <v-list-item-subtitle
              >The package price includes: consultations<br />of a
              pulmonologist, spirography, cardiogram.</v-list-item-subtitle
            >
          </v-col>
          <v-col cols="12" md="5" class="pl-10 mt-n8" align-self="center">
            <v-list-item-avatar tile size="150" class="ml-15">
              <v-img src="../assets/img/lungs.svg"></v-img>
            </v-list-item-avatar>
          </v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>