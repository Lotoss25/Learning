//window.onload = function () {
var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(50, 50, 100, 50);
ctx.clearRect(0, 0, 400, 200);

ctx.strokeStyle = 'red';
ctx.lineWidth = "10";
ctx.rect(50, 50, 100, 50);
ctx.stroke();
//}