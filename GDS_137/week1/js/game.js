
	//Set Up the Canvas
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");	
     //Set the Animation Timer
	var timer = setInterval(animate, 1000/60);
    
    var player1 = new GameObject();
    var player2 = new GameObject();
    var ball = new GameObject();

    var p1Wins;
    var p2Wins;

    p1wins = 0;
    p2wins = 0;

   player1.width = 10;
   player1.height = 200;
   player1.x = 0;
   player1.y = canvas.height / 2;
   player1.color = "black";
   player1.vy;
   player2.width = 10;
   player2.height = 200;
   player2.x = canvas.width;
   player2.y = canvas.height / 2;
   player2.color = "black";
   player2.vy;
   ball.vx = -5
   ball.vy = 0
   ball.width = 30
   ball.height = 30
   ball.color = "black";


 

    function animate()
    {
        //Erase the Screen
        context.clearRect(0,0,canvas.width, canvas.height);	
        player1.drawRect();
        player2.drawRect();
        
         //net
         context.save();
         context.strokeStyle = 'grey';
         context.beginPath();
         context.moveTo(canvas.width/2, canvas.height);
         context.lineTo(canvas.width/2, -canvas.height);
         context.closePath();
         context.lineWidth = 20; 
         context.stroke();
         context.restore();
        
        //move player1
         //Update the Screen
        
        
        
         //move Player1

         if(s)
	    {
	    	console.log("Moving Down");
	    	player1.y += 4;
	    }
	     if(w)
	    {
	        console.log("Moving Up");
	    	player1.y += -4;
	    }

        if(up)
	    {
	    	console.log("Moving Down");
	    	player2.y += -4;
	    }
	     if(down)
	    {
	        console.log("Moving Up");
	    	player2.y += 4;
	    }

        //player1 boundrys
        if(player1.y < player1.height/2){
            player1.y = player1.height/2
            player1.vy = -player1.vy;
        }
    
        if(player1.y > canvas.height - player1.height/2){
            player1.y = canvas.height - player1.height/2
            player1.vy = -player1.vy;
        }

        if(player2.y < player2.height/2){
            player2.y = player2.height/2
            player2.vy = -player2.vy;
        }
    
        if(player2.y > canvas.height - player2.height/2){
            player2.y = canvas.height - player2.height/2
            player2.vy = -player2.vy;
        }


         //ball collision

        /*if(ball.x < ball.width/2){
            ball.x = ball.width/2
            ball.vx = -ball.vx;
            ball.color="green"
        }*/
    
       //if(ball.x > canvas.width - ball.width/2){
       //     ball.x = canvas.width - ball.width/2
           // ball.vx = -ball.vx;
         //   ball.color="black"
       // } 
        if(ball.y < ball.height/2){
            ball.y = ball.height/2
            ball.vy = -ball.vy;
            ball.color="black"
        }
    
        if(ball.y > canvas.height - ball.height/2){
            ball.y = canvas.height - ball.height/2
            ball.vy = -ball.vy;
            ball.color="black"
        }

        //draw ball
        ball.drawCircle();
         //Move the Player
         ball.move();


        
	

   	//Impede movement
	if(ball.hitTestObject(player1))
	{
		//ball.x = player1.x - ball.width/2;
        ball.x = ball.width/2
            ball.vx = -ball.vx;
            ball.color="black"
		console.log("colliding");
	}

    if(ball.hitTestObject(player2))
	{
		//ball.x = player1.x - ball.width/2;
        ball.vx = -ball.vx;
        ball.color="black"
		console.log("colliding");
	}


    //points
    if(ball.x <= 0)
    {
        ball.x = canvas.width/2, canvas.height/2;
        context.fillStyle = "black"
        
        p2wins = p2wins + 1;
    }

    if(ball.x >= canvas.width)
    {
        ball.x = canvas.width/2, canvas.height/2;
        p1wins = p1wins + 1;
        //context.fillStyle = "black"
        
        //context.fillText(p1wins, ' - ', p2wins, canvas.width / 2, canvas.height / 2);
    }
 /*   if(collision occurs)
{
     ball hits top
     if(ball.y < paddle.y - one sixth of the paddle's height)
     {
       ball.vx = positive speed;
       ball.vy = negative speed;
     }
}*/

    if(ball.hitTestObject(player1))
    {
        //ball hits top
        if(ball.y < player1.y - player1.height/6)
        {
            ball.vx = 5;
            ball.vy = -5;
        }
        if(ball.y > player1.y + player1.height/6)
        {
            ball.vx = 5;
            ball.vy = 5;
        }
    }

    if(ball.hitTestObject(player2))
    {
        //ball hits top
        if(ball.y < player2.y - player2.height/6)
        {
            ball.vx = -5;
            ball.vy = -5;
        }
        if(ball.y > player2.y + player2.height/6)
        {
            ball.vx = -5;
            ball.vy = 5;
        }
    }


        context.font = "20px Georgia";
        context.fillText("Pong", canvas.width/2 - 20, 20);
        context.fillStyle = 'black';
        context.textalign = 'center';
        context.fillText(p1wins + ' - ' + p2wins, canvas.width/2 - 20, 40);

       

        //context.clearRect(0,0,canvas.width, canvas.height);	
     }
    

