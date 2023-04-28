//Declare my variables

var canvas;
var context;
var timer;
var interval;
var ball;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	ball = new GameObject({height:200, color:"black", pajamas: "orange"});
	player2 = new GameObject(ball)

	//Instantiate platforms
		platform0 = new GameObject();
		platform0.width = 500;
		platform0.y = ball.y +ball.height/2 +platform0.height/2;
		platform0.color = "#66ff33";
		
	
	platform1 = new GameObject();
		platform1.width = 50;
		platform1.height = 300;
		platform1.y = platform0.y - platform0.height/2 - platform1.height/2;
		platform1.x = platform0.x-platform0.width/2;
		platform1.color = "#00ffff";
		
	platform2 = new GameObject();
		platform2.width = 50;
		platform2.height = 300;
		platform2.y = platform0.y - platform0.height/2 - platform2.height/2;
		platform2.x = platform0.x + platform0.width/2;
		platform2.color = "#00ffff";
		
	platform3 = new GameObject();
		platform3.width = 300;
		platform3.height = 50;
		platform3.y = platform2.y;
		platform3.x = platform2.x ;
		platform3.color = "#ff00ff";
	
	//This platform uses an object literal to define the properties
	platform4 = new GameObject({width:300, height:50, x:platform1.x, y:platform3.y, color:"#ffff00"});
	
	//Global Physics Variables
	var fX = .97;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

	//Jump with the w key
	if(w && ball.canJump)
	{
		ball.canJump = false;
		ball.vy += ball.jumpHeight;
	}
	
	//Apply acceleration to velocity.
	if(a)
	{
		ball.vx += -ball.ax * ball.force;
	}
	if(d)
	{
		ball.vx += ball.ax * ball.force;
	}

	ball.vx *= fX;
	ball.vy *= fY;
	
	ball.vy += gravity;
	
	ball.x += Math.round(ball.vx);
	ball.y += Math.round(ball.vy);
	
	//Hit the ground
	while(platform0.hitTestPoint(ball.bottom()) && ball.vy >=0)
	{
		ball.y--;
		ball.vy = 0;
		ball.canJump = true;
	}
	while(platform0.hitTestPoint(ball.bottom()+ ball.left) && ball.vy >=0)
	{
		ball.y--;
		ball.vy = 0;
		ball.x++;
		ball.vx = 0;
		ball.canJump = true;
	}
	
	while(platform1.hitTestPoint(ball.left()))
	{
		ball.x++;
		ball.vx = 0;
	}
	
	while(platform2.hitTestPoint(ball.right()))
	{
		ball.x--;
		ball.vx = 0;
	}
	
while(platform1.hitTestPoint(ball.bottom()))
{
	ball.vy = 0;
	ball.y --;
}

	while(platform3.hitTestPoint(ball.top()))
	{
		ball.y++;
		ball.vy = 0;
	}
	while(platform3.hitTestPoint(ball.bottom()) && ball.vy >=0)
	{
		ball.y--;
		ball.vy = 0;
		ball.canJump = true;
	}
	
	while(platform4.hitTestPoint(ball.bottom()) && ball.vy >=0)
	{
			ball.y--;
			ball.vy = 0;
			ball.canJump = true;
	
	}
	
	
	
	platform0.drawRect();
	platform1.drawRect();
	platform2.drawRect();
	//platform3.drawRect();
	platform4.drawRect();
	ball.drawRect();
	
	//Show hit points
	ball.drawDebug();
}

