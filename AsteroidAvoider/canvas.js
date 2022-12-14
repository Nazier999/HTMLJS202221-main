var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var time = requestAnimationFrame(main);

//variables for asteroid creation
var numAsteroids = 20
var asteroids = [];

//class for asteroidobjects
function Asteroid(){
    this.radius = randomRange(15,2);
    this.x = randomRange(canvas.width - this.radius, this.radius);
    this.y = randomRange(canvas.height - this.radius, this.radius);
    this.vy = randomRange(10,5);
    this.color = 'white';

    this.drawAsteroid = function(){
        //commands to draw asteroid
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y,this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
        //use if something goes wrong colsole log
        //console.log(this.x, this.y, this.radius, this.color)
    }
}

//for loop to create the first asteroids
for(var i= 0; i<numAsteroids; i++){
    asteroids[i] = new Asteroid();
}

function main(){
//clear canvas
    ctx.clearRect(0,0,canvas.width,canvas.height)

    for(var i = 0; i < asteroids.length; i++){
        if(asteroids[i].y > canvas.height + asteroids[i].radius){
            asteroids[i].x = randomRange(canvas.width - asteroids[i].radius, asteroids[i].radius);
            asteroids[i].y = randomRange(canvas.height - asteroids[i].radius, asteroids[i].radius) - canvas.height;    
        }
        //draw asteroids
        asteroids[i].y += asteroids[i].vy;
        asteroids[i].drawAsteroid();
    }

    timer = requestAnimationFrame(main);

}

//utility function

function randomRange(high,low){
    return Math.random() * (high-low) + low;
}