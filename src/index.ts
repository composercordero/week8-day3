import { Canvas, Component } from './Widget';


const canvas = new Canvas(document.body);
console.log(canvas);

const myComponent = new Component();
console.log(myComponent);
console.log(myComponent.shape);
console.log(myComponent.shape.attributes);
