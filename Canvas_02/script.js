var canvas = document.getElementById("can1");
var ctx = canvas.getContext('2d');

ctx.strokeStyle = "orange";
ctx.lineWidth = "5";
ctx.moveTo(100, 50);
ctx.lineTo(150, 150);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(200, 50);
ctx.lineTo(300, 50);
ctx.stroke();
