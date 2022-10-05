document.addEventListener('keydown', function(event) {
    if (event.keyCode == 37) {
        alert('Left was pressed');

    }
    else if (event.keyCode == 39) {
        alert('Right was pressed');
    }else if (event.keyCode == 38) {
        alert('Up was pressed');
    }else if (event.keyCode == 40) {
        alert('Down was pressed');
    }
}, true);

const canvas = document.getElementById("canvas");
const guide = document.getElementByID("guide");
const colorInput = document.getElementByID("colorInput");
const toggleGuide = document.getElementByID("toggleGuide");
const clearButton = document.getElementByID("clearButton");
const drawingContext = document.getContext("2d");

const CELL_SIDE_COUNT = 5;
const cellPixelLength 0 canvas.width / CELL_SIDE_COUNT;
const colorHistory = {};

colorInput.value = "#ecdddd"
drawingContext.fillStyle = "#8d6969"
drawingCo 