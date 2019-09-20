<template>
    <div>
        <ve-radar
                :settings="settings"
                :extend="{radar: settings.radar}"
                :tooltip-visible="false"
                :legend-visible="false"
                :data="chartData"
        ></ve-radar>
        <span>大家好,还少一个配置文件1</span>
        <i class="arrow"></i>
    </div>
</template>

<script>
    import VeRadar from "v-charts/lib/radar.common";

    export default {
        name: "App",
        components: {
            VeRadar
        },
        data() {
            return {
                settings: {
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
                            {name: "迁移应用能力", max: 100},
                            {name: "信息提取能力", max: 100},
                            {name: "提取鉴赏能力", max: 100},
                            {name: "整体感知能力", max: 100},
                            {name: "推断解释能力", max: 100}
                        ]
                    }
                },
                chartData: {
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
                }
            };
        }
    };
</script>

<style scoped>
</style>
