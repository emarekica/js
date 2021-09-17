1. Izradite HTML-datoteku naziva petlje.html istog sadržaja kao u vježbi 1.

2. Definirajte funkciju ispis kao u vježbi 3.

3. Deklarirajte varijable iA, iB, sOperacija i iRazlika.

4. Varijablama iA i iB dodijelite proizvoljne vrijednosti.

5. Varijabli sOperacija dodijelite niz znakova +.

6. Rabeći jednostavno grananje provjerite je li varijabla iA veća ili manja od iB.

7. Rabeći višestruko grananje ispišite koja je operacija zapisana u varijabli sOperacija.

8. Izračunajte i ispišite razliku brojeva iA i iB, ali tako da oduzmete veći broj od manjeg. Uporabite uvjetni operator.

9. Uporabom petlje for ispišite 10 redaka teksta: "For: redak x", gdje je x broj retka.

10. Napišite prethodnu petlju for pomoću petlje while.




























## RJEŠENJE

function ispis(sPoruka) {
  document.write(sPoruka, '<br />');
}

var iA = 10,
iB = 13,
sOperacija = '+',
iRazlika,
iBrojac,
jBrojac;

if (iA > iB) {
  ispis("iA je veci");
} else {
  ispis("iA je manji");
}

switch (sOperacija) {
  case '+':
  ispis('Zbrajanje');
  break;
case '-':
  ispis('Oduzimanje');
  break;
case '*':
  ispis('Množenje');
  break;
case '/':
  ispis('Dijeljenje');
  break;
default:
  ispis('Nepoznato');
}


iRazlika = iA > iB ? iA - iB : iB - iA;

ispis('Prava razlika: ' + iRazlika);

for (iBrojac = 1; iBrojac <= 10; iBrojac++) {
  ispis('For: redak ' + iBrojac);
}

jBrojac = 1;
while (jBrojac <= 10) {
  ispis('While: redak ' + jBrojac);
  jBrojac++;
}