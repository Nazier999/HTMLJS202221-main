//canvas stuff
var canvas = document.getElementById("c");
var ctx = canvas.getContext('2d');


//create instances for images rps
var rock = new Image();
var paper = new Image();
var scissors = new Image();
var hrock = new Image();
var hpaper = new Image();
var hscissors = new Image();
var goku = new Image();
var vegeta = new Image();






//utility function
function randomNumber(high,low){
    return Math.round(Math.random() * (high - low) + low);
}

var startHealth = 100;//randomNumber(canvas.width, 600);
var gokuhealth = startHealth;
var vegetahealth = startHealth;
var healthBarWidth = 300;

function drawHealthBar(){
    //draw fuel HUD
    var gokucurrentBarWidth = healthBarWidth * (gokuhealth/startHealth);
    var vegetacurrentBarWidth = healthBarWidth * (vegetahealth/startHealth);
    ctx.save();
    ctx.fillStyle = 'Black'
    ctx.fillRect(70,30,healthBarWidth,10)
    ctx.fillRect(670,30,healthBarWidth,10)
    
    if(gokuhealth>0){
        ctx.fillStyle = "green";
        ctx.font = "25px Arial";
        ctx.fillText("hp", 50,40)
        ctx.fillRect(70,30, gokucurrentBarWidth, 10);
        
    }
    if(vegetahealth>0){
        ctx.fillStyle = "green";
        ctx.font = "25px Arial";
        ctx.fillText("hp", 650,40)
        ctx.fillRect(670,30, vegetacurrentBarWidth, 10);
    }
    ctx.restore();
}

rock.src = "images/rock.jpg";
paper.src = "images/paper.jpg";
scissors.src = "images/scissors.jpg";

hrock.src = "images/rock2.jpg";
hpaper.src = "images/paper2.jpg";
hscissors.src = "images/scissors2.jpg";

goku.src = "images/goku.png";
vegeta.src = "images/Vegeta.png";

var result = "select a button from above to choose";

hscissors.onload = function(){
    draw(rock, paper, scissors, rock, paper, scissors);
}

document.addEventListener("keydown", keyPressDown)
document.addEventListener("keyup", keyPressUp)

var gameOver = true;

function keyPressDown(e){
    console.log(e.keyCode)
    if(e.keycode == 32)
    gameOver= false;
}

    function keyPressUp(e){
        console.log(e.keyCode)
        if(e.keyCode == 32){
            gameOver = false;
            draw(rock, paper, scissors, rock, paper, scissors, goku, vegeta);
        }

}
function Win(e) {
    if (vegetahealth <= 0) {
      gameOver == true;
    if(gameOver == true)
    restartGame();
    }
}


function draw(rock, paper, scissors, crock, cpaper, cscissors, goku, vegeta){
    if(gameOver == true){
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = "black";
        ctx.fillText("Welcome Press Space to play", canvas.width/2,100);
        return;
    }
        //clear canvas
        ctx.clearRect(0,0,canvas.width,canvas.height)
        
        ctx.fillText("Goku", canvas.width/4,100)
        ctx.drawImage(goku, 0, 90, 550, 800)
        
        ctx.fillText("Vegeta", canvas.width/1.25,100)
        ctx.drawImage(vegeta, 650, 90, 400, 750)

        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = "black";
        ctx.fillText("Player Choices", canvas.width/2,100);
        ctx.drawImage(rock, canvas.width/2 - rock.width/2 - 100, 150);
        ctx.drawImage(paper, canvas.width/2 - paper.width/2, 150);
        ctx.drawImage(scissors, canvas.width/2 - scissors.width/2 + 100, 150);

        ctx.fillText("Computer Choices", canvas.width/2,325);
        ctx.drawImage(crock, canvas.width/2 - rock.width/2 - 100, 375);
        ctx.drawImage(cpaper, canvas.width/2 - paper.width/2, 375);
        ctx.drawImage(cscissors, canvas.width/2 - scissors.width/2 + 100, 375);

        ctx.fillText(result, canvas.width/2, 525);
        drawHealthBar();
}

//var canvas = document.getElementById("c");
//var ctx = canvas.getContext("2d");

//ctx.font = '40px Arial';
//ctx.fillStyle = "purple";
//ctx.strokeStyle = 'yellow';
//ctx.fillText("Welcome to our RPS game!", 200, 280);
//ctx.strokeText("Welcome to our RPS game!", 200,280)


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
    //alert('you clicked ' + rps[0]);
    playGame(rps[0]);
});
document.getElementById("paper").addEventListener("click", function (e) {
    //alert('you clicked ' + rps[1])
    playGame(rps[1]);
});
document.getElementById("scissors").addEventListener("click", function (e) {
    //alert('you clicked ' + rps[2])
    playGame(rps[2]);
});
function main() {
    //clear the canvas
    ctx.clearRect(0,0, canvas.width, canvas.height);
}



function playGame(playerChoice) {
    if(gameOver == true){
        return;
    }
    var cpuChoice = Math.floor(Math.random() * 2.99);
    console.log(cpuChoice, playerChoice)

    switch (playerChoice) {
        case "Rock":
            if (cpuChoice == 0) {
                //itsa tie
                //alert("CPU chose Rock. It's a tie!")
                result = "CPU chose rock. its a tie"
                vegetahealth -= 10;
                gokuhealth -= 10;
                draw(hrock,paper,scissors,hrock,paper,scissors,goku,vegeta)
                
            }
            else if (cpuChoice == 1) {
                //alert("CPU cose paper. CPU wins!");
                result = "CPU chose paper. CPU wins";
                gokuhealth -= 20;
                draw(hrock,paper,scissors,rock,hpaper,scissors,goku,vegeta)
                
            }
            else {
                //alert("CPU chose Scissors. You win!")
                result = "CPU chose rock. You Win!";
                vegetahealth -= 20;
                draw(hrock,paper,scissors,rock,paper,hscissors,goku,vegeta)
                
            }
            break;
        case "Paper":
            if (cpuChoice == 0) {
                //itsa tie
                //alert("CPU chose Rock. You Win!")
                result = "CPU chose rock. You Win!"
                vegetahealth -= 20;
                draw(rock,hpaper,scissors,hrock,paper,scissors,goku,vegeta)
            }
            else if (cpuChoice == 1) {
                //alert("CPU cose paper. It's a tie!");
                result = "CPU chose paper. It's a tie!"
                vegetahealth -= 10;
                gokuhealth -= 10;
                draw(rock,hpaper,scissors,rock,hpaper,scissors,goku,vegeta)
            }
            else {
                //alert("CPU chose Scissors. You Lose!")
                result = "CPU chose scissors. CPU Wins!"
                gokuhealth -= 20;
                draw(rock,hpaper,scissors,rock,paper,hscissors,goku,vegeta)
            }
            break;
        case "Scissors":
            if (cpuChoice == 0) {
                //itsa tie
                //alert("CPU chose Rock. You Lose!")
                result = "CPU chose scissors. CPU Wins!"
                gokuhealth -= 20;
                draw(rock,paper,hscissors,hrock,paper,scissors,goku,vegeta)
            }
            else if (cpuChoice == 1) {
                //alert("CPU cose paper. It's a Win!");
                result = "CPU chose paper. You Win!"
                vegetahealth -= 20;
                draw(rock,paper,hscissors,rock,hpaper,scissors,goku,vegeta)
            }
            else {
               // alert("CPU chose Scissors. It's a Tie!")
               result = "CPU chose scissors. It's a Tie!"
               vegetahealth -= 10;
                gokuhealth -= 10;
               draw(rock,paper,hscissors,rock,paper,hscissors,goku,vegeta)
            }
            break;

    }
}

function restartGame(){
    location.reload();
 }