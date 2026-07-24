// IIFE - Immediately Invoked Function Expression
(function(window) {
    // STEP 1: Create an object called 'helloSpeaker'
    var helloSpeaker = {};

    // STEP 2: Create a property 'speak' that contains a function
    // The function takes a 'name' parameter and logs "Hello " + name
    helloSpeaker.speak = function(name) {
        console.log("Hello " + name);
    };

    // STEP 3: Expose the 'helloSpeaker' object to the global scope
    window.helloSpeaker = helloSpeaker;

})(window);
