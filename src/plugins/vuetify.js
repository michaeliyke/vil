import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "md" || "fa",
  },
  theme: {
    themes: {
      light: {
        background: colors.blue.accent2,
      },
      dark: {
        background: colors.blue.blue,
      },
    },
  },
});
