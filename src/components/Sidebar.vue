<template>
  <v-navigation-drawer
    v-model="drawer"
    dark
    app
    mini-variant
    mini-variant-width="100"
    :class="$vuetify.theme.themes.dark.primary"
  >

  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  data: () => ({
    drawer: true,
  })
}
</script>

<style>

</style>