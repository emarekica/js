1. Izradite HTML-datoteku, naziva operatori.html, istog sadržaja kao u vježbi 1.

2. Deklarirajte dvije varijable iA i iB i dodijelite im proizvoljne cjelobrojne vrijednosti.

3. Deklarirajte varijable iSuma, iRazlika i iModulo koje će sadržavati redom: sumu, razliku, modulo varijabli iA i iB.

4. Postavite inicijalne vrijednosti varijabli iSuma, iRazlika i iModulo na nulu koristeći se operatorom pridruživanja.

5. Deklarirajte varijablu bLogicka.

6. Prikažite inicijalne vrijednosti varijabli iA i iB pomoću funkcije document.write.

7. Izračunajte tri aritmetičke operacije iz druge točke, dodijelite ih odgovarajućim varijablama i prikažite ih.

8. Inkrementirajte varijablu iA i dekrementirajte varijablu iB te prikažite nove vrijednosti varijabli iA i iB.

9. Već izračunatoj sumi dodajte novu vrijednost varijable iA koristeći se pridruživanjem s operacijom. Prikažite novu vrijednost varijable iSuma.

10. Varijabli bLogicka dodijelite rezultat usporedbe je li vrijednost varijable iA veća od 5. Prikažite vrijednost varijable bLogicka.

11. Prikažite iA + iB i uočite da se ne dobije zbroj već niz znakova.

12. Ispišite (iA + iB) i uočite da je zbroj točno ispisan.



























## RJEŠENJE: 

var iA = 10,
iB = 3,
iSuma,
iRazlika,
iModulo,
bLogicka;
iSuma = iRazlika = iModulo = 0;
document.write('Početna vrijednost iA: ' + iA + '<br />');
document.write('Početna vrijednost iB: ' + iB + '<br />');
iSuma = iA + iB;
iRazlika = iA - iB;
iModulo = iA % iB;
document.write('Suma: ' + iSuma + '<br />');
document.write('Razlika: ' + iRazlika + '<br />');
document.write('Modulo: ' + iModulo + '<br />');
iA++;
iB--;
document.write('iA nakon ++: ' + iA + '<br />');
document.write('iB nakon --: ' + iB + '<br />');
iSuma += iA;
document.write('Sumi dodamo iA: ' + iSuma + '<br />');
bLogicka = iA > 5;
document.write('Je li iA > 5: ' + bLogicka + '<br />');
document.write('Paziti na konverzije iA + iB: ' +
iA + iB + '<br />');
document.write('Paziti na konverzije (iA + iB): ' +
(iA + iB) + '<br />');