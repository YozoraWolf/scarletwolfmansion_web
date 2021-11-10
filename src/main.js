
import { createApp, h } from "vue";
import App from './App.vue'
import router from './router'
import VueClipboard from 'vue3-clipboard'

const app = createApp({
  render: () => h(App)
});

app.use(router);
app.use(VueClipboard, {
    autoSetContainer: true,
    appendToBody: true,
  })

app.mount("#app");