//business logic
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Player(first, second) {
    this.firstPlayer = first;
    this.secondPlayer = second;
}




//Front end logic
$(document).ready(function() {
    $("form#player-names").submit(function(event) {
        event.preventDefault();

        var inputtedFirstPlayer = $("input#player1").val();
        var inputtedSecondPlayer = $("input#player2").val();

        var newPlayers = new Player(inputtedFirstPlayer, inputtedSecondPlayer);

        /*
        $("#player1Name").text(player1);
        $("#player2Name").text(player2);
        */

        $("h2#name1").append("<span class='Player'>" + newPlayers.firstPlayer + "</span>");
        $("h2#name2").append("<span class='Player'>" + newPlayers.secondPlayer + "</span>");

        $("input#player1").val("");
        $("input#player2").val("");



    });
});