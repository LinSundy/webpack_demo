<template>
  <Dialog :visible="true">
    这就是弹出框
  </Dialog>
</template>
<script>
import {Dialog} from "element-ui"
export default {
  name: 'Modal',
  components: {
    Dialog
  }
}
</script>