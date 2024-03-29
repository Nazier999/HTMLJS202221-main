/*----------------------------------------------
This file contains the data used to render the player's sprites
Properties:
	Object: info | information about the sprite file
		String: info.src | The location of the spritesheet
	Object: states | contains the data for each animation state
		Object: [`state name`] | The data used to render the idle state
			Number: fps | The frame rate in which to render the animation
			Boolean: cycle | Whether or not the animation will loop
			Array: frames| Contains objects with geometric data for each frame of animtati.
					Must contain at least one frame object.
					The animation will run for however many frame objects are added to the array
				Object: [index number] | A frame of animation
					Number: width | the actual 1/1 horizontal size of the portion of image file to be rendered
					Number: height | the actual 1/1 vertical size of the portion of image file to be rendered
					Number: startX | the horizontal starting point of the portion of image file to be rendered
					Nunber: startY | the vertical starting point of the portion of image file to be rendered
/*----------------------------------------------*/

var buttonData ={
	info:{
		src:`images/buttonsprites.png`
	},
	states:{
		//The idle animation 
    	idle:
		{
			fps:60,
			cycle:true,
			frames:
			[
				{width:367, height:258, startX:0, startY:1}
			]
		},
		hover: {
			fps:60,
			cycle:true,
			frames:
			[
				{width:367, height:258, startX:367, startY:1}
			]
		}
	}	
}