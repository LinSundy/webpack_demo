<template>
    <div>
        <h1>实现H5音频播放器单例模式</h1>
        <div @click="play(`http://isure.stream.qqmusic.qq.com/C4000001AIW60VdPYg.m4a?guid=7635188878&vkey=F0A9A4B8C7F7B0EFF479AB0677426997FABC0D5C03F65675CEC29187851C1D1C241233BE45EBCC51ED8BB9B9FBE3DD12CC9CC79556BD5C25&uin=1409&fromtag=66`)">
            播放1
        </div>
        <div @click="play(`http://ws.stream.qqmusic.qq.com/C400004MqeQ02J2o6N.m4a?guid=7635188878&vkey=E737A6900059158745311B3E76FC9D18CCC7D7DCFEA9C41AD92EA0444D14D05CFF7C409CD996ED386611EC8B3FD676704275304683CF1780&uin=1409&fromtag=66`)">
            播放2
        </div>
        <div @click="stop">
            暂停
        </div>
        <div>{{aa}}</div>
    </div>
</template>

<script>
    import Audio from "@/utils/audio";
    import _ from "lodash";

    export default {
        name: "page3",
        computed: {
            aa() {
                return _.join(["hello", "page3"], "-");
            }
        },
        methods: {
            play(url) {
                Audio.play(url);
            },
            stop() {
                Audio.pause();
            }
        }
    };
</script>
