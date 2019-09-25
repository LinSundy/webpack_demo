<template>
    <div>
        <Hello></Hello>
        我是page2
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
