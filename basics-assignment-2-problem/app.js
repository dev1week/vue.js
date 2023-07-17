const app = Vue.createApp({
  data() {
    return {
      output: "",
      confirmInput: "",
    };
  },
  methods: {
    showAlert() {
      alert("");
    },
    setOutput(event) {
      this.output = event.target.value;
    },
    confirmInput() {
      this.confirmInput = this.output;
    },
  },
});

app.mount("#assignment");
