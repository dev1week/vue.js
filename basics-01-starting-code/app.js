const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "<h1>1234</h1>",
      vueLink: "https://vuejs.org",
      name,
    };
  },
  methods: {
    setName() {},
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
