//this is a comment in JavaScript (line comment)
/*
Multiline JavaScript comment
 */
//defines variable to access the canvas properties
var canvas = document.getElementById("canvas");
//Defines the drawing context of the canvas
var ctx = canvas.getContext("2d");

//Draw a rectangle

//defines the fill color
ctx.fillStyle = "yellow";
//define outline color
ctx.strokeStyle = "black";
//defines line width
ctx.lineWidth = "5";

//finally draw rectangle fillrect(x,y,width,height)
ctx.fillRect(80, 300, 100, 100);
ctx.strokeRect(80, 300, 100, 100);

//draw a line
//draw MONSTO CARDO
ctx.beginPath();
ctx.fillStyle = "none"
ctx.strokeStyle = "rgb(255,0,0)"; 
ctx.lineWidth = "5"
ctx.lineTo(80, 650)
ctx.lineTo(280, 545)
ctx.stroke()




//Draw a Circle

ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "red";
ctx.lineWidth = "5";

ctx.beginPath()
ctx.arc(385, 440, 50, 0, (4 * Math.PI) / 1, true);
ctx.closePath();
ctx.fill();
ctx.stroke()

//draw a shape
ctx.fillStyle = "#ff00ff";
ctx.strokeStyle = "00ffff";
ctx.lineWidth = "5";
ctx.beginPath()
ctx.moveTo(560, 310);
ctx.lineTo(665, 285);
ctx.lineTo(725, 380);
ctx.lineTo(650, 465);
ctx.lineTo(545, 420);
ctx.closePath();
ctx.stroke();
ctx.fill();

ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "rgb(32,32,32)";
ctx.lineWidth = "5";
ctx.beginPath()
ctx.moveTo(635, 490);
ctx.lineTo(665, 550);
ctx.lineTo(730, 565);
ctx.lineTo(685, 615);
ctx.lineTo(695, 680);
ctx.lineTo(635, 655);
ctx.lineTo(575, 680);
ctx.lineTo(585, 615);
ctx.lineTo(535, 565);
ctx.lineTo(600, 550);
ctx.closePath();
ctx.stroke();
ctx.fill();

//draw image to canvas
//create instance  of image
var mario = new Image();
mario.src = "images/Mario.png"

mario.onload = function () {
    ctx.drawImage(mario, 60, 30, 400, 200)
}