
import { createApp, h } from "vue";
import App from './App.vue'
import router from './router'
import VueClipboard from 'vue3-clipboard'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp({
  render: () => h(App)
});

app.use(router);
app.use(VueClipboard, {
  autoSetContainer: true,
  appendToBody: true,
})

app.use(Toast, {
  hideProgressBar: true,
  transition: "Vue-Toastification__fade",
  maxToasts: 20,
  newestOnTop: true
});

app.mount("#app");