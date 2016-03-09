import Student = require('./Student');
import Person = require('./Person');

// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397705
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.

(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause, false);
        document.addEventListener('resume', onResume, false);

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        window.addEventListener("batterystatus", onBatteryStatus.bind(this), false);
        var element = document.getElementById('geo');
        element.addEventListener('click', onClick.bind(this), false);
    }

    function onBatteryStatus(info: any) {
        // Handle the online event
        console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
        createUser(info.level);
    }

    function createUser(loc: any) {
        let user = new Student("Jane", "M.", "User", loc);

        var element = document.getElementById('hello');
        element.textContent = greeter(user);
    }

    function greeter(person: Person) {
        return "Hello, " + person.firstname + " " + person.lastname + " latitude: " + person.latitude;
    }

    function onClick(args: any) {

        navigator.geolocation.getCurrentPosition(onSuccess, onError, { timeout: 3000 });
    }

    function onSuccess(position: any) {
        createUser(position.coords.latitude);
        console.log("good");
    }

    function onError(err: any) {
        createUser("no location data");
        console.log("bad");
    }

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    }

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    }

})();
