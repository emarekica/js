  let Dolphins1 = [96, 108, 89];    // avg = 97.6666
  let Koalas1 = [88, 91, 100];      // avg = 93

  let Dolphins2 = [97, 112, 101];    // avg = 103.3333
  let Koalas2 = [109, 95, 123];      // avg = 109

  let Dolphins3 = [97, 112, 101];    // avg = 103.3333
  let Koalas3 = [109, 95, 106];      // avg = 103.3333


// concatenating strings

      /* const array1 = ['a', 'b', 'c'];
      const array2 = ['d', 'e', 'f'];
      const array3 = array1.concat(array2)
      */


      let DolphinsX = Dolphins1.concat(Dolphins2);
      let Dolphins = Dolphins3.concat(DolphinsX);
      console.log(Dolphins);

      let KoalasX = Koalas1.concat(Koalas2);
      let Koalas = Koalas3.concat(KoalasX);
      console.log(Koalas);

 // 1 - AVERAGE OF AN ARRAY


      // How to calculate average of an array?
      // answer: https://stackoverflow.com/questions/29544371/finding-the-average-of-an-array-using-js/29544442

      // You calculate an average by adding all the elements and then dividing by the number of elements
/* 
      let total = 0;
      
      for(var i = 0; i < grades.length; i++) {
        total += grades[i];
      }
      var avg = total / grades.length; */

      
      // Dolphins average

        let totalDolphins = 0;

        for(var i = 0; i < Dolphins.length; i++) {
          totalDolphins += Dolphins[i];    // total = total + Dolphins[i]
        }
        var avgDolphins = totalDolphins / Dolphins.length;
        console.log(`Dolphins: ${avgDolphins}`);


      // Koalas average

        let totalKoalas = 0;

        for(var i = 0; i < Koalas.length; i++) {
          totalKoalas += Koalas[i];
        }
        var avgKoalas = totalKoalas / Koalas.length;
        console.log("Koalas: " + avgKoalas);
  


// 2 - COMPARE AVERAGES

/*       How to compare averages of arrays? 
            = "IF" statement
         What are we comparing?
            = who has the biggest score
         How to test for the draw (same average score)?
            = strict exual === 
*/



        const minScore = 100;

         if(avgDolphins > avgKoalas && avgDolphins >= minScore) {
           console.log("Dolphins are the winners!");
         } else if(avgDolphins === avgKoalas && avgDolphins >= minScore && avgKoalas >= minScore) {
           console.log("Both teams are the winners!");
         } else if(avgKoalas > avgDolphins && avgKoalas >= minScore) {
           console.log("Koalas are the winning team!");
         } else {
           console.log("There is no winner!");
         }