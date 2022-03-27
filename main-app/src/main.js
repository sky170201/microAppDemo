import { createApp, reactive } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { registerMicroApps, start } from "qiankun";

const info = reactive({
    name: "candy",
    age: 6,
});

registerMicroApps([
    {
        name: "react-app", // app name registered
        entry: "//localhost:20000",
        container: "#container",
        activeRule: "/#/react-app",
    },
    {
        name: "vue-app",
        entry: "//localhost:9000", // 子应用入口
        container: "#container", // 挂载到父应用的容器
        activeRule: "/#/vue-app", // 路由
        props: info,
    },
]);

start();

createApp(App).use(store).use(router).mount("#app");
