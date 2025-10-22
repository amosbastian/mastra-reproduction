import Konva from "konva";
import "konva/canvas-backend";

const text = new Konva.Text({
  fontFamily: "Arial",
  fontSize: 124,
  text: "Some text",
  width: 300,
});

const textHeight = text.height();

console.log("Text height:", textHeight);
