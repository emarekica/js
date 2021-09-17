1. Izradite HTML-datoteku naziva funkcije.html istog sadržaja kao u vježbi 1.

2. Iskoristite definicije funkcija ispis i fUdaljenost iz točke 5.1.

3. Deklarirajte varijable sMjesto, iMjerilo i iUkupno.

4. Varijabli sMjesto dodijelite proizvoljan naziv grada.

5. Varijabli iMjerilo dodijelite vrijednost 25.

6. Izračunajte udaljenost mjesta od mora, tj. duljinu puta od točke (0,0) do točke (3,5) kroz točku (2,1) na karti mjerila pohranjenoj u varijabli iMjerilo.

7. Ispišite dobrodošlicu u grad.

8. Ispišite izračunatu udaljenost do mora (u kilometrima).
































## RJEŠENJE


function ispis(sPoruka) {
  document.write(sPoruka, '<br />');
}

function fUdaljenost(x1, y1, x2, y2) {
  var fDx = x2 - x1,
  fDy = y2 - y1,
  fRezultat = Math.sqrt(fDx * fDx + fDy * fDy);
  return fRezultat;
}

var sMjesto = "Velegrad",
iMjerilo = 25,
iUkupno;

iUkupno = Math.round(fUdaljenost(0, 0, 2, 1) +
fUdaljenost(2, 1, 3, 5)) * iMjerilo;

ispis("Dobrodošli u " + sMjesto + "!");
ispis(sMjesto + " je " + iUkupno + " kilometara udaljen od mora.");