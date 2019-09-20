import "./assert/css/index.css";
import "./assert/less/index.module.less";
import Vue from "vue";
import App from "@/App.vue";

const app = new Vue({
    el: "#app",
    render: h => h(App)
});

export default app;
