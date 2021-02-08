<template>
  <v-navigation-drawer
    v-model="drawer"
    :color="colors.primary"
    app
    mini-variant
    mini-variant-width="100"
    class="elevation-10"
  >
    <v-col align-self="center">
      <v-row align-content="center" justify="center">
        <v-list flat>
          <v-list-item class="mb-12 mt-6">
            <v-list-item-content>
              <v-icon class="mb-2" color="white" large>{{
                icons.medical
              }}</v-icon>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list flat>
          <v-list-item router to="/">
            <v-list-item-content>
              <v-icon class="mb-2" color="white">{{ icons.dashboard }}</v-icon>
              <v-list-item-subtitle class="white--text"
                >Dashboard</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item router to="/">
            <v-badge color="pink" dot overlap>
              <v-list-item-content>
                <v-icon class="mb-2" color="white">{{ icons.account }}</v-icon>
                <v-list-item-subtitle class="white--text ml-2"
                  >Account</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-badge>
          </v-list-item>
          <v-list-item router to="/">
            <v-list-item-content>
              <v-icon class="mb-2" color="white">{{ icons.message }}</v-icon>
              <v-list-item-subtitle class="white--text"
                >Messages</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item router to="/">
            <v-list-item-content>
              <v-icon class="mb-2" color="white">{{ icons.settings }}</v-icon>
              <v-list-item-subtitle class="white--text ml-2"
                >Settings</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item router to="/">
            <v-list-item-content>
              <v-icon class="mb-2" color="white">{{ icons.help }}</v-icon>
              <v-list-item-subtitle class="white--text ml-4"
                >Help</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list style="position: absolute; bottom: 0;" flat>
          <v-list-item router to="/">
            <v-list-item-content>
              <v-icon color="white">{{ icons.logout }}</v-icon>
              <v-list-item-subtitle class="white--text ml-2">Logout</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-row>
    </v-col>
  </v-navigation-drawer>
</template>

<script>
import * as Icons from "../constants/icons";
import colors from "../constants/colors";

export default {
  name: "Sidebar",
  data: () => ({
    drawer: true,
    icons: {
      medical: Icons.ICON_MEDICAL,
      dashboard: Icons.ICON_DASHBOARD,
      account: Icons.ICON_ACCOUNT,
      message: Icons.ICON_MESSAGE,
      settings: Icons.ICON_SETTINGS,
      help: Icons.ICON_HELP,
      logout: Icons.ICON_LOGOUT
    },
    colors: {
      primary: colors.light.primary,
    },
  }),
};
</script>

<style>
</style>