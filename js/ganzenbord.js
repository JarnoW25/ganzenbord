//voor de movement
var redGamePiece, blueGamePiece, yellowGamePiece, greenGamePiece;
var myBackground;
//zorgen dat de dobbel knop gehide is
beurtzien();
//variabelen aanmaken
  var spelervak = [];
  var uitkomstDb;
  var beurtTeller = 1;
  var overSchot = 0;
  var spelerNaam = [];
//zien van de dobbel knop aan/uit functie
function beurtzien() {
  var b = document.getElementById("beurt");
  if (b.style.display === "none") {
    b.style.display = "block";
  } else {
    b.style.display = "none";
  }
}

//checken met hoeveel ze spelen
var aantalSpelers = prompt("met hoeveel spelen jullie?");
if (aantalSpelers <= 4 && aantalSpelers >= 2) {
//aanmaken spelers
  for (var i = 1; i <= aantalSpelers; i++) {
    spelervak[i] = 0;
    //verander spelernaam

    spelerNaam[i] = prompt("Wat is de naam van speler " + [i] + " ?")
  }
  beurtzien();
}
else{
  document.write("dit spel is bedoelt om met 2-4 spelers te spelen, herlaad de pagina om het opnieuw in te vullen");
  }

//beurt functie
function beurt() {
beurtzien();
uitkomstDb = Math.ceil(Math.random() * 1);
spelervak[beurtTeller] = spelervak[beurtTeller] + uitkomstDb;
  console.log(spelerNaam[beurtTeller] + " heeft " + uitkomstDb + " gegooid en staat nu op " + spelervak[beurtTeller]);
if (spelervak[beurtTeller] == 69) {
  alert(spelerNaam[beurtTeller] + " heeft " + uitkomstDb + " gegooid en staat op " + spelervak[beurtTeller] + " en heeft dus gewonnen!!!!");
}
else if (spelervak[beurtTeller] > 69) {
overSchot = spelervak[beurtTeller] - 69;
spelervak[beurtTeller] = 69 - overSchot;
alert(spelerNaam[beurtTeller] + " heeft " + uitkomstDb + " gegooid en staat nu op " + spelervak[beurtTeller]);
console.log(spelerNaam[beurtTeller] + " heeft over 69 gegooid en gaat terug naar " + spelervak[beurtTeller]);
if (spelervak[beurtTeller] == 68) {
      spelervak[beurtTeller] = 1;
      alert("Jager schiet " + spelerNaam[beurtTeller] + " dood. Ga terug naar 1");
      console.log("Jager schiet " + spelerNaam[beurtTeller] + " dood. Ga terug naar 1");
    }
beurtTeller++;

if (beurtTeller > aantalSpelers) {
  beurtTeller = 1;
}
beurtzien();
}
else {
  alert(spelerNaam[beurtTeller] + " heeft " + uitkomstDb + " gegooid en staat nu op " + spelervak[beurtTeller]);

// Speciale vakjes uitleg
switch (spelervak[beurtTeller]) {
      case 6:
        spelervak[beurtTeller] = 23;
        alert("Ganzenvlucht! Vlieg door naar 23!");
        console.log("Ganzenvlucht! Vlieg door naar 23!")
        break;
      case 11:
        spelervak[beurtTeller] = 60;
        alert(spelerNaam[beurtTeller] + " heeft het witte poeder ontdekt. Wat een snelheid! Ga verder naar 60.");
        console.log(spelerNaam[beurtTeller] + " heeft het witte poeder ontdekt. Wat een snelheid! Ga verder naar 60.");
        break;
      case 13:
        spelervak[beurtTeller] = spelervak[beurtTeller] - uitkomstDb;
        alert("Prikkeldraad, ga het aantal ogen terug.");
        console.log("Prikkeldraad, ga het aantal ogen terug.");
        break;
      case 18:
        spelervak[beurtTeller] = spelervak[beurtTeller] + uitkomstDb;
        alert("Dubbele worp voor " + spelerNaam[beurtTeller] + " !");
        console.log("Dubbele worp voor " + spelerNaam[beurtTeller] + " !");
        break;
      case 24:
        spelervak[beurtTeller] = 17;
        alert("Helaas, " + spelerNaam[beurtTeller] + " kan niet zwemmen. Ga terug naar 17.");
        console.log("Helaas, " + spelerNaam[beurtTeller] + " kan niet zwemmen. Ga terug naar 17.");
        break;
      case 38:
        spelervak[beurtTeller] = 10;
        alert("Een dierenactivist heeft " + spelerNaam[beurtTeller] + " meegenomen. Ga terug naar 10.");
        console.log("Een dierenactivist heeft " + spelerNaam[beurtTeller] + " meegenomen. Ga terug naar 10.");
        break;
      case 45:
        spelervak[beurtTeller] = spelervak[beurtTeller] - uitkomstDb;
        alert("Prikkeldraad, ga het aantal ogen terug.");
        console.log("Prikkeldraad, ga het aantal ogen terug.");
        break;
      case 57:
        spelervak[beurtTeller] = 29;
        alert(spelerNaam[beurtTeller] + " heeft een hartaanval. Doe eens rustig! Ga terug naar 29.");
        console.log(spelerNaam[beurtTeller] + " heeft een hartaanval. Doe eens rustig! Ga terug naar 29.");
        break;
      case 61:
        if (uitkomstDb === 1) {
        spelervak[beurtTeller] = 1;
        alert("Helaas, het witte poeder was fataal. " + spelerNaam[beurtTeller] + " moet nu terug naar 1");
        console.log("Helaas, het witte poeder was fataal. " + spelerNaam[beurtTeller] + " moet nu terug naar 1");
        }
        break;
      case 68:
        spelervak[beurtTeller] = 1;
        alert("Jager schiet " + spelerNaam[beurtTeller] + " dood. Ga terug naar 1.");
        console.log("Jager schiet " + spelerNaam[beurtTeller] + " dood. Ga terug naar 1.");
        break;
      default:
    }

  beurtTeller++;
  if (beurtTeller > aantalSpelers) {
    beurtTeller = 1;
  }
  beurtzien();
}
}
  function startGame() {
    switch(aantalSpelers) {
        case "2":
            redGamePiece = new component(15, 15, "red", 90, 50 );
            yellowGamePiece = new component(15, 15, "yellow", 90, 30);
            blueGamePiece = new component(0, 0, "blue", 60, 50);
            greenGamePiece = new component(0, 0, "green", 60, 30);
        break;
        case "3":
            redGamePiece = new component(15, 15, "red", 90, 50 );
            yellowGamePiece = new component(15, 15, "yellow", 90, 30);
            blueGamePiece = new component(15, 15, "blue", 60, 50);
            greenGamePiece = new component(0, 0, "green", 60, 30);
        break;
        case "4":
            redGamePiece = new component(15, 15, "red", 90, 50 );
            yellowGamePiece = new component(15, 15, "yellow", 90, 30);
            blueGamePiece = new component(15, 15, "blue", 60, 50);
            greenGamePiece = new component(15, 15, "green", 60, 30);
        break;
        default:
        alert("dit spel is bedoelt om met 2-4 spelers te spelen, herlaad de pagina om het opnieuw in te vullen");
    }

    myBackground = new component(1000, 700, "guusenbord.png", 0, 0, "image");
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1000;
        this.canvas.height = 700;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        document.getElementById("Maggi").appendChild(this.canvas);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function(){
        ctx = myGameArea.context;
        if (type == "image") {
            ctx.drawImage( 
                this.image, 
                this.x, 
                this.y,
                this.width, 
                this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        this.newPos = function() {
            this.x += this.speedX;
            this.y += this.speedY;
        } 
    }
    //the width, heigth, etc. are defined with what the are so that you can have multiple components that arent the excect same but are already defined in line 20-23

    //also the compenent is simply said the processor of this code, if you need an extra object or something you make it in function startgame, it drops through compenent and bob's your uncle, you object is made. all that's lef is the constant clean up in function updategamearea
}

function updateGameArea() {
    myGameArea.clear();
    myBackground.update();
    redGamePiece.update();
    redGamePiece.newPos();
    yellowGamePiece.update();
    yellowGamePiece.newPos();
    blueGamePiece.update();
    blueGamePiece.newPos();
    greenGamePiece.update();
    greenGamePiece.newPos();
}

var ired = 0;
var iyellow = 0;
var iblue = 0;
var igreen = 0;
var C;
var N;

function change() {
    switch(beurtTeller) {
        case 1:

            C = yellowGamePiece;
            N = iyellow;

        break;
        case 2:


            C = redGamePiece;
            N = ired;

        break;
        case 3:

            C = blueGamePiece;
            N = iblue;
        break;
        case 4:

            C = greenGamePiece;
            N = igreen;
        break;
        default:
            alert("oh no");
        }
}



//the variables above are to keep up with how far each player is, in the for command below it is used to point towards which ways the player will go
//the iNum is to point where the player needs to go.
//60 is added to the y and X of each player so it actually moves on screen
function MyMovement() {
                change();
                    var iNum = N + uitkomstDb;
                    for (;N
                     <= iNum; N++) {
                        if (N <= 9 ) {
                            C.y = C.y + 33;
                            // console.log(C.y,"en", C.x);
                            // console.log("maxxo", N);
                        }
                        else if (N > 38 && N <= 45 || N > 62 && N <= 65) {
                             C.y = C.y + 35;
                        }
                        else if (N > 9 && N <= 20 || N > 45 && N <= 52 || N > 65 && N <= 68) {
                            C.x = C.x + 38;
                            // console.log(C.y,"en", C.x);
                            // console.log("maxyo",N);
                        }
                        if (N === 20) {
                        switch(C) {
                            case yellowGamePiece:
                                C.y = 637;
                                C.x = 900;
                            break;
                            case redGamePiece:
                                C.y = 657;
                                C.x = 900;
                            break;
                            case blueGamePiece:
                                C.y = 637;
                                C.x = 930;
                            break;
                            case greenGamePiece:
                                C.y = 657;
                                C.x = 930;
                            break;
                        }
                        }
                        if (N === 38) {
                        switch(C) {
                            case yellowGamePiece:
                                C.y = 50;
                                C.x = 250;
                            break;
                            case redGamePiece:
                                C.y = 30;
                                C.x = 250;
                            break;
                            case blueGamePiece:
                                C.y = 50;
                                C.x = 220;
                            break;
                            case greenGamePiece:
                                C.y = 30;
                                C.x = 220;
                            break;
                        }
                        }
                        else if (N > 20 && N <= 29 || N > 52 && N <= 57 || N > 68 && N <= 69) {
                            C.y = C.y - 35;
                             // console.log(C.y,"en", C.x);
                            // console.log("minxo",N);
                        }
                        else if (N > 29 && N <= 38 || N > 57 && N <= 62) {
                            C.x = C.x - 38;
                             // console.log(C.y,"en", C.x);
                            // console.log("minyo",N);
                        }
                        console.log(N);
                        console.log(C.y,"en", C.x);
                    }
                    N = N - 1;
                    switch(beurtTeller) {
                    case 1:
                        iyellow = iyellow + uitkomstDb;
                    break;
                    // default:
                    case 2:
                        ired = ired + uitkomstDb;
                    break;
                    case 3:
                        iblue = iblue + uitkomstDb;
                    break;
                    case 4:
                        igreen = igreen + uitkomstDb;
                    break;
                        alert("NO");
}
}