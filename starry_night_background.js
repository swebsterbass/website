// canvas api
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
// canvas rencdering context 2d
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
const canvas = document.getElementById("starry_night_splash");
const ctx = canvas.getContext("2d");

/**
 * set the width and height of the canvas to be the screen's dimensions.
 * setting the width to exactly the screen's width causes the horizontal scroll 
 * bar to appear.
 * 
 * this bar will appear because once you start adding elements vertically below
 * the canvas, a vertical scrollbar will appear to accomadate the height of the 
 * parent element. the vertical scrollbar now occludes some of the canvas since 
 * the canvas is exactly the width of the window. so in order to make the
 * pixels occluded by the vertical scroll bar of the canvas visible, a
 * horizontal scroll bar is activated in the window.
 * 
 * https://stackoverflow.com/questions/70058848/why-does-a-horizontal-scroll-bar-appear-when-adding-small-div-below-html-canvas
 * https://stackoverflow.com/questions/1664785/resize-html5-canvas-to-fit-window
 */

/**
 * document.documentElement
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement
 */
canvas.height = document.documentElement.clientHeight;
// subtracted the minimum number of pixels from my background to keep the 
// horizontal scrollbar from appearing on my laptop.
// canvas.width = document.documentElement.clientWidth - 17;
// bypassed the need to subtract pixels to compensate for the scrollbar by 
// setting overflow-x to hidden to simply clip any overflow pixels.
canvas.width = document.documentElement.clientWidth;

// fix the canvas' position such that it is unaffected by scrolling.

// send this canvas element all the way to the back of the window.

function drawStars () {
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
            arr[j] = Math.random() > (0.95 + 0.05 * j / canvas.height);
            if (arr[j]) {
                ctx.fillRect(i, j, 1, 1);
            }
        }
        isTwinkle[i] = arr;
    }
    // Math.randomInt()
}

drawStars()

// i may need to use the ImageData attribute of the canvas element for the 
// animation if i want to try to multiply the previous image with the current 
// image (which would also include any newly created stars).
// https://developer.mozilla.org/en-US/docs/Web/API/ImageData
// create falling stars

// create shooting stars

// add black gradient in the center to make terminal text more visible

// add white gradients for aesthetic effect

// procedurally select which pixels to intialize to white based on an image or 
// some kind of heat map.

// for animating stars maybe try using attractors that moves stars in different 
// directions based on some force of gravity that changes with distance from 
// said attractor.

/**
 * window resize event
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event
 * 
 * events
 * https://developer.mozilla.org/en-US/docs/Web/Events
 * 
 * addeventlistener
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 */

// no longer using this because i instead have it such that 
// window.addEventListener("resize",
//     function() {
//         // if i don't like how i did resizing
//         // https://stackoverflow.com/questions/47272340/resize-canvas-to-whole-screen-after-it-was-drawn
//         canvas.width = document.documentElement.clientWidth;
//         canvas.height = document.documentElement.clientHeight;
//         // from my tests it seems that the canvas is cleared to be transparent
//         // after resizing the canvas.
//         drawStars();
//     }
// );