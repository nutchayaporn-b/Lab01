const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      description: "A pair of warm, fuzzy socks",
      image: "./assets/images/socks_green.jpg",
      link: "https://www.camt.cmu.ac.th/",
      inStock: false,
      inventory: 0,
      onSale: true,
      details: ["80% cotton", "20% polyester"],
      variants: [
        { id: 20, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 21, color: "blue", image: "./assets/images/socks_blue.jpg" },
      ],
      sizes: ["S", "M", "L"],
      cart: 0,
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateImage(image) {
      this.image = image;
    },
    updateStockStatus() {
      this.inStock = !this.inStock;
    },
  },
});

const mountedApp = app.mount("#app");
