import { SVG } from "@svgdotjs/svg.js";
const drawPathShape = (shapePath, setting) => {
  console.log(setting);
  console.log(shapePath);
  const { w, h, x, y, fill, stroke, strokeWidth, strokeStyle } = setting;
  const draw = SVG().viewbox(0, 0, w, h).width(w).height(h);
  if (strokeWidth > 0) {
    draw.attr("shape-rendering", "geometricPrecision");
  } else {
    draw.attr("shape-rendering", "crispEdges");
  }
  if (strokeStyle === "dashed") {
    draw.attr("stroke-dasharray", "12 12");
  }
  const path = draw.path(shapePath).size(w, h);
  // .size(w - strokeWidth * 2, h - strokeWidth * 2)
  // path.fill(fill).size(w, h);
  // path.stroke({ color: stroke, opacity: 1, width: strokeWidth * 2 });
  if (strokeWidth > 0) {
    const inside = draw.clip().use(path);
    draw
      .use(path)
      .fill(fill)
      .stroke({ color: stroke, opacity: 1, width: strokeWidth * 2 })
      .clipWith(inside);
  } else {
    draw
      .use(path)
      .fill(fill)
      .stroke({ color: stroke, opacity: 1, width: strokeWidth * 2 });
  }
  console.log(draw);
  const img = new Image();
  const svg = draw.svg();
  console.log(svg);
  img.src = "data:image/svg+xml;base64," + btoa(svg);
  return img;
};
const method = {};
method["0DO5jKvr1FSOO"] = (setting) => {
  const path =
    "M37.5 42H4.40004C1.27004 42 -0.859956 38.86 0.340044 36.01L14.44 2.67C15.12 1.05 16.72 0 18.5 0H51.6C54.73 0 56.86 3.14 55.66 5.99L41.56 39.33C40.88 40.95 39.28 42 37.5 42V42Z";
  return drawPathShape(path, setting);
};
// method["1Xejm6hMWunF6"] = (
//   w = 56,
//   h = 42,
//   x = 0,
//   y = 0,
//   fill = "#E8E8E8",
//   stroke = "transparent",
//   strokeWidth = 0,
//   strokeStyle = "solid"
// ) => {
//   const draw = SVG().viewbox(0, 0, w, h).width(w).height(h);
//   if (strokeWidth > 0) {
//     draw.attr("shape-rendering", "geometricPrecision");
//   } else {
//     draw.attr("shape-rendering", "crispEdges");
//   }
//   const path = draw
//     .path(
//       "M30 60C30 60 30.15 45.83 22.78 38.45C16.02 31.69 0 30 0 30C0 30 13.55 31.08 22.16 22.47C29.56 15.07 30 0 30 0C30 0 31.38 15.7 38.15 22.47C44.3 28.62 60 30 60 30C60 30 45.53 30.46 38.15 37.84C30.77 45.22 30 60 30 60Z"
//     )
//     .size(w, h);
//   // .size(w - strokeWidth * 2, h - strokeWidth * 2)
//   // path.fill(fill).size(w, h);
//   // path.stroke({ color: stroke, opacity: 1, width: strokeWidth * 2 });
//   if (strokeWidth > 0) {
//     const inside = draw.clip().use(path);
//     draw
//       .use(path)
//       .fill(fill)
//       .stroke({ color: stroke, opacity: 1, width: strokeWidth * 2 })
//       .clipWith(inside);
//   } else {
//     draw
//       .use(path)
//       .fill(fill)
//       .stroke({ color: stroke, opacity: 1, width: strokeWidth * 2 });
//   }
//   console.log(draw);
//   const img = new Image();
//   const svg = draw.svg();
//   // const serializer = new XMLSerializer();
//   // const svgStr = serializer.serializeToString(svg);
//   console.log(svg);
//   img.src = "data:image/svg+xml;base64," + btoa(svg);

//   // const blob = new Blob([svg], { type: "image/svg+xml" });
//   // img.src = URL.createObjectURL(blob);
//   // img.src = "data:image/svg+xml;charset=utf8," + encodeURIComponent(svgStr);
//   // console.log(blob);
//   console.log(img);
//   return img;
// };
method["1Xejm6hMWunF6"] = (setting) => {
  const path =
    "M30 60C30 60 30.15 45.83 22.78 38.45C16.02 31.69 0 30 0 30C0 30 13.55 31.08 22.16 22.47C29.56 15.07 30 0 30 0C30 0 31.38 15.7 38.15 22.47C44.3 28.62 60 30 60 30C60 30 45.53 30.46 38.15 37.84C30.77 45.22 30 60 30 60Z";
  return drawPathShape(path, setting);
};
method["0TtAQdBTlGOEn"] = (setting) => {
  const path =
    "M30 0L40.44 4.8L51.22 8.79L55.2 19.56L60 30L55.2 40.44L51.22 51.21L40.44 55.2L30 60L19.57 55.2L8.79 51.21L4.81 40.44L0 30L4.81 19.56L8.79 8.79L19.57 4.8L30 0Z";
  return drawPathShape(path, setting);
};
export default function otherShape(
  ctx,
  // {
  //   name,
  //   w = 56,
  //   h = 42,
  //   x = 0,
  //   y = 0,
  //   fill = "#E8E8E8",
  //   stroke = "transparent",
  //   strokeWidth = 0,
  //   strokeStyle = "solid",
  // } = {}
  setting
) {
  console.log(setting);
  console.log(ctx);
  // console.log(svg);
  // console.log("data:image/svg+xml;base64," + btoa(svg));
  // console.log(img);
  // ctx.fillStyle = "#cccccc";
  // ctx.fillRect(x, y, w, h);
  ctx.globalAlpha = 0.5;
  // console.log(name);

  ctx.drawImage(method[setting.name](setting), setting.x, setting.y);
}

// export default function otherShape(
//   ctx,
//   {
//     w = 56,
//     h = 42,
//     x = 0,
//     y = 0,
//     fill = "#E8E8E8",
//     stroke = "transparent",
//     strokeWidth = 0,
//     strokeStyle = "solid",
//   } = {}
// ) {
//   ctx.save();

//   // 設置線條樣式
//   ctx.lineWidth = strokeWidth * 2;
//   ctx.strokeStyle = stroke;
//   ctx.setLineDash(strokeStyle === "dashed" ? [5, 5] : []);

//   // 計算縮放比例
//   const scaleX = w / 56;
//   const scaleY = h / 42;

//   // 開始繪製路徑
//   ctx.beginPath();

//   // 移動到起始點
//   ctx.moveTo(x + 37.5 * scaleX, y + 42 * scaleY);

//   // 左邊
//   ctx.lineTo(x + 4.4 * scaleX, y + 42 * scaleY);

//   // 左下圓角
//   ctx.bezierCurveTo(
//     x + 1.27 * scaleX,
//     y + 42 * scaleY,
//     x - 0.86 * scaleX,
//     y + 38.86 * scaleY,
//     x + 0.34 * scaleX,
//     y + 36.01 * scaleY
//   );

//   // 左側路徑
//   ctx.lineTo(x + 14.44 * scaleX, y + 2.67 * scaleY);

//   // 左上圓角
//   ctx.bezierCurveTo(
//     x + 15.12 * scaleX,
//     y + 1.05 * scaleY,
//     x + 16.72 * scaleX,
//     y,
//     x + 18.5 * scaleX,
//     y
//   );

//   // 頂部
//   ctx.lineTo(x + 51.6 * scaleX, y);

//   // 右上圓角
//   ctx.bezierCurveTo(
//     x + 54.73 * scaleX,
//     y,
//     x + 56.86 * scaleX,
//     y + 3.14 * scaleY,
//     x + 55.66 * scaleX,
//     y + 5.99 * scaleY
//   );

//   // 右側路徑
//   ctx.lineTo(x + 41.56 * scaleX, y + 39.33 * scaleY);

//   // 右下圓角
//   ctx.bezierCurveTo(
//     x + 40.88 * scaleX,
//     y + 40.95 * scaleY,
//     x + 39.28 * scaleX,
//     y + 42 * scaleY,
//     x + 37.5 * scaleX,
//     y + 42 * scaleY
//   );

//   // 關閉路徑
//   ctx.closePath();
//   ctx.globalAlpha = 0.5;
//   ctx.clip();

//   // 填充和描邊
//   // ctx.save();
//   ctx.fillStyle = fill;
//   // ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
//   // ctx.globalAlpha = 1;
//   // ctx.clearRect(x, y, w, h);
//   // ctx.globalCompositeOperation = "source-over";
//   ctx.fill();
//   // ctx.globalCompositeOperation = "source-in";
//   if (strokeWidth > 0) {
//     ctx.save();
//     // ctx.globalCompositeOperation = "xor";
//     ctx.stroke();
//   }
//   ctx.restore();
//   // ctx.restore();
//   ctx.restore();
// }
