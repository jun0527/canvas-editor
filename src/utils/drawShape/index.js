import otherShape from "./otherShape";

export default class drawShape {
  constructor(ctx, setting) {
    this.ctx = ctx;
    this.setting = setting;
  }
  draw() {
    otherShape(this.ctx, this.setting);
  }
}
