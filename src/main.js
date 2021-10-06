import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import router from "../router";
// import store from "./store";
import "vuetify/dist/vuetify.min.css";
import ko from "vuetify/lib/locale/ko";

Vue.config.productionTip = false;

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        // primary: "#ee44aa",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
  // icons: {
  //   iconfont: "md",
  // },
  lang: {
    locales: { ko },
    // locales: { ko: require("vuetify/lib/locale/ko") },
    current: "ko",
  },
});

new Vue({
  router,
  // store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
