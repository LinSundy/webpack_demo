<template>
  <div>
    <Hello></Hello>
    <ve-radar
      :settings="settings"
      :extend="{radar: settings.radar}"
      :tooltip-visible="false"
      :legend-visible="false"
      :data="chartData"
    ></ve-radar>
    <div class="red">2222</div>
    <i class="arrow"></i>
    <div :class="styles.content">
      <span>大家好,还少一个配置文件1</span>
    </div>
    <div>测试a.less</div>
    <div>{{this.add(1, 2)}}</div>
    <el-button type="primary">demo</el-button>
  </div>
</template>

<script lang="ts">
// import VeRadar from "v-charts/lib/radar.common";
const VeRadar = require("v-charts/lib/radar.common")
// import styles from "@/assert/less/index.module.less";
const styles = require("@/assert/less/index.module.less")
// import a from "@/assert/less/a.less";
import Hello from "@/components/hello.vue"
import Component from "vue-class-component"
import Vue from "vue"

@Component({
  name: "Page1",
  components: {
    VeRadar,
    Hello
  }
})
export default class Page1 extends Vue {
  styles = styles;
  settings = {
    lineStyle: {
      color: "#63D3FF",
      width: 1,
      type: "solid"
    },
    areaStyle: {
      color: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: "rgba(99, 211, 255, 0.3)" // 0% 处的颜色
          },
          {
            offset: 1,
            color: "rgba(99, 211, 255, 0.3)" // 100% 处的颜色
          }
        ]
      }
    },
    radar: {
      shape: "polygon",
      indicator: [
        { name: "迁移应用能力", max: 100 },
        { name: "信息提取能力", max: 100 },
        { name: "提取鉴赏能力", max: 100 },
        { name: "整体感知能力", max: 100 },
        { name: "推断解释能力", max: 100 }
      ]
    }
  };
  chartData = {
    columns: [
      "日期",
      "迁移应用能力",
      "信息提取能力",
      "提取鉴赏能力",
      "整体感知能力",
      "推断解释能力"
    ],
    rows: [
      {
        日期: "1/1",
        迁移应用能力: 40,
        信息提取能力: 93,
        提取鉴赏能力: 62,
        整体感知能力: 80,
        推断解释能力: 19
      }
    ]
  };

  add(arg1: number, arg2: number): number {
    return arg1 + arg2
  }
}
</script>
<style lang="less">
  .red {
    color: red;
  }
</style>
