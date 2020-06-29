import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.blue.lighten1, // #42A5F5
            secondary: colors.shades.white, // #FFFFFF
            accent: colors.grey.darken3, // #424242
          },
        },
      },
});
