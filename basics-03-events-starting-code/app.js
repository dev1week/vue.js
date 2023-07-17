const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    remove(num) {
      this.counter = this.counter - num;
    },
    submitForm(event) {
      event.preventDefault();
      alert("제출되었습니다.");
    },
  },
});

app.mount("#events");
