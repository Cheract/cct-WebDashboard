import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import router from "../router";
// import store from "./store";
// import "material-design-icons-iconfont/dist/material-design-icons.css";
import "vuetify/dist/vuetify.min.css";
// import locales from "../locales";
// import localesMobile from "../locales-mobile";
// import NativeService from "../native-service";

Vue.config.productionTip = false;

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#ee44aa",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
  icons: {
    iconfont: "md",
  },
  // lang: {
  //   current: language,
  //   locales: process.env.VUE_APP_MOBILE ? localesMobile : locales,
  // },
});

new Vue({
  router,
  // store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
