/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject({width:200});
var startButton2 = new GameObject({width:200});
//startButton.img.src="images/button.png"
//startButton2.img.src="images/button2.png"
startButton.width=200;
startButton.hitBoxWidth=800
console.log(startButton.collisionPoints.right)

var menuBackground = new GameObject();
menuBackground.img.src = "images/menu.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
			sounds.play('Tantal',.5)
		}

		//Hover Effect Graffic
		startButton.color = `yellow`
		//startButton.drawStaticImage(button2);
		//wiz.changeState(`buttonHover`)
	}
	else
	{
		//Default Button Graphic
		startButton.color = `red`

		//startButton.drawStaticImage(button);
	}
	
	menuBackground.drawStaticImage();
	startButton.render()
}
	
	