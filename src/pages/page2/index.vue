<template>
    <div>
        <Hello></Hello>
        <h3>可以拖拽并且改变大小的弹出框</h3>
        <div>
            VueDraggableResizable 2
        </div>
    </div>
</template>

<script>
    import Hello from "@/components/hello.vue";

    export default {
        name: "page2",
        components: {
            Hello
        }
    };
</script>
