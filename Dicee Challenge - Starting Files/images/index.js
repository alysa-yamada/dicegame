
function play()
{

    var randomnumber1 = Math.random ();
    randomnumber1 = randomnumber1 * 6;
    randomnumber1 = Math.floor(randomnumber1) + 1;

    var dicename = "images/dice" + randomnumber1 + ".png"

    document.querySelector("img").setAttribute("src", dicename);

    //dice 2 

    var randomnumber2 = Math.random ();
    randomnumber2 = randomnumber2 * 6;
    randomnumber2 = Math.floor(randomnumber2) + 1;


    var dicename2 = "images/dice" + randomnumber2 + ".png";

    document.getElementsByClassName("img2")[0].setAttribute("src", dicename2);

//if player 1 wins //

if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 👾";

}

else if (randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🦖"

}

else {
    document.querySelector("h1").innerHTML = "Tied! 🙌"
}

    //console.log("we rolled " + randomnumber1 + ", filename:" +dicename);
}

//play();