<template>
  <div>
    <Hello></Hello>
    <h3 class="font">可以拖拽并且改变大小的弹出框</h3>
    <div>VueDraggableResizable 2</div>
        <div class="font">{{aa}}</div>
  </div>
</template>

<script lang="ts">
import Hello from "@/components/hello.vue"
import Vue from "vue"

const _ = require("lodash")

export default Vue.extend({
  name: "page2",
  computed: {
    aa() {
      return _.join([ "hello", "page22" ], "~")
    }
  },
  components: {
    Hello
  }
})
</script>

<style lang="less" scoped>
.font {
  color: burlywood
}
</style>
