console.log("Test start"); // 1

setTimeout(() => console.log("0 sec timer"), 0); // 4

// resolves immediately
Promise.resolve("Resolved promise 1").then(res => console.log(res)); // 3

Promise.resolve("Resolved promise 2").then(res => {
  for(let i = 0; i < 10000000; i++){}
  console.log(res)
  }
);




console.log("Test end"); // 2

// top level code (outside of any callback) runs first >>> console.log
// microtasks (from Promise) from microtask cue have priority >>> Promise.resolve
// regular callbacks from callback cue come last, are delayed if a microtask is late