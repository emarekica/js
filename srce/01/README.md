1. Izradite HTML-datoteku naziva varijable.html ovog sadržaja:

<!DOCTYPE html>
<html lang="hr">
<head>
<meta charset="UTF-8" />
<title>Varijable</title>
</head>
<body>
<script type="text/javascript">
<!--
. . .
-->
</script>
</body>
</html>

2. JavaScript program pišite unutar elementa <script>.

3. Deklarirajte varijablu iBroj i dodijelite joj vrijednost 1.

4. Deklarirajte varijablu sNiz1 i dodijelite joj vrijednost 'Niz znakova'.

5. Deklarirajte varijablu sNiz2 i dodijelite joj vrijednost '3.14' .

6. Deklarirajte varijablu sNiz3 i dodijelite joj vrijednost 'U dva<br
/>retka'.

7. Deklarirajte varijablu bLogicka i dodijelite joj vrijednost true.

8. Vrijednosti ispišite pomoću funkcije document.write.

9. Promijenite vrijednost varijable bLogicka u false te ju ponovo ispišite.










## RJEŠENJE: 

var iBroj = 1,
sNiz1 = 'Niz znakova',
sNiz2 = '3.14',
sNiz3 = 'U dva<br />retka!',
bLogicka = true;
document.write('Broj: ' + iBroj + '<br />');
document.write('Niz 1: ' + sNiz1 + '<br />');
document.write('Niz 2: ' + sNiz2 + '<br />');
document.write('Niz 3: ' + sNiz3 + '<br />');
document.write('Logička: ' + bLogicka + '<br />');
bLogicka = false;
document.write('Logička: ' + bLogicka + '<br />');