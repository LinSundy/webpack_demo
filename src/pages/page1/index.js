import Vue from "vue";
import Page1 from "./index.vue";

const page1 = new Vue({
    el: "#app",
    render: h => h(Page1)
});

export default page1;
