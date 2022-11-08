var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var timer = requestAnimationFrame(main);
var x = 300;
var y = 300;
var radius = 50;
var speedX = 5;
var speedY = 5;
//loading image sprites
var shrek = new Image();
shrek.src = "images/Shrek.png";
shrek.onload = function(){
    main();
}
var bg = new Image();
bg.src = 'images/GreenHillClassicWorld.webp'
bg.onload = function(){
    main ();
}
function main() {
    //clear the canvas
    ctx.clearRect(0,0, canvas.width, canvas.height);
    //call circle function
    //drawCircle("blue",x,y,radius);
    drawCircle("green",x, y, radius);
    ctx.drawImage(bg,0,0,canvas.width,canvas.height)
    ctx.drawImage(shrek, x-radius, y-radius, 100, 100)
    //update the position of object
    x += speedX;
    y += speedY;
    //create a condition when offscreen
    createCanvasBoundary(x, canvas.width, radius, "speedX")
    createCanvasBoundary(y, canvas.height, radius, "speedY")
    
    //update animation frame
    timer = requestAnimationFrame(main);
    console.log(x);
}

function drawCircle(color, posX, posY, radius){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(posX, posY, radius, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fill();
}
function createCanvasBoundary(position, canvasSize, objectRadius, direction){
     //create a condition when offscreen
     if(position > canvasSize - objectRadius || position < objectRadius){
        if(direction == "speedX"){
            speedX *= -1
        }
        else{
            speedY*= -1
        }
    }
}