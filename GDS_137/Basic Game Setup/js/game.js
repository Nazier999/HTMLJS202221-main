
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

	var fX = .85;
	var fY = .97;
	var gravity = 1;
var interval = 1000/60;
var timer = setInterval(animate, interval);
var colorChangeTimer;

/*------------Use this if you want to implement States---------------
var currentState = "";
var states = [];

states[""] = function()
{

}
----------------------------------------------------------------------*/
var score = 0;
var player;
player = new GameObject();
player.x = canvas.width / 2;
player.y = canvas.height - 25;
player.width = 50;
player.height = 50;
player.color = "#ffff00";

	var squareAmount = 5;
	var circleAmount = 5;
	var circles = [];
	var particles = [];
	var colors = ["limegreen", "lightgreen"];
	
	
	function colorchange()
	{
		player.color = "#ffff00";
	}


	for(var i = 0; i < squareAmount; i++)
	{
		particles[i] = new GameObject({width:10, height:10});
		particles[i].width = 25;
		particles[i].height = 25;
		
		var randomColor = Math.round(Math.random());
		particles[i].color = colors[randomColor]
	
		particles[i].x = Math.random() * canvas.width;
		particles[i].y = -10; //Math.random() * canvas.height;
		particles[i].vy = Math.random() * 10 + 5;
	}

	for(var i = 0; i < circleAmount; i++)
	{
		circles[i] = new GameObject({width:10, height:10});
		circles[i].width = 25;
		circles[i].height = 25;
		
		var randomColor = Math.round(Math.random());
		circles[i].color = 'red';
	
		circles[i].x = Math.random() * canvas.width;
		circles[i].y = -10;
		circles[i].vy = Math.random() * 10 + 5;
	}

//-------------------------AnimationLoop--------------------------------

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);
	/*-----------Use for State Machine ---------------------------------
	//states[currentState]();
	-------------------------------------------------------------------*/

	if(player.x < player.width/2)
	{
		player.x = player.width/2
		player.vx = 0;
		
	}

   if(player.x > canvas.width - player.width/2)
   {
        player.x = canvas.width - player.width/2
	    player.vx = 0;
	   
    } 
	
	for(var p = 0; p < particles.length; p++)
	{	
		particles[p].x += particles[p].vx;
		particles[p].y += particles[p].vy;
			
		if(particles[p].y >= canvas.height){
			particles[p].y = 0
			particles[p].x = Math.random() * canvas.width;
			particles[p].vy = Math.random() * 5 + 10;
			particles[p].color = colors[randomColor];
		}

		
		particles[p].drawRect();
	}

	for(var p = 0; p < circles.length; p++)
	{	
		circles[p].x += circles[p].vx;
		circles[p].y += circles[p].vy;
			
		if(circles[p].y >= canvas.height){
			circles[p].y = 0
			circles[p].x = Math.random() * canvas.width;
			circles[p].vy = Math.random() * 5 + 10;
			circles[p].color = 'red';
		}

		
		circles[p].drawCircle();
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
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);

	if(player.hitTestObject(particles[0]))
	{
		colorChangeTimer = setTimeout(colorchange, 500);
		particles[0].y = 0
		particles[0].x = Math.random() * canvas.width;
		player.color = 'green';
		score = score + 1;
	}

	if(player.hitTestObject(particles[1]))
	{
		colorChangeTimer = setTimeout(colorchange, 500);
		particles[1].y = 0
		particles[1].x = Math.random() * canvas.width;
		player.color = 'green';
		score = score + 1;
	}


	if(player.hitTestObject(particles[2]))
	{
		colorChangeTimer = setTimeout(colorchange, 500);
		particles[2].y = 0
		particles[2].x = Math.random() * canvas.width;
		player.color = 'green';
		score = score + 1;
	}

	if(player.hitTestObject(particles[3]))
	{
		colorChangeTimer = setTimeout(colorchange, 500);
		particles[3].y = 0
		particles[3].x = Math.random() * canvas.width;
		player.color = 'green';
		score = score + 1;
	}

	if(player.hitTestObject(particles[4]))
	{
		colorChangeTimer = setTimeout(colorchange, 500);
		particles[4].y = 0
		particles[4].x = Math.random() * canvas.width;
		player.color = 'green';
		score = score + 1;
	}

	if(player.hitTestObject(circles[0]))
	{
		colorChangeTimer = setTimeout(colorchange, 500);
		circles[0].y = 0;
		circles[0].x = Math.random() * canvas.width;
		circles[1].y = 0;
		circles[1].x = Math.random() * canvas.width;
		circles[2].y = 0;
		circles[2].x = Math.random() * canvas.width;
		circles[3].y = 0;
		circles[3].x = Math.random() * canvas.width;
		circles[4].y = 0;
		circles[4].x = Math.random() * canvas.width;
		particles[0].y = 0;
		particles[0].x = Math.random() * canvas.width;
		particles[1].y = 0;
		particles[1].x = Math.random() * canvas.width;
		particles[2].y = 0;
		particles[2].x = Math.random() * canvas.width;
		particles[3].y = 0;
		particles[3].x = Math.random() * canvas.width;
		particles[4].y = 0;
		particles[4].x = Math.random() * canvas.width;
		player.color = 'red';
		score = 0;
	}

	if(player.hitTestObject(circles[1]))
	{
		colorChangeTimer = setTimeout(colorchange, 500);
		circles[0].y = 0;
		circles[0].x = Math.random() * canvas.width;
		circles[1].y = 0;
		circles[1].x = Math.random() * canvas.width;
		circles[2].y = 0;
		circles[2].x = Math.random() * canvas.width;
		circles[3].y = 0;
		circles[3].x = Math.random() * canvas.width;
		circles[4].y = 0;
		circles[4].x = Math.random() * canvas.width;
		particles[0].y = 0;
		particles[0].x = Math.random() * canvas.width;
		particles[1].y = 0;
		particles[1].x = Math.random() * canvas.width;
		particles[2].y = 0;
		particles[2].x = Math.random() * canvas.width;
		particles[3].y = 0;
		particles[3].x = Math.random() * canvas.width;
		particles[4].y = 0;
		particles[4].x = Math.random() * canvas.width;
		player.color = 'red';
		score = 0;
	}

	if(player.hitTestObject(circles[2]))
	{
		colorChangeTimer = setTimeout(colorchange, 500);
		circles[0].y = 0;
		circles[0].x = Math.random() * canvas.width;
		circles[1].y = 0;
		circles[1].x = Math.random() * canvas.width;
		circles[2].y = 0;
		circles[2].x = Math.random() * canvas.width;
		circles[3].y = 0;
		circles[3].x = Math.random() * canvas.width;
		circles[4].y = 0;
		circles[4].x = Math.random() * canvas.width;
		particles[0].y = 0;
		particles[0].x = Math.random() * canvas.width;
		particles[1].y = 0;
		particles[1].x = Math.random() * canvas.width;
		particles[2].y = 0;
		particles[2].x = Math.random() * canvas.width;
		particles[3].y = 0;
		particles[3].x = Math.random() * canvas.width;
		particles[4].y = 0;
		particles[4].x = Math.random() * canvas.width;
		player.color = 'red';
		score = 0;
	}

	if(player.hitTestObject(circles[3]))
	{
		colorChangeTimer = setTimeout(colorchange, 500);
		circles[0].y = 0;
		circles[0].x = Math.random() * canvas.width;
		circles[1].y = 0;
		circles[1].x = Math.random() * canvas.width;
		circles[2].y = 0;
		circles[2].x = Math.random() * canvas.width;
		circles[3].y = 0;
		circles[3].x = Math.random() * canvas.width;
		circles[4].y = 0;
		circles[4].x = Math.random() * canvas.width;
		particles[0].y = 0;
		particles[0].x = Math.random() * canvas.width;
		particles[1].y = 0;
		particles[1].x = Math.random() * canvas.width;
		particles[2].y = 0;
		particles[2].x = Math.random() * canvas.width;
		particles[3].y = 0;
		particles[3].x = Math.random() * canvas.width;
		particles[4].y = 0;
		particles[4].x = Math.random() * canvas.width;
		player.color = 'red';
		score = 0;
	}

	if(player.hitTestObject(circles[4]))
	{
		colorChangeTimer = setTimeout(colorchange, 500);
		circles[0].y = 0;
		circles[0].x = Math.random() * canvas.width;
		circles[1].y = 0;
		circles[1].x = Math.random() * canvas.width;
		circles[2].y = 0;
		circles[2].x = Math.random() * canvas.width;
		circles[3].y = 0;
		circles[3].x = Math.random() * canvas.width;
		circles[4].y = 0;
		circles[4].x = Math.random() * canvas.width;
		particles[0].y = 0;
		particles[0].x = Math.random() * canvas.width;
		particles[1].y = 0;
		particles[1].x = Math.random() * canvas.width;
		particles[2].y = 0;
		particles[2].x = Math.random() * canvas.width;
		particles[3].y = 0;
		particles[3].x = Math.random() * canvas.width;
		particles[4].y = 0;
		particles[4].x = Math.random() * canvas.width;
		player.color = 'red';
		score = 0;
	}

	
	
	player.drawRect();
	context.font = "30px Arial";
	context.weight = 'bold';
	context.fillStyle = 'black';
	context.fillText('Score: ' + score, canvas.width/30 - 15, 25);
}



