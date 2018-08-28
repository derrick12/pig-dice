//business logic
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Player(name, score, turn) {
    this.name = name;
    this.score = score;
    this.turn = turn;
}


//Front end logic
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
});
*/