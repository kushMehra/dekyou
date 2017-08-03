var Firebase = require("nativescript-plugin-firebase-common").Firebase;

console.log("in firebase.ts");

export var firebase = Firebase.createNew({
    url: 'https://shopping-7bdc2.firebaseio.com/items'
    // persist: false // turn off offline disk persistence
});

//console.log("firebase root " + firebase.child("items").key());