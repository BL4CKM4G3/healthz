import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import pt from 'vuetify/lib/locale/pt';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: colors.green.accent3,
        secondary: colors.blueGrey.lighten3,
        accent: colors.lightBlue.accent3,
        error: colors.red.accent3,
        info: colors.blue.accent3,
        success: colors.green.accent3,
        warning: colors.yellow.accent3
      },
      dark: {
        primary: colors.green.accent4,
        secondary: colors.blueGrey.darken4,
        accent: colors.lightBlue.accent4,
        error: colors.red.accent4,
        info: colors.blue.accent4,
        success: colors.green.accent4,
        warning: colors.yellow.accent4
      }
    },
  },
    lang: {
      locales: { pt },
      current: 'pt',
    },
  icons: {
    iconfont: 'md',
  },
});
