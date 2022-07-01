const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      description: "A pair of warm, fuzzy socks",
      image: "./assets/images/socks_green.jpg",
      link: "https://www.camt.cmu.ac.th",
    };
  },
});

const mountedApp = app.mount("#app");
