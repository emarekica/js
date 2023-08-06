// fulfilled promise = win
// rejected promise = lose

// promise constructor, accepts executor function
// promises = objects
const lotteryPromise = new Promise(function(resolve, reject){

  console.log('Lottery draw is happening...');

  // timer simulates time between buying the ticket and result
  // async, the point of promises
  setTimeout(function() {
    // produces resolved value = future value of the promise
    if(Math.random() >= 0.5) {
      resolve('You win! :)');
    } else {
      reject(new Error('You lost. :('));
    }
  }, 2000);
});

// consuming promise
// then() is called with the resolved value of promise
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));


