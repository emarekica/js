/*
Build the image loading functionality.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input.
This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path (async operation).
When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise.
The fulfilled value should be the image element itself.
In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Consume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

*/

const imgContainer = document.querySelector('.images');
imgContainer.style.objectFit = "contain";

// timer
const wait = function(seconds) {
  return new Promise(function(resolve) {
    setTimeout(resolve, seconds * 1000)
  });
};

const createImage = function(imgPath) {

  // returns promise
  return new Promise((resolve, reject) => {
    const newImg = document.createElement('img');

    // const imgPath = newImg.getAttribute('src');
    newImg.src = imgPath;

    // adding SRC attribute
    newImg.setAttribute('src', imgPath);


    // Listen for the 'load' event to know when the image is done loading
    newImg.addEventListener('load', () => {
        // appending new image to the DOM
        imgContainer.append(newImg);

        // resolve promise with new loaded image element
        resolve(newImg);
    })

    // Listen for 'error' event in case img fails to load
    newImg.addEventListener('error', () => {

      // Reject promise with error msg upon error event
      reject (new Error("There was an error, the image couldn't load"));
    })
  })
}

// global variable
let loadedImg;

// Consume the promise and handle errors
createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');

    //Pause for 2 seconds
    return wait(2);
  })
  .then(() => {
    // Hide current image and load second image by adding 'display: none'
    currentImg.style.display = "none";

    return createImage("img/img-2.jpg");
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');

    return wait(2);
  })
  .then(() => {
    // Hide second image
    currentImg.style.display = "none";

    return createImage("img/img-3.jpg");
  })
  .then((img) => {
    currentImg = img;
    console.log('Image 3 loaded');

    return wait(2);
  })
  .catch((error) => {
    console.error(error);
  });
