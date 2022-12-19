// const canvas = $("starry_night_background");
// canvas api
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
// canvas rencdering context 2d
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
const canvas = document.getElementById("starry_night_background");
const ctx = canvas.getContext("2d");

// set the width and height of the canvas to be the screen's dimensions.
// setting the width to exactly the screen's width causes the horizontal scroll 
// bar to appear.
canvas.width = screen.width - 20;
canvas.height = screen.height;

// fix the canvas' position such that it is unaffected by scrolling.

// send this canvas element all the way to the back of the window.

// set all pixels to black
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// randomly select some pixels to be white
ctx.fillStyle = "white";
/**
 * Array
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */
var isTwinkle = Array(canvas.width)
for (let i = 0; i < canvas.width; i++) {
    let arr = Array(canvas.height);
    for (let j = 0; j < canvas.height; j++) {
        /**
         * Math.random()
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
         */
        arr[j] = Math.random() > 0.95;
        if (arr[j]) {
            ctx.fillRect(i, j, 1, 1);
        }
    }
    isTwinkle[i] = arr;
}
// Math.randomInt()

// create falling stars

// create shooting stars

// add black gradient in the center to make terminal text more visible

// add white gradients for aesthetic effect

// procedurally select which pixels to intialize to white based on an image or 
// some kind of heat map.