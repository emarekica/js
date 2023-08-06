// fulfilled promise = win
// rejected promise = lose

// 1. Promisifying

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


// 2. Promisify setTimeout
const wait = function(seconds) {

  // create & return promise
  // timer cannot fail >> no need for "reject"
  return new Promise(function(resolve) {
    setTimeout(resolve, seconds * 1000)
  });
};

// Consuming promise:
// creates promise that waits 2 secs and resolves
// does not receive resolved value
wait(2).then(() => {
  console.log('I waited for 2 secs')

  // returns new promise
  return wait(1);
  })

  // handles newly created promise
  .then(() => console.log('I waited for 1 second'));

// 3. Create fulfilled / rejected promise immediately

// static method on Promise constructor
// pass in resolved value as parameter
// resolves immediately
Promise.resolve('Resolved again!').then(res => console.log(res));
Promise.reject(new Error('Problem!')).catch(err => console.error(err));