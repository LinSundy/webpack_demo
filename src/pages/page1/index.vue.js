"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import VeRadar from "v-charts/lib/radar.common";
var VeRadar = require('v-charts/lib/radar.common');
// import styles from "@/assert/less/index.module.less";
var styles = require('@/assert/less/index.module.less');
// import a from "@/assert/less/a.less";
var a = require('@/assert/less/a.less');
var hello_vue_1 = __importDefault(require("@/components/hello.vue"));
// import Component from 'vue-class-component';
var Component = require('vue-class-component');
var vue_1 = __importDefault(require("vue"));
var Page1 = /** @class */ (function (_super) {
    __extends(Page1, _super);
    function Page1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.styles = styles;
        _this.a = a;
        _this.setting = {
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
        _this.chartData = {
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
        return _this;
        // data() {
        //     return {
        //         styles,
        //         a,
        //         settings: {
        //             lineStyle: {
        //                 color: "#63D3FF",
        //                 width: 1,
        //                 type: "solid"
        //             },
        //             areaStyle: {
        //                 color: {
        //                     type: "linear",
        //                     x: 0,
        //                     y: 0,
        //                     x2: 0,
        //                     y2: 1,
        //                     colorStops: [
        //                         {
        //                             offset: 0,
        //                             color: "rgba(99, 211, 255, 0.3)" // 0% 处的颜色
        //                         },
        //                         {
        //                             offset: 1,
        //                             color: "rgba(99, 211, 255, 0.3)" // 100% 处的颜色
        //                         }
        //                     ]
        //                 }
        //             },
        //             radar: {
        //                 shape: "polygon",
        //                 indicator: [
        //                     {name: "迁移应用能力", max: 100},
        //                     {name: "信息提取能力", max: 100},
        //                     {name: "提取鉴赏能力", max: 100},
        //                     {name: "整体感知能力", max: 100},
        //                     {name: "推断解释能力", max: 100}
        //                 ]
        //             }
        //         },
        //         chartData: {
        //             columns: [
        //                 "日期",
        //                 "迁移应用能力",
        //                 "信息提取能力",
        //                 "提取鉴赏能力",
        //                 "整体感知能力",
        //                 "推断解释能力"
        //             ],
        //             rows: [
        //                 {
        //                     日期: "1/1",
        //                     迁移应用能力: 40,
        //                     信息提取能力: 93,
        //                     提取鉴赏能力: 62,
        //                     整体感知能力: 80,
        //                     推断解释能力: 19
        //                 }
        //             ]
        //         }
        //     };
        // }
    }
    Page1 = __decorate([
        Component({
            name: "Page1",
            components: {
                VeRadar: VeRadar,
                Hello: hello_vue_1.default
            },
        })
    ], Page1);
    return Page1;
}(vue_1.default));
exports.default = Page1;
;
