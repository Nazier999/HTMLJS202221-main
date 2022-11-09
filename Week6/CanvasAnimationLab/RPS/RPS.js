//canvas stuff
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

ctx.font = '40px Arial';
ctx.fillStyle = "purple";
ctx.strokeStyle = 'yellow'
ctx.fillText("Welcome to our RPS game!", 200, 280);
ctx.strokeText('welcome to rps game', 200,280)


alert('hello this is the alert');
//Array datatype
//var rps = ["Rock", "Paper", "Scissors"];
//var rps= new Array;()
var rps = [];
rps[0] = "Rock";
rps[1] = "Paper";
rps[2] = "Scissors";


document.getElementById("rock").addEventListener("click", function (e) {
    alert('you clicked ' + rps[0]);
    playGame(rps[0]);
});
document.getElementById("paper").addEventListener("click", function (e) {
    alert('you clicked ' + rps[1])
    playGame(rps[1]);
});
document.getElementById("scissors").addEventListener("click", function (e) {
    alert('you clicked ' + rps[2])
    playGame(rps[2]);
});

function playGame(playerChoice) {
    var cpuChoice = Math.floor(Math.random() * 2.99);
    console.log(cpuChoice, playerChoice)

    switch (playerChoice) {
        case "Rock":
            if (cpuChoice == 0) {
                //itsa tie
                alert("CPU chose Rock. It's a tie!")
            }
            else if (cpuChoice == 1) {
                alert("CPU cose paper. CPU wins!");
            }
            else {
                alert("CPU chose Scissors. You win!")
            }
            break;
        case "Paper":
            if (cpuChoice == 0) {
                //itsa tie
                alert("CPU chose Rock. You Win!")
            }
            else if (cpuChoice == 1) {
                alert("CPU cose paper. It's a tie!");
            }
            else {
                alert("CPU chose Scissors. You Lose!")
            }
            break;
        case "Scissors":
            if (cpuChoice == 0) {
                //itsa tie
                alert("CPU chose Rock. You Lose!")
            }
            else if (cpuChoice == 1) {
                alert("CPU cose paper. It's a Win!");
            }
            else {
                alert("CPU chose Scissors. It's a Tie!")
            }
            break;

    }
}