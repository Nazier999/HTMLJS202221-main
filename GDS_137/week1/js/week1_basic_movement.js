//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new Player();
	player.width=100
	player.height=100
    player.vx = 5
    player.vy = 5
	
    /*
    ball.x=canvas.width;
    ball.x-= //Some number of pixels
    ball.vx = -ball.vx; 
    */
	
    //Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the Player
	//player.x += 10;
	//player.vx -= 800;
    //player.vx = -player.vx;

	//Update the Screen
	player.draw();

	//Move the Player
    player.move();

    //collision
    if(player.x < player.width/2){
        player.x = player.width/2
        player.vx = -player.vx;
    }

    if(player.x > canvas.width - player.width/2){
        player.x = canvas.width - player.width/2
        player.vx = -player.vx;
    }
    if(player.y < player.height/2){
        player.y = player.height/2
        player.vy = -player.vy;
    }

    if(player.y > canvas.height - player.height/2){
        player.y = canvas.height - player.height/2
        player.vy = -player.vy;
    }

}
