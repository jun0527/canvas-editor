<script setup>
import { useTemplateModuleStore } from "@/stores/templateModule";
import canvasEditorCore from "canvas-core";
import { onMounted, ref, reactive } from "vue";
import Shape from "@/utils/drawShape";
const templateModuleStore = useTemplateModuleStore();
const { useCore, addElement } = canvasEditorCore();
const addItem = () => {
  addElement({
    type: "text",
    text: "Hello",
  });
};
const canvas = ref(null);
const canvas2 = ref(null);
const settings = reactive([
  {
    name: "0DO5jKvr1FSOO",
    w: 100,
    h: 100,
    x: 10,
    y: 100,
    fill: "#00ff00",
    stroke: "#000000",
    strokeWidth: 10,
    strokeStyle: "dashed",
  },
  {
    name: "0DO5jKvr1FSOO",
    w: 100,
    h: 100,
    x: 220,
    y: 50,
    fill: "#00ff00",
    stroke: "#000000",
    strokeWidth: 10,
    strokeStyle: "solid",
  },
  {
    name: "0DO5jKvr1FSOO",
    w: 200,
    h: 200,
    x: 210,
    y: 100,
    fill: "#00ff00",
    stroke: "#000000",
    strokeWidth: 10,
    strokeStyle: "solid",
  },
  {
    name: "0DO5jKvr1FSOO",
    w: 100,
    h: 100,
    x: 610,
    y: 100,
    fill: "#00ff00",
    stroke: "#000000",
    strokeWidth: 0,
    strokeStyle: "solid",
  },
  {
    name: "1Xejm6hMWunF6",
    w: 100,
    h: 100,
    x: 810,
    y: 100,
    fill: "#00ff00",
    stroke: "#000000",
    strokeWidth: 0,
    strokeStyle: "solid",
  },
  {
    name: "1Xejm6hMWunF6",
    w: 100,
    h: 100,
    x: 810,
    y: 300,
    fill: "#00ff00",
    stroke: "#000000",
    strokeWidth: 0,
    strokeStyle: "solid",
  },
  {
    name: "0TtAQdBTlGOEn",
    w: 100,
    h: 100,
    x: 610,
    y: 300,
    fill: "#00ff00",
    stroke: "#000000",
    strokeWidth: 10,
    strokeStyle: "solid",
  },
  {
    name: "0TtAQdBTlGOEn",
    w: 100,
    h: 100,
    x: 510,
    y: 300,
    fill: "#00ff00",
    stroke: "#000000",
    strokeWidth: 10,
    strokeStyle: "solid",
  },
]);
const drawShape = (ctx) => {
  settings.forEach((setting) => {
    //   ctx.fillStyle = setting.fill;
    //   ctx.strokeStyle = setting.stroke;
    //   ctx.lineWidth = setting.strokeWidth;
    //   ctx.lineJoin = setting.strokeStyle;
    //   ctx.rect(setting.x, setting.y, setting.w, setting.h);
    //   ctx.fill();
    //   ctx.stroke();
    const shape = new Shape(ctx, setting);
    shape.draw();
  });
};
const drawCanvas = (ctx) => {
  ctx.fillStyle = "#eeeeee";
  ctx.fillRect(0, 0, 1000, 500);
  drawShape(ctx);
};
onMounted(() => {
  console.log(templateModuleStore.element);
  templateModuleStore.setElement({ elements: [] });
  useCore(templateModuleStore);
  const ctx = canvas.value.getContext("2d");
  drawCanvas(ctx);
});
</script>
<template>
  <div>Editor</div>
  <button @click="addItem">addElement</button>
  {{ templateModuleStore.element }}
  <div class="relative">
    <canvas ref="canvas" id="canvas" width="1000" height="500" :class="['bg-[#DDDDDD]']"></canvas>
  </div>
  <div id="svgArea" class="w-[100px] h-[100px] bg-[#DDDDDD]" />
</template>
