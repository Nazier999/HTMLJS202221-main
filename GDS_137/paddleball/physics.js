// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var ball;
var paddle;
var score = 0;
var string;

//---------------Set Friction and Gravity-----------------
var frictionX = .5;	
var frictionY = .97;
var gravity = 1;
//--------------------------------------------------------



	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	paddle = new GameObject();
	ball = new GameObject();
	ball.force = 5;
	ball.color = "#ff00ff";
	ball.radius = '40px';
	
	timer = setInterval(animate, interval);


	paddle.width = 250;
	paddle.height = 40;
	paddle.y = 550;
	paddle.x = canvas.width/2
	paddle.color = "#00ffff";

	ball.vx ;
    ball.vy ;
   

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Call just one of the functions below to view acceleration, friction, gravity and pixel lock.
	//showAcceleration();
	//showFriction();
	//showGravity();
	//showPixelLock();
	//showBounce();
	
	
	
	//string.drawrect();
	ball.vy += gravity;
	
	ball.x += ball.vx;
	ball.y += ball.vy;
	
	//--------------------Check Collision------------------------------------------------------
	if(ball.y > canvas.height - ball.height/2)
	{
		
		//--------Bounce the Ball---------------------------------------------------------------
		ball.y = canvas.height - ball.height/2;
		//the decimal is how bouncy you want the object to be
		//It should be a number between 0 and 2;
		ball.vy = -ball.vy * .5;
	}

	
	
	//paddle movement
	if(a)
	{
		console.log("Moving left");
		
		paddle.vx += paddle.ax * -paddle.force;
		//paddle.vx += paddle.ax * -paddle.force;
		
	}
	 if(d)
	{
		console.log("Moving right");
		
		paddle.vx += paddle.ax * paddle.force;
		//paddle.vx += paddle.ax * paddle.force;
	}
	//paddle boundrys
	if(paddle.x < paddle.width/2){
		paddle.x = paddle.width/2
		paddle.vx = -paddle.vx ;
	}

	if(paddle.x > canvas.width - paddle.width/2){
		paddle.x = canvas.width - paddle.width/2
		paddle.vx = -paddle.vx;
	}

	paddle.vx *= frictionX;
	paddle.x += paddle.vx;

	//ground collision
	 if(ball.x < ball.width/2){
            ball.x = ball.width/2
            ball.vx = -ball.vx;
            
        }
    
       if(ball.x > canvas.width - ball.width/2){
            ball.x = canvas.width - ball.width/2
       		ball.vx = -ball.vx;
          	
        } 

	if(ball.y < ball.height/2){
		ball.y = ball.height/2
		ball.vy = -ball.vy;
		
	}

	if(ball.y > canvas.height - ball.height/2){
		
		ball.y = canvas.height - ball.height/2
		ball.vy = -ball.vy;
		
	}

	if(ball.x > canvas.width - ball.width/2)
	{
		
		//--------Bounce the Ball---------------------------------------------------------------
		ball.x = canvas.width - ball.width/2;
		//the decimal is how bouncy you want the object to be
		//It should be a number between 0 and 2;
		ball.vx = -ball.vx * .5;
		
	}

	// paddle collision
	if(ball.hitTestObject(paddle))
	{
		score = score + 1;

		//ball.x = player1.x - ball.width/2;
        //player.y = player.height/2

		ball.y = paddle.y -10 - ball.height/2;
		ball.vy = -35;
		
		if(ball.x < paddle.x - paddle.width/6)
        {
			
            ball.vx = -ball.force;
           
        }

		if(ball.x < paddle.x - paddle.width/3)
        {
			
            ball.vx = -ball.force*5;
           
        }

        if(ball.x > paddle.x + paddle.width/6)
        {
            ball.vx = ball.force;
			
        }

		if(ball.x > paddle.x + paddle.width/3)
        {
            ball.vx = ball.force * 5;
			
        }

            
		console.log("colliding");

	}

	ball.drawCircle();
	paddle.drawRect();
	
	context.save();
         context.strokeStyle = 'grey';
         context.beginPath();
         context.moveTo(ball.x, ball.y);
         context.lineTo(paddle.x, paddle.y);
         context.closePath();
         context.lineWidth = 2; 
         context.stroke();
         context.restore();

	context.font = "bold 16px Arial";
        context.fillText("Score:" + score, 80, 25);
        context.fillStyle = '#555555';
        //context.textalign = 'center';
       // context.fillText(score, 80, 40);
	
	//-----------------------------------------------------------------------------------------
}



