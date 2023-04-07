
	//Set Up the Canvas
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");	
     //Set the Animation Timer
	var timer = setInterval(animate, 1000/60);
    
    var player1 = new GameObject();
   player1.width = 25;
   player1.height = 200;
   player1.x = 64;
   player1.y = canvas.height / 2;
   player1.color = "black";

    function animate()
    {
        //Erase the Screen
        context.clearRect(0,0,canvas.width, canvas.height);	
        player1.drawRect();
        
         if(s)
	    {
	    	console.log("Moving Down");
	    	player1.y += 2;
	    }
	     if(w)
	    {
	        console.log("Moving Up");
	    	player1.y += -2;
	    }
    }
    

