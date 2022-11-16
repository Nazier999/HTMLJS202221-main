var canvas = document.querySelector("canvas");
var ctx = canvas.getContext('2d');

var timer = requestAnimationFrame(main);
var speed = 1;
var gravity = 5;
var munny = new Image();
munny.src = "images/Munny.png"

munny.onload = function(){
    main()
}

ctx.fillStyle = 'green';
ctx.fillRect(350,250,100,100);
ctx.fillRect(350,250,100,100);

//utility function
function randomRange(high, low) {
    return Math.random() * (high - low) + low;
}

//examples of GameObject class
function GameObject() {
    //examples of properties in our class
    this.width = randomRange(100, 10);
    this.height = this.width;
    this.radius = randomRange(50, 5);
    this.x = randomRange(canvas.width - this.width,0);
    this.y = randomRange(canvas.height - this.height,0);
    
    
    this.vx = randomRange(10, -10);
    this.vy = randomRange(10, -10);

    this.color = `rgb(${randomRange(255, 0)}, ${randomRange(255, 0)}, ${randomRange(255, 0)})`;
    //this.color = "rgb(" + randomRange (255,0) + "," randomRange (255,0) +"," randomRange(255,0))

    //examples of methods in a class
    this.drawSquare = function(){
        //all the procedures to draw a square gp here
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    this.drawCircle = function(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
    }
    this.drawSprite = function (){
     ctx.drawImage(munny, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2)
}
    this.move = function(){
        this.x += this.vx;
        this.y += this.vy;

        //check for top of canvas
        if(this.y < this.radius){
            this.y = this.radius;
            this.vy *= -1
        }
            //check for bottom of cancas
            if(this.y > canvas.height - this.radius){
                this.y = canvas.height - this.radius
                this.vy *= -1
        }
        //check for left side of canvas
        if(this.x < this.radius){
            this.x = this.radius;
            this.vx *= -1
        }
        //check for right side of the canvas
        if(this.x > canvas.width - this.radius){
            this.x = canvas.width - this.radius;
            this.vx *= -1
        }
    }
}


var square = new GameObject();
//squarecolor ="yellow";
//square.y = 50;
square.drawCircle();

var square2 = new GameObject();
//square2.color = 'yellow'
square2.drawCircle();

var circle = new GameObject();
circle.drawCircle();

var numberOfObjects = 1000;

var circles = [square, square2, circle];

for(var i = 0; i<numberOfObjects; i++){
    circles[i] = new GameObject()
}
 function main() {
    //clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //update
    square.move();
    square2.move();
    circle.move();
    //draw
    square.drawCircle();
    square2.drawCircle();
    circle.drawCircle();

    for(var i = 0; i<circles.length; i++){
        ///update
        circles[i].move();
        //draw
        circles[i].drawCircle();
        circles[i].drawSprite();
}

    timer = requestAnimationFrame(main);
}

main();