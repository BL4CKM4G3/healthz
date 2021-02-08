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
  },
  lang: {
    locales: { pt },
    current: 'pt',
  },
  icons: {
    iconfont: 'md',
  },
});
