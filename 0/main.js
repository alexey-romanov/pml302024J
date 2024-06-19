import { getClearColor } from "./math.js";
// import { Pane } from "tweakpane";

function main() {
  const element = document.querySelector("#glcanvas");
  const gl = element.getContext("webgl2");

  if (gl === null) {
    alert("WebGL2 not supported");
    return;
  }

  gl.clearColor(...getClearColor());
  // gl.clearColor(1, 0, 0, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // const pane = new Pane();

  const PARAMS = {
    background: { r: 1.0, g: 0, b: 0.3 },
  };
  // pane.addBinding(PARAMS, "background", {
  //   color: { type: "float" },
  // });

  const anim = () => {
    gl.clearColor(
      PARAMS.background.r,
      PARAMS.background.g,

      PARAMS.background.b,

      1,
    );
    gl.clear(gl.COLOR_BUFFER_BIT);

    window.requestAnimationFrame(anim);
  };

  anim();
}

window.addEventListener("load", () => {
  main();
});

export function onButtonClick() {
  console.log("AB C");
}
