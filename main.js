const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      description: "A pair of warm, fuzzy socks",
    };
  },
});

const mountedApp = app.mount("#app");
