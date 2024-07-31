<template>
    <div ref="parent" class="gamemap">
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script>
import { GameMap } from "@/assets/scripts/GameMap";
import { ref, onMounted } from "vue" // onMounted 是在组件挂载完后执行的操作

export default {
    setup() {
        let parent = ref(null);
        let canvas = ref(null);

        onMounted(() => {
            new GameMap(canvas.value.getContext('2d'), parent.value)
        });

        return {
            parent,
            canvas,
        }
    },
}
</script>

<style scoped>
div.gamemap {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-self: center; /* 垂直居中 */
}
</style>