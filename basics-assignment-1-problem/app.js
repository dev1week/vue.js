const app = Vue.createApp({
  data() {
    return {
      myName: "Hanju",
      age: 25,
      imgUrl: "",
    };
  },
  methods: {
    getFavoriteNumber() {
      return Math.random();
    },
    getMyAgeAfter5() {
      return this.age + 5;
    },
  },
});

app.mount("#assignment");
