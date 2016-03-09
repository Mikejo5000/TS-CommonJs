(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Student = (function () {
    function Student(firstname, middleinitial, lastname, latitude) {
        this.firstname = firstname;
        this.middleinitial = middleinitial;
        this.lastname = lastname;
        this.latitude = latitude;
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
    return Student;
})();
module.exports = Student;
},{}],2:[function(require,module,exports){
var Student = require('./Student');
var TypeScriptGreeter;
(function (TypeScriptGreeter) {
    "use strict";
    var Application;
    (function (Application) {
        function initialize() {
            document.addEventListener('deviceready', onDeviceReady.bind(this), false);
        }
        Application.initialize = initialize;
        function onDeviceReady() {
            document.addEventListener('pause', onPause, false);
            document.addEventListener('resume', onResume, false);
            window.addEventListener("batterystatus", onBatteryStatus.bind(this), false);
            var element = document.getElementById('geo');
            element.addEventListener('click', onClick.bind(this), false);
        }
        function onBatteryStatus(info) {
            console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
            createUser(info.level);
        }
        function createUser(loc) {
            var user = new Student("Jane", "M.", "User", loc);
            var element = document.getElementById('hello');
            element.textContent = greeter(user);
        }
        function greeter(person) {
            return "Hello, " + person.firstname + " " + person.lastname + " latitude: " + person.latitude;
        }
        function onClick(args) {
            navigator.geolocation.getCurrentPosition(onSuccess, onError, { timeout: 3000 });
        }
        function onSuccess(position) {
            createUser(position.coords.latitude);
            console.log("good");
        }
        function onError(err) {
            createUser("no location data");
            console.log("bad");
        }
        function onPause() {
        }
        function onResume() {
        }
    })(Application = TypeScriptGreeter.Application || (TypeScriptGreeter.Application = {}));
    window.onload = function () {
        Application.initialize();
    };
})(TypeScriptGreeter || (TypeScriptGreeter = {}));
},{"./Student":1}]},{},[2])


//# sourceMappingURL=app.js.map
