//canvas stuff
var bg = new Image();
bg.src = 'Week6/CanvasAnimationLab/images/images.hero.avif'
bg.onload = function(){
    main ();
}
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

ctx.font = '40px Arial';
ctx.fillStyle = "purple";
ctx.strokeStyle = 'yellow'
ctx.fillText("Welcome to our RPS game!", 200, 280);
ctx.strokeText("Welcome to our RPS game!", 200,280)
var x = 300;
var y = 300;
var radius = 50;
var speedX = 5;
var speedY = 5;

//alert('hello this is the alert');
//Array datatype
//var rps = ["Rock", "Paper", "Scissors"];
//var rps= new Array;()
var rps = [];
rps[0] = "Rock";
rps[1] = "Paper";
rps[2] = "Scissors";


document.getElementById("rock").addEventListener("click", function (e) {
    ctx.clearRect(0,0, canvas.width, canvas.height)
    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("you clicked " + rps[0], canvas.width / 2, 200);
    playGame(rps[0]);
});
document.getElementById("paper").addEventListener("click", function (e) {
    ctx.clearRect(0,0, canvas.width, canvas.height)
    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("you clicked " + rps[1], canvas.width / 2, 200);
    playGame(rps[1]);
});
document.getElementById("scissors").addEventListener("click", function (e) {
    ctx.clearRect(0,0, canvas.width, canvas.height)
    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("you clicked " + rps[2], canvas.width / 2, 200);
    playGame(rps[2]);
});
function main() {
    //clear the canvas
    ctx.clearRect(0,0, canvas.width, canvas.height);
}

ctx.drawImage(bg,0,0,canvas.width,canvas.height)


function playGame(playerChoice) {
    var cpuChoice = Math.floor(Math.random() * 2.99);
    console.log(cpuChoice, playerChoice)
    
    switch (playerChoice) {
        case "Rock":
            if (cpuChoice == 0) {
                //itsa tie
                
                ctx.font = "30px Arial";
                ctx.fillStyle = "red";
                ctx.textAlign = "center";
                ctx.fillText("CPU chose rock, it's a tie!", canvas.width / 2, 400);
            }
            else if (cpuChoice == 1) {
              
                ctx.font = "30px Arial";
                ctx.fillStyle = "red";
                ctx.textAlign = "center";
                ctx.fillText("CPU chose paper, you lose!", canvas.width / 2, 400);
            }
            else {  
               
                ctx.font = "30px Arial";
                ctx.fillStyle = "red";
                ctx.textAlign = "center";
                ctx.fillText("CPU chose scissors, you win!", canvas.width / 2, 400);
            }
            break;
        case "Paper":
            if (cpuChoice == 0) {
                //itsa tie
                ctx.clearRect
                ctx.font = "30px Arial";
                ctx.fillStyle = "red";
                ctx.textAlign = "center";
                ctx.fillText("CPU chose rock, you win!", canvas.width / 2, 400);
            }
            else if (cpuChoice == 1) {
                
               ctx.font = "30px Arial";
                ctx.fillStyle = "red";
                ctx.textAlign = "center";
                ctx.fillText("CPU chose scissors, you lose!", canvas.width / 2, 400);
            }
            else {
                
                ctx.font = "30px Arial";
                ctx.fillStyle = "red";
                ctx.textAlign = "center";
                ctx.fillText("CPU chose scissors, you lose!", canvas.width / 2, 400);
            }
            break;
        case "Scissors":
            if (cpuChoice == 0) {
                //itsa tie
                
                ctx.font = "30px Arial";
                ctx.fillStyle = "red";
                ctx.textAlign = "center";
                ctx.fillText("CPU chose rock, you lose!", canvas.width / 2, 400);
            }
            else if (cpuChoice == 1) {
                
                ctx.font = "30px Arial";
                ctx.fillStyle = "red";
                ctx.textAlign = "center";
                ctx.fillText("CPU chose paper you win!", canvas.width / 2, 400);
            }
            else {
                
                ctx.font = "30px Arial";
                ctx.fillStyle = "red";
                ctx.textAlign = "center";
                ctx.fillText("CPU chose scissors, its a tie!", canvas.width / 2, 400);
            }
            break;

    }
}