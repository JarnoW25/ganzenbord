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
