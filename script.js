var laskuri = 0; // laskee yritysten määrän
var omapiste = 0; // Laskee omat pisteet
var konepiste = 0; // Laskee koneen pisteet
var oikea = 0;

function uusiPeli () {
   laskuri = 0;// Nollaa laskurin
  document.getElementById("numero").value="";
}

function tarkista(){
  var anum = document.getElementById('numero').value; // Hakee sivulta annetun numeron
if (laskuri == 0){
  oikea = Math.floor(Math.random()*10 +1);
}

  laskuri++;


  console.log(anum);
  console.log(oikea);
  console.log(laskuri);


  if (anum.length == 0){
    alert("Annettu numero pitää syöttää!")
  }
  if ((/^\N\N$/).test(anum)) {
    alert("Annettu arvo pitää olla numero")
  }
  if (anum == 0 | anum >11){
    alert("luvun pitää olla välillä")
  }
  if (anum == oikea){
    omapiste++;
    document.getElementById("omatulos").value=omapiste;
    laskuri = 0;
    document.getElementById("numero").value="";
    alert ("Arvasit oikein! Luku on " + anum )

  }
if (anum > oikea){
  document.getElementById("numero").value="";
  alert ("Luku on pienempi kuin " + anum )
}
if (anum < oikea){
  document.getElementById("numero").value="";
  alert ("Luku on suurempi kuin " + anum )
}
if (laskuri == 3 && !(anum == oikea)) {
  konepiste++;
  document.getElementById("konetulos").value=konepiste;
  document.getElementById("numero").value="";
  laskuri = 0;
  alert ("Tämä oli kolmas ja viimeinen yrityksesi. Kone voitti tämän erän.")

}
};
