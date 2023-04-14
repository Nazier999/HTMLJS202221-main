//Define Booleans for each key
var a = false;
var d = false;
var w = false;
var s = false;

var up = false;
var down = false;
var left = false;
var right = false;

//Add Event Listeners
document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

//Event Functions
function press(e)
{
	//---This logs key codes into the browser's console.
	//console.log("Pressed" + e.keyCode);
	
	if(e.keyCode == 65)
	{
		a = true;
	}
	
	if(e.keyCode == 68)
	{
		d = true;
	}
	
	if(e.keyCode == 87)
	{
		w = true;
	}
	
	if(e.keyCode == 83)
	{
		s = true;
	}

	if(e.keyCode == 38)
	{
		up = true;
	}

	if(e.keyCode == 37)
	{
		left = true;
	}

	if(e.keyCode == 40)
	{
		down = true;
	}

	if(e.keyCode == 39)
	{
		right = true;
	}
}

function release(e)
{
	//---This logs key codes into the browser's console.
	//console.log("Released" + e.keyCode);
	
	if(e.keyCode == 65)
	{
		a = false;
	}
	if(e.keyCode == 68)
	{
		d = false;
	}
	if(e.keyCode == 87)
	{
		d = false;
	}
	if(e.keyCode == 83)
	{
		s = false;
	}

	if(e.keyCode == 38)
	{
		up = false;
	}

	if(e.keyCode == 37)
	{
		left = false;
	}

	if(e.keyCode == 40)
	{
		down = false;
	}

	if(e.keyCode == 39)
	{
		right = false;
	}
}
//