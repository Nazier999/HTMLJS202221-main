//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;

var healthBarWidth = 300;



	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:100, y:canvas.height/2-100});

	platform0 = new GameObject();
		platform0.width = 200;
		platform0.x = platform0.width/2;
		platform0.y = canvas.height - platform0.height/2;
		platform0.color = "#66ff33";
	
		platform1 = new GameObject();
		platform1.width = 200;
		platform1.x = platform1.width * 1.5;
		platform1.y = canvas.height - platform1.height * 2;
		platform1.color = "#66ff33";

		platform2 = new GameObject();
		platform2.width = 100;
		platform2.height = 200;
		platform2.x = platform2.width * 4.5;
		platform2.y = canvas.height - platform2.height * 2;
		platform2.color = "blue";
		
		platform3 = new GameObject();
		platform3.width = 100;
		platform3.height = 200;
		platform3.x = platform3.width * 1.5;
		platform3.y = canvas.height - platform2.height * 3;
		platform3.color = "blue";
		
		platform4 = new GameObject();
		platform4.width = 600;
		platform4.height = 100;
		platform4.x = platform4.width + 100;
		platform4.y = canvas.height - platform2.height * 3;
		platform4.color = "#66ff33";

		spikes0 = new GameObject();
		spikes0.width = 50;
		spikes0.height = 25;
		spikes0.x = platform4.x - 60;
		spikes0.y = platform4.y - 60;
		spikes0.color = "grey";

		
		healthbar0 = new GameObject();
		healthbar0.width = 200;
		healthbar0.height = 10;
		healthbar0.y = 20;
		healthbar0.x = canvas.width/6;
		healthbar0.color = "black";

		healthbar1 = new GameObject();
		healthbar1.width = 200;
		healthbar1.height = 10;
		healthbar1.y = healthbar0.y - healthbar0.height/2;
		healthbar1.x = healthbar0.x - healthbar0.width/2;
		healthbar1.color = "green";
		healthbar1.health = 100;
		

		
	goal = new GameObject({width:24, height:50, x:canvas.width-50, y:100, color:"#00ffff"});
	

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

	if(w && player.canJump && player.vy ==0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
	}

	if(a)
	{
		player.vx += -player.ax * player.force;
	}
	if(d)
	{
		player.vx += player.ax * player.force;
	}

	player.vx *= fX;
	player.vy *= fY;
	
	player.vy += gravity;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);
	

	while(platform0.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform0.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	
	while(platform1.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform1.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform1.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform1.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	
	while(platform2.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform2.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform2.hitTestPoint(player.right()) && player.vx >=0 && !player.canJump)
	{
		player.x--;
		player.vx = 0;
		player.y++;
		player.vy = 0;
		if(w){
			player.canJump = true;
		}
		
	}
	while(platform2.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	
	while(platform3.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform3.hitTestPoint(player.left()) && player.vx <=0  && !player.canJump)
	{
		player.x++;
		player.vx = 0;
		player.y++;
		player.vy = 0;
		if(w){
			player.canJump = true;
		}
	}
	while(platform3.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;		
	}
	while(platform3.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	
	
	while(platform4.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform4.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform4.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;		
	}
	while(platform4.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}

	while(spikes0.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		
		player.y--;
		player.vy = -20;
		player.vx = -40;
		healthbar1.health -= 25;
		healthbar1.width -= 50;
	}
	while(spikes0.hitTestPoint({x:player.left().x, y:player.bottom().y}) && player.vx <=0)
	{
		player.x++;
		player.vx = 20;
		player.vy = -20;
		healthbar1.health -= 25;
		healthbar1.width -= 50;
	}
	while(spikes0.hitTestPoint({x:player.right().x, y:player.bottom().y}) && player.vx >=0)
	{
		player.x--;
		player.vx = -20;
		player.vy = - 20;		
		healthbar1.health -= 25;
	healthbar1.width -= 50;
	}
	while(spikes0.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
		healthbar1.health -= 25;
	healthbar1.width -= 50;
	}
	
	//---------Objective: Treasure!!!!!!!---------------------------------------------------------------------------------------------------- 
	//---------Run this program first.
	//---------Get Creative. Find a new way to get your player from the platform to the pearl. 
	//---------You can do anything you would like except break the following rules:
	//---------RULE1: You cannot spawn your player on the pearl!
	//---------RULE2: You cannot change the innitial locations of platform0 or the goal! 
		
	

	platform0.drawRect();
	platform1.drawRect();
	platform2.drawRect();
	platform3.drawRect();
	platform4.drawRect();
	spikes0.drawRect();
	healthbar0.drawRect();
	healthbar1.drawRect(0,0);


	if(player.hitTestObject(goal))
	{
		goal.y = 10000;
		context.textAlign = "center";
		context.fillText("You Win!!!", canvas.width/2, canvas.height/2);
		
	}

	if(healthbar1.health <= 0)
	{
		healthbar1.health = 0;
		player.vx = 0;
		player.vy = 0;
		player.y = -1000;
		context.fillStyle = "black";
        context.font = "25px Arial";
		context.textAlign = "center";
		context.fillText("You Died", canvas.width/2, canvas.height/2);
	}


	

	


	//Show hit points
	player.drawRect();
	goal.drawCircle();
	//player.drawDebug();
}

