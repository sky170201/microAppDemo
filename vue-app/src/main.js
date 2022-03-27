import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// window.__POWERED_BY_QIANKUN__ qiankun框架上挂载的变量
if (!window.__POWERED_BY_QIANKUN__) {
    render({});
}

let instance;
function render(props = {}) {
    console.log("props", props);
    const { container, info } = props;
    instance = new Vue({
        data: info,
        router,
        store,
        render: (h) => h(App),
    }).$mount(container ? container.querySelector("#app") : "#app");
}

export async function bootstrap() {
    console.log("react app bootstraped");
}

export async function mount(props) {
    // 挂载的时候调用render挂载子应用
    render(props);
}

export async function unmount() {
    // 卸载时卸载子应用
    console.log(instance, "instance");
    instance.$destroy();
}
