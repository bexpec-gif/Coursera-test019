// IIFE - Immediately Invoked Function Expression
(function(window) {
    // STEP 1: Create an object called 'byeSpeaker'
    var byeSpeaker = {};

    // STEP 2: Create a property 'speak' that contains a function
    // The function takes a 'name' parameter and logs "Goodbye " + name
    byeSpeaker.speak = function(name) {
        console.log("Goodbye " + name);
    };

    // STEP 3: Expose the 'byeSpeaker' object to the global scope
    window.byeSpeaker = byeSpeaker;

})(window);
