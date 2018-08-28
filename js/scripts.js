//business logic
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Player(name, score, turn) {
    this.name = name;
    this.score = score;
    this.turn = turn;
}

Player.prototype.startTurn = function() {
    this.turn = 1;
};

Player.prototype.endTurn = function() {
    this.turn = 0;
};

Player.prototype.hold = function(total) {
    this.score += total;
};

Player.prototype.checkWin = function(total) {
    return ((this.score + total) >= 100);
};

var player1 = new Player(null, 0, 1);
var player2 = new Player(null, 0, 0);

var switchPlayer = function(playerName) {
    console.log(player1.name, playerName);
    if (player1.name === playerName) {
        player1.endTurn();
        $("#score1").removeClass("active");
        player2.startTurn()
        $("#score2").addClass("active");
    } else {
        player2.endTurn();
        $("#score2").removeClass("active");
        player1.startTurn()
        $("#score1").addClass("active");
    }
}

var resetGame = function() {
    player1.name = null;
    player2.name = null;
    $("input#player1").val("");
    $("input#player2").val("");
    $("#score1-span").text("0");
    $("#score2-span").text("0");
    $("#total-span").text("0");
    $("#diceGame").hide();
}

//Front end logic
$(function() {

    var total = 0;

    $("#letsPlay").click(function() {
        player1.name = $("input#player1").val();
        player2.name = $("input#player2").val();

        $("#name1").text(player1.name);
        $("#name2").text(player2.name);
        $("#displayScore1").text(player1.score);
        $("#displayScore2").text(player2.score);
        $("#displayTotal").text(total);

        $("#diceGame").show();
    });

    $("#hold").click(function() {
        if (player1.turn === 1) {
            player1.score += total;
            $("#displayScore1").text(player1.score);
            total = 0;
            switchPlayer(player1.name);
        } else {
            player2.score += total;
            $("#displayScore2").text(player2.score);
            total = 0;
            switchPlayer(player2.name);
        }
    });

    /*
    function Player(first, second) {
        this.firstPlayer = first;
        this.secondPlayer = second;
    }
    */

    /*

    $(document).ready(function() {
        $("form#player-names").submit(function(event) {
            event.preventDefault();

            var inputtedFirstPlayer = $("input#player1").val();
            var inputtedSecondPlayer = $("input#player2").val();


            var newPlayers = new Player(inputtedFirstPlayer, inputtedSecondPlayer);

            
            $("h2#name1").append("<span class='Player'>" + newPlayers.firstPlayer + "</span>");
            $("h2#name2").append("<span class='Player'>" + newPlayers.secondPlayer + "</span>");

            $("input#player1").val("");
            $("input#player2").val("");

        });
         */
});