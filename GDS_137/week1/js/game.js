
	//Set Up the Canvas
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");	
     //Set the Animation Timer
	var timer = setInterval(animate, 1000/60);
    
    var player1 = new GameObject();
    var ball = new GameObject();
   player1.width = 10;
   player1.height = 200;
   player1.x = 0;
   player1.y = canvas.height / 2;
   player1.color = "black";
   player1.vy;
   ball.vx = 5
   ball.vy = 5
   ball.width = 30
   ball.height = 30

    function animate()
    {
        //Erase the Screen
        context.clearRect(0,0,canvas.width, canvas.height);	
        player1.drawRect();
        
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

        //player1 boundrys
        if(player1.y < player1.height/2){
            player1.y = player1.height/2
            player1.vy = -player1.vy;
        }
    
        if(player1.y > canvas.height - player1.height/2){
            player1.y = canvas.height - player1.height/2
            player1.vy = -player1.vy;
        }

         //ball collision

        /*if(ball.x < ball.width/2){
            ball.x = ball.width/2
            ball.vx = -ball.vx;
            ball.color="green"
        }*/
    
        if(ball.x > canvas.width - ball.width/2){
            ball.x = canvas.width - ball.width/2
            ball.vx = -ball.vx;
            ball.color="black"
        }
        if(ball.y < ball.height/2){
            ball.y = ball.height/2
            ball.vy = -ball.vy;
            ball.color="red"
        }
    
        if(ball.y > canvas.height - ball.height/2){
            ball.y = canvas.height - ball.height/2
            ball.vy = -ball.vy;
            ball.color="blue"
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
            ball.color="green"
		console.log("colliding");
	}
        //context.clearRect(0,0,canvas.width, canvas.height);	
    }
    

