import { createApp } from "vue";
import App from "./App.vue";
import VueTelInput from "vue3-tel-input";
import "vue3-tel-input/dist/vue3-tel-input.css";

const VueTelInputOptions = {
  mode: "international",
  onlyCountries: ["NG", "GH", "GB", "US", "CA"],
};

const app = createApp(App);
app.use(VueTelInput, VueTelInputOptions); // Define default global options here (optional)
app.mount("#app");
