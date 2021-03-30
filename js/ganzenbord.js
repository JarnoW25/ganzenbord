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
uitkomstDb = Math.ceil(Math.random() * 6);
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

var iRed = 0;
var iYellow = 0;
var iBlue = 0;
var iGreen = 0;

function MyMovement() {
               
                switch(beurtTeller) {
                    case 2:
                    var iNum = iRed + uitkomstDb;
                    for (;iRed <= iNum; iRed++) {
                        if (iRed <= 9) {
                                redGamePiece.y = redGamePiece.y + 60;
                                console.log(redGamePiece.y,"en", redGamePiece.x);
                                console.log("xoxo");
                        }
                        else if (iRed >= 9) {
                            redGamePiece.x = redGamePiece.x + 60;
                            console.log(redGamePiece.y,"en", redGamePiece.x);
                            console.log("yoyo");
                        }
                    }
                        // redGamePiece.y = redGamePiece.y + uitkomstDb * 60;
                        // console.log(redGamePiece.y,"en", redGamePiece.x)
                    break;
                    case 1:
                    var iNum = iYellow + uitkomstDb;
                    for (;iYellow <= iNum; iYellow++) {
                        if (iYellow <= 9) {
                                yellowGamePiece.y = yellowGamePiece.y + 60;
                                console.log(yellowGamePiece.y,"en", yellowGamePiece.x);
                                console.log("xoxo");
                        }
                        else if (iYellow >= 9) {
                            yellowGamePiece.x = yellowGamePiece.x + 60;
                            console.log(yellowGamePiece.y,"en", yellowGamePiece.x);
                            console.log("yoyo");
                        }
                    }
                        // console.log(yellowGamePiece.y,"en", yellowGamePiece.x)
                    break;
                    case 3:
                    var iNum = iBlue + uitkomstDb;
                    for (;iBlue <= iNum; iBlue++) {
                        if (iBlue <= 9) {
                                blueGamePiece.y = blueGamePiece.y + 60;
                                console.log(blueGamePiece.y,"en", blueGamePiece.x);
                                console.log("xoxo");
                        }
                        else if (iBlue >= 9) {
                            blueGamePiece.x = blueGamePiece.x + 60;
                            console.log(blueGamePiece.y,"en", blueGamePiece.x);
                            console.log("yoyo");
                        }
                    }
                    break;
                    case 4:
                    var iNum = iGreen + uitkomstDb;
                    for (;iGreen <= iNum; iGreen++) {
                        if (iGreen <= 9) {
                                greenGamePiece.y = greenGamePiece.y + 60;
                                console.log(greenGamePiece.y,"en", greenGamePiece.x);
                                console.log("xoxo");
                        }
                        else if (iGreen >= 9) {
                            greenGamePiece.x = greenGamePiece.x + 60;
                            console.log(greenGamePiece.y,"en", greenGamePiece.x);
                            console.log("yoyo");
                        }
                    }
                    break;
                    default:
                        alert(beurtTeller);
                        } 
                    // console.log(beurtTeller);
                    console.log(iRed ,"en", iNum);
        }

// function MyStop() {
//   redGamePiece.speedY = 0;
//   redGamePiece.speedX = 0;
//   yellowGamePiece.speedY = 0;
//   yellowGamePiece.speedX = 0;
//   blueGamePiece.speedY = 0;
//   blueGamePiece.speedX = 0;
//   greenGamePiece.speedY = 0;
//   greenGamePiece.speedX = 0;
// }

// function dobbelgooien() {
//     beurt(3);
//     MyMovement();
//     setTimeout(MyStop, 2150);
// }
