//create Healthbar
var startHealth = randomNumber(canvas.width, 600);
var health = startHealth;
var healthBarWidth = 300;
if(health>0){
    
}  
function drawHealthBar(){
    //draw fuel HUD
    var currentBarWidth = healthBarWidth * (fuel/startHealth);
    ctx.fillStyle = 'Black'
    ctx.fillRect(start,30,healthBarWidth,10)
    ctx.font = "25px Arial";
    ctx.fillText("hp", start,25)
    if(fuel>0){
        ctx.fillStyle = "green";
        ctx.fillRect(start,30, currentBarWidth, 10);
    }
}