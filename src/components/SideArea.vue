<template>
  <v-container class="mt-15">
    <v-row>
      <v-col align-self="center" cols="12" md="12" sm="12">
        <v-list class="mt-n7" two-line>
          <v-list-item color="transparent">
            <v-list-item-avatar class="ml-n5">
              <v-img
                src="https://images.unsplash.com/photo-1484588168347-9d835bb09939?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
              ></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Juliett Burns</v-list-item-title>
              <v-list-item-subtitle>15 years, New York</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-actions>
              <v-icon color="teal darken-4">{{ icons.list }}</v-icon>
            </v-list-actions>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12" sm="12">
        <v-row>
          <v-col cols="12" md="4">
            <v-row>
              <v-col cols="12" md="3">
                <v-card
                  height="50px"
                  width="10px"
                  color="green accent-3"
                ></v-card>
              </v-col>
              <v-col cols="12" md="9">
                <v-list two-line subheader class="ml-n8 mt-n2">
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-subtitle>Blood</v-list-item-subtitle>
                      <v-list-item-title>O+</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="4">
            <v-row>
              <v-col cols="12" md="3">
                <v-card
                  height="50px"
                  width="10px"
                  color="blue-grey accent-3"
                ></v-card>
              </v-col>
              <v-col cols="12" md="9">
                <v-list two-line subheader class="ml-n8 mt-n2">
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-subtitle>Height</v-list-item-subtitle>
                      <v-list-item-title>175 cm</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="4">
            <v-row>
              <v-col cols="12" md="3">
                <v-card
                  height="50px"
                  width="10px"
                  color="blue accent-3"
                ></v-card>
              </v-col>
              <v-col cols="12" md="9">
                <v-list two-line subheader class="ml-n8 mt-n2">
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-subtitle>Weight</v-list-item-subtitle>
                      <v-list-item-title>66 Kg</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12">
        <v-btn text
          >November
          <v-icon right>{{ icons.chevronDown }}</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" md="12" sm="12">
        <v-row>
          <v-btn
            small
            class="mr-1 pl-0 pr-0"
            text
            outlined
            color="teal darken-1"
            >SUN</v-btn
          >
          <v-btn
            small
            class="mr-1 pl-0 pr-0"
            text
            outlined
            color="teal darken-1"
            >MO</v-btn
          >
          <v-btn
            small
            class="mr-1 pl-0 pr-0"
            text
            outlined
            color="teal darken-1"
            >TU</v-btn
          >
          <v-btn
            small
            class="mr-1 pl-0 pr-0"
            text
            outlined
            color="teal darken-1"
            >WED</v-btn
          >
          <v-btn
            small
            class="mr-1 pl-0 pr-0"
            text
            outlined
            color="teal darken-1"
            >THU</v-btn
          >
          <v-btn
            small
            class="mr-1 pl-0 pr-0"
            text
            outlined
            color="teal darken-1"
            >FRY</v-btn
          >
          <v-btn
            small
            class="mr-1 pl-0 pr-0"
            text
            outlined
            color="teal darken-1"
            >SAT</v-btn
          >
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12" sm="12">
        <v-card
          class="mx-12 rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-xl mt-4 py-4"
          color="teal"
          dark
          flat
        >
          <v-list-item three-line>
            <v-list-item-avatar tile size="30">
              <v-icon color="white" size="30">
                {{ icons.tooth }}
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content class="p-2">
              <v-list-item-title class="headline mb-1">
                Dentist<br />
                <h6 class="white--text">8:00 - 9:30</h6>
                <h6>Dr. John Connors(n° 11)</h6>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12" sm="12">
        <v-card
          class="mx-12 rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-xl mt-2 py-4"
          color="teal lighten-4"
        >
          <v-list-item three-line>
            <v-list-item-avatar tile size="30">
              <v-icon size="30">
                {{ icons.heart }}
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content class="p-2">
              <v-list-item-title class="headline mb-1">
                Cardiologist<br>
                <h6>9:45 - 11:50</h6>
                <h6>Dr. Judith Conn.(n° 10)</h6>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12" sm="12">
        <v-list>
          <v-btn text>Your Treatment<v-icon right>{{ icons.chevronDown }}</v-icon></v-btn>
        </v-list>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12" sm="12">
        <v-card class="mx-2 rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-xl mt-2" color="teal lighten-4" flat>
          <v-list-item three-line>
            <v-list-item-avatar tile size="30">
              <v-icon size="30" color="teal">{{ icons.pill }}</v-icon>
            </v-list-item-avatar>
            <v-list-item-content class="p-1">
              <v-list-item-title class="headline mb-1">
                PolyVitamin®<br>
                <h6><span class="teal--text">2 capsules</span>with meals every night.</h6>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as Icons from "../constants/icons";

export default {
  name: "SideArea",
  data: () => ({
    icons: {
      list: Icons.ICON_LIST,
      chevronDown: Icons.ICON_DOWN,
      tooth: Icons.ICON_TOOTH,
      heart: Icons.ICON_HEART,
      pill: Icons.ICON_PILL
    },
  }),
};
</script>

<style>
</style>