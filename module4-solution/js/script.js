var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
    var currentName = names[i];

    if (currentName.charAt(0).toLowerCase() === 'j') {
        byeSpeaker.speak(currentName);
    } else {
        helloSpeaker.speak(currentName);
    }
}
