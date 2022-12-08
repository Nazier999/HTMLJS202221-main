var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var timer = requestAnimationFrame(main);
var gameOver = true;
var gameState = []
var currentState = 0;

//put canvas in a div with a id of container
//add a header and a footer within the container Div
//center the content for the page
//add a background image  to the body of the index.html 
// make a new background color to the canvas
// make the sprites for asteroids and ship
// make a menu screen in photoshop
// make a end screen in photoshop and adjust the text to fit it
//make game scroll horizontally 
//create a invincibility power up

//make ship asteroids and power up picture
var pShip = new Image();
var pAsteroids = new Image();
var PowerUp = new Image();

//make image src
pShip.src = 'images/Ship.png'
pAsteroids.src = 'images/Asteroid.png'
PowerUp.src = 'images.PowerUp.png'

//score variables
var score = 0;
var highscore = 0;

//ship variable
var ship = new PlayerShip();

function PlayerShip() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.width = 20;
    this.height = 20;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.vx = 0;
    this.vy = 0;

    this.drawShip = function () {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.moveTo(0, -10);
        ctx.lineTo(10, 10);
        ctx.lineTo(-10, 10);
        ctx.lineTo(0, -10);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

    }

    this.moveShip = function () {
        this.x += this.vx
        this.y += this.vy

        //add boundry to canvas
        //bottom boundry
        if (this.y > canvas.height - this.height / 2) {
            this.y = canvas.height - this.height / 2;
            this.vy = 0;
        }
        //top boundry
        if (this.y < this.height / 2) {
            this.y = this.height / 2;
            this.vy = 0;
        }
        //right
        if (this.x > canvas.width - this.width / 2) {
            this.x = canvas.width - this.width / 2;
            this.vx = 0;
        }
        //left
        if (this.x < this.width / 2) {
            this.x = this.width / 2;
            this.vx = 0;
        }
    }
}


document.addEventListener("keydown", pressKeyDown);
document.addEventListener("keyup", pressKeyUp);

function pressKeyDown(e) {
    if (!gameOver) {
        if (e.keyCode == 87) {
            //ship go up 87 is "w"
            ship.up = true
        }
        if (e.keyCode == 65) {
            //ship go left 65 is "a"
            ship.left = true
        }

        if (e.keyCode == 68) {
            //ship go right 68 is "d"
            ship.right = true
        }
        if (e.keyCode == 83) {
            //ship go up 83 is "s"
            ship.down = true
        }

        //arrowkeys
        if (e.keyCode == 38) {
            ;
            //ship go up 87 is "w"
            ship.up = true
        }
        if (e.keyCode == 37) {
            //ship go left 65 is "a"
            ship.left = true
        }
        if (e.keyCode == 39) {
            //ship go right 68 is "d"
            ship.right = true
        }
        if (e.keycode == 40) {
            //ship goes down
            ship.down = true
        }
    }
    if (gameOver) {
        if (e.keyCode == 32) {

            if (currentState == 2) {
                //from game over screen
                currentState = 0;
                numAsteroids = 20;
                asteroids = [];
                score = 0;
                gameStart();
                main();
            } else{
                gameStart();
                //from mainmenu
                gameOver = false;
                currentState = 1;
                scoreTimer();
                main();
            }
        }

    }
}


function pressKeyUp(e) {
    if (!gameOver) {


        if (e.keyCode == 87) {
            //ship go up 87 is "w"
            ship.up = false
        }
        if (e.keyCode == 65) {
            //ship go left 65 is "a"
            ship.left = false
        }

        if (e.keyCode == 68) {
            //ship go right 68 is "d"
            ship.right = false
        }
        if (e.keyCode == 83) {
            //ship go up 83 is "s"
            ship.down = false
        }

        //arrowkeys
        if (e.keyCode == 38) {
            ;
            //ship go up 87 is "w"
            ship.up = false
        }
        if (e.keyCode == 37) {
            //ship go left 65 is "a"
            ship.left = false
        }
        if (e.keyCode == 39) {
            //ship go right 68 is "d"
            ship.right = false
        }
        if (e.keycode == 40) {
            //ship goes down
            ship.down = false
        }
    }
}
//variables for Asteroid Craetions
var numAsteroids = 20;
var asteroids = [];

//class for asteriod objects
function Asteroid() {
    this.radius = randomRange(15, 2);
    this.x = randomRange(canvas.width - this.radius, this.radius);
    this.y = randomRange(canvas.height - this.radius, this.radius) - canvas.height;;
    this.vy = randomRange(10, 5);
    this.color = "white";

    this.drawAsteroid = function () {
        //commands to draw Asteroids
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
}
//for loop to create the first asteroids
for (var i = 0; i < numAsteroids; i++) {
    asteroids[i] = new Asteroid();
}






//asteroid Game State Machine

//menu
gameState[0] = function () {
    ctx.save();
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Asteroid Avoider", canvas.width / 2, canvas.height / 2 - 30);
    ctx.font = "15px Arial"
    ctx.fillText("Press Space to start", canvas.width / 2, canvas.height / 2 + 20);
    ctx.restore();
}

//scene
gameState[1] = function () {
    //draw score to canvas
    ctx.save
    ctx.font = "15px Arial";
    ctx.fillStyle = "white"
    ctx.fillText("Score:" + score.toString(), canvas.width - 150, 30);
    ctx.restore


    //setup verticle movement
    if (ship.up) {
        ship.vy = -10;
    } else {
        ship.vy = 3;
    }

    //set horizontal movement
    if (ship.left) {
        ship.vx = -5;
    } else if (ship.right) {
        ship.vx = 5;
    } else {
        ship.vx = 0;
    }

    for (var i = 0; i < asteroids.length; i++) {
        var dX = ship.x - asteroids[i].x;
        var dY = ship.y - asteroids[i].y;
        var distance = Math.sqrt((dX * dX) + (dY * dY));

        //collision detection is here
        if (detectCollision(distance, (ship.height / 2 + asteroids[i].radius))) {
            gameOver = true;
            currentState = 2;
            main();
            //alert("you hit a asteroid? skill issue!")
        }

        if (asteroids[i].y > canvas.height + asteroids[i].radius) {
            asteroids[i].x = randomRange(canvas.width - asteroids[i].radius, asteroids[i].radius)
            asteroids[i].y = randomRange(canvas.height - asteroids[i].radius, asteroids[i].radius) - canvas.height;

        }
        //draw asteroids
        asteroids[i].y += asteroids[i].vy;
        asteroids[i].drawAsteroid();


    }


    //draw ship
    ship.moveShip();
    ship.drawShip();


    //check to see if we need more asteroids
    while (asteroids.length < numAsteroids) {
        //add and create new asteroids in the array
        asteroids.push(new Asteroid());
    }

}
//utility function

function gameStart() {
    for (var i = 0; i < numAsteroids; i++) {
        asteroids[i] = new Asteroid();
    }
    // ceate new player ship
    ship = new PlayerShip();

}

function randomRange(high, low) {
    return Math.random() * (high - low) + low;
}
function detectCollision(distance, calcDistance) {
    return distance < calcDistance
}
function scoreTimer() {
    if (!gameOver) {
        score++;

        if (score % 5 == 0) {
            numAsteroids += 10;
            console.log(numAsteroids);
        }

        setTimeout(scoreTimer, 1000);
    }
}
//game over menu
gameState[2] = function () {
    ctx.clearRect(0,0, canvas.width,canvas.height);
    if(score > highscore){
        //new high score
   highscore = score;
    ctx.save();
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlignt = "center";
    ctx.fillText("You Suck! Your Score Was: " + score.toString(), canvas.width / 2, canvas.height / 2 - 60);
    ctx.fillText("Your New Highscore is: " + highscore.toString(), canvas.width / 2, canvas.height / 2 - 30);
    ctx.fillText("New Record: " + highscore.toString(), canvas.width / 2, canvas.height / 2);
    ctx.font = "15px arial";
    ctx.fillText("press Space to Play Again", canvas.width / 2, canvas.height / 2 + 20);
    ctx.restore();
}else{
    //reglar high score
    highscore = score;
    ctx.save();
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlignt = "center";
    ctx.fillText("You Suck! Your Score Was: " + score.toString(), canvas.width / 2, canvas.height / 2 - 60);
    ctx.fillText("Your Highscore is: " + highscore.toString(), canvas.width / 2, canvas.height / 2 - 30);
    ctx.font = "15px arial";
    ctx.fillText("press Space to Play Again", canvas.width / 2, canvas.height / 2 + 20);
    ctx.restore();
}
}
//main gameplay loop
function main() {
    //clears canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    gameState[currentState]();
    if (!gameOver) {
        timer = requestAnimationFrame(main);
    }
}