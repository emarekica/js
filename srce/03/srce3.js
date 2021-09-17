let sMjesto = "Velika Gorica";
let iMjerilo = 25;
let iUkupno;

function ispis(sPoruka) {
  document.write(sPoruka);
}

function fUdaljenost(x1, y1, x2, y2) {
  var fDx,
  fDy,
  fRezultat;
  fDx = x2 - x1;
  fDy = y2 - y1;

  fRezultat = Math.sqrt(fDx * fDx + fDy * fDy);
  return fRezultat;
}

iUkupno = Math.round(fUdaljenost(0, 0, 2, 1) +
fUdaljenost(2, 1, 3, 5)) * iMjerilo;

console.log(iUkupno);

console.log("Dobrodošli u grad" + sMjesto + ". " + "Točno ste " + iUkupno + " km udaljeni od mora.");