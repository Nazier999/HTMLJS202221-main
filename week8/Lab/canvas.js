var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var timer = requestAnimationFrame(main);

var start = 58;
var finish = 956;

//car variable
var carPos = 2;
var startFuel = randomNumber(canvas.width, 600);
var speed = 3;
var gameOver = true;

//start timer vars
var seconds = 3;
var fps = 60;
var frames = fps;


//terrain and car
var van = new Image();
var road = new Image();

//terrain and car src
van.src = "images/Van.png"
road.src = "images/DesertRoad.jpg"

//car sprite
var car= new Image();
car.src = "images/Car.png";

car.onload = function(){
    main();
}
var carWidth = 50;


//addEventListener
document.addEventListener('keydown', pressSpace)

//add key function
function pressSpace(e) {
    if (e.keyCode == 32 && gameOver) {
        gameOver = false;
    }
    if (fuel <= 0) {
        restartGame();
    }
}
//create Healthbar
var fuel = startFuel;
var fuelBarWidth = 512;

function main() {
    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

   

    if (gameOver) {
        console.log("working");
        //main menu screen
        ctx.save();
        ctx.fillStyle = 'black';
        ctx.font = '30px Arial';
        ctx.textAlign = "center";
        ctx.fillText('press space to start', canvas.width / 2, canvas.height / 2);
        ctx.restore();
    }

    else {
        if(!gameOver && seconds > 0){
            runStartTimer();
            drawStartTimer();
        }else{
        //update the car pos
        if (fuel > 0) {
            carPos += speed;
            //healthbar
            fuel -= speed;
            }
        }
        ctx.drawImage(road, 0, 0, 1024, 768);

        drawStartFinishLines();
        drawCar();


        drawFuelBar();


       
        
        if (fuel <= 0 || carPos + 40 > finish) {

        if (fuel <= 0 || carPos + carWidth > finish) {

            drawResults();

        }
        ctx.drawImage(van,carPos, 720, 80, 40);    
       
    }
//make bacground image


    //refresh main function 

    timer = requestAnimationFrame(main)

}

function drawStartFinishLines() {
    //draw startline
    ctx.fillStyle = 'black';
    ctx.fillRect(start, 615, 15, 150, 200);
    //draw finish line
    ctx.fillRect(finish, 615, 15, 150, 200);
}
function drawCar() {
    //ctx.fillStyle = 'red';
    //ctx.fillRect(carPos, canvas.height / 2, 40, 20);
}

//utility function 
function randomNumber(high, low) {
    return Math.round(Math.random() * (high - low) + low);
    
}
function runStartTimer(){
    frames -= 1;
    if(frames < 0){
        frames = fps
        seconds -=1;
    }
}

function drawStartTimer(){
    if(seconds > 0){
        ctx.save();
        ctx.fillStyle = 'black';
        ctx.font = '30px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(seconds, canvas.width/2, canvas.height/2)
        ctx.restore();
    }else{
        ctx.save();
        ctx.fillStyle = 'black';
        ctx.font = '30px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(seconds, canvas.width/2, canvas.height/2)
        ctx.restore();
    }
        ctx.save();
        ctx.fillStyle = 'black';
        ctx.font = '30px Arial';
        ctx.textAlign = 'center';
        ctx.fillText("GO", canvas.width/2, canvas.height/2)
        ctx.restore();
}

function drawStartFinsihLines() {
    //draw startline
    ctx.fillStyle = 'black';
    ctx.fillRect(start, 50, 10, 500);
    //draw finish line
    ctx.fillRect(finish, 50, 10, 500);
}

function drawCar() {
    //ctx.fillStyle = 'red';

   // ctx.fillRect(carPos, canvas.height / 2, 40, 20);

    //ctx.fillRect(carPos, canvas.height / 2, 40, 20);
    ctx.drawImage(car, carPos, canvas.height/2, 50, 20);
}


function drawFuelBar() {
    //draw fuel HUD
    var currentBarWidth = fuelBarWidth * (fuel / startFuel);
    ctx.fillStyle = 'Black'
    ctx.fillRect(start, 30, fuelBarWidth, 10)
    ctx.font = "25px Arial";
    ctx.fillText("Fuel", start, 25)
    if (fuel > 0) {
        ctx.fillStyle = "green";
        ctx.fillRect(start, 30, currentBarWidth, 10);
    }

}

function drawResults() {
    if (carPos + 40 > finish) {
        ctx.save();
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.textAlign = 'center';
        ctx.fillText("You made it to the finish. Tou Win!", canvas.width / 2, canvas.height / 2)
        ctx.restore();
    }
    else {
        ctx.save();
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.textAlign = 'center';
        ctx.fillText("You ran out of fuel. You Lose!", canvas.width / 2, canvas.height / 2)
        ctx.restore();
    }
}
 function restartGame(){
    location.reload();
 }
