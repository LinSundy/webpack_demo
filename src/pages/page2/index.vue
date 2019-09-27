<template>
    <div>
        <Hello></Hello>
        <h3>可以拖拽并且改变大小的弹出框</h3>
        <div>
            VueDraggableResizable 2
        </div>
        <div>{{aa}}</div>
    </div>
</template>

<script>
    import Hello from "@/components/hello.vue";
    import _ from "lodash";

    export default {
        name: "page2",
        computed: {
            aa() {
                return _.join(["hello", "page22"], "~");
            }
        },
        components: {
            Hello
        }
    };
</script>
