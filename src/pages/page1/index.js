import "@/assert/less/reset.less";
import Vue from "vue";
import Page1 from "./index.vue";
import "./element.scss";
import {Button} from "element-ui";

Vue.use(Button);

const page1 = new Vue({
    el: "#app",
    render: h => h(Page1)
});

export default page1;
