const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      description: "A pair of warm, fuzzy socks",
      image: "./assets/images/socks_green.jpg",
      link: "https://www.camt.cmu.ac.th",
      inStock: true,
      onSale: true,
      details: ["80% cotton", "20% polyester"],
      variants: [
        { id: 1, color: "green" },
        { id: 2, color: "blue" },
      ],
      sizes: ["S", "M", "L"],
    };
  },
});

const mountedApp = app.mount("#app");
