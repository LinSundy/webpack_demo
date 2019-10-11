import "@/assert/less/reset.less";
import Vue from "vue";
import Page1 from "./index.vue";
import "./element.scss";
import {Button} from "element-ui";

Vue.use(Button);

async function timeout() {
    return "hello world";
}
timeout();
console.log("虽然在后面，但是我先执行");

const page1 = new Vue({
    el: "#app",
    render: h => h(Page1)
});

export default page1;
