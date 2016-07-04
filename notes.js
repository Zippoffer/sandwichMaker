// IIFE INTRODUCTION - Immediately invoked function expression
// var outside = "global";

// function scopeStuff() {
//     var inside = "local";
//     console.log("outside from inside function", outside);
//     console.log("inside from inside function", inside);
// } 

// console.log("outside global:", outside);
// console.log("inside global?", inside);

// scopeStuff();


// Modules
var basicCarModule = {
    color: "blue", // These are not protected
    size: "sedan",

    options: {
        sunroof: true,
        racingStripes: false,
        spoiler: false,
        leatherSeats: true,
        heatedSeats: false,
        underLighting: false
    },

    setSpoilerOption: function(spoiler) {
        this.options.spoiler = spoiler; // basicCarModules.options.spoiler = spoiler;
    },

    setColor: function(color) {
        this.options.color = color;
    },

    setOptions: function(options) {
        this.options = options;
    }

}

console.log("basicCarModule", basicCarModule);

// You can call methods on the object
basicCarModule.setColor("green");

// You can also modify other keys, even without a setter function (bad!)
// An IIFE allows you to set up modules that are protected, with access through a public interface
basicCarModule.size = "minivan";
console.log("basicCarModule", basicCarModule);


var global_base = 500;

// This function is not immediately executed
function throwAway() {
    global_base += 500;
}

// You have to explicitly execute the function
throwAway();
console.log("global_base", global_base);


// This function expression is immediately executed.  This is IIFE syntax
(function(word) { // Passing an argument
    var _internal_base = 100;
    var _internal_sum = _internal_base + global_base;
    console.log("_internal_sum", _internal_sum);
    console.log("word", word);
})("hello"); // Calling function right here, taking an argument


// ADDING PRIVATE ATTRIBUTES
// Named IIFE function
var Sedan = (function() {
    var color = "blue"; // These are protected
    var type = "sedan";

    return { // The return here is an object
        manufacture_date: new Date(),
        getColor: function() {
            return color;
        },
        setColor: function(newColor) { // With this you can change color, with out a setter it will stay blue
            color = newColor;
        },
        getType: function() {
            return type;
        }
    };
})();

Sedan.setColor("green");
console.log("sedan.color", Sedan.color); // This returns undefined, since color is not available in the return above.
console.log("sedan.getColor", Sedan.getColor()); // This returns green when you call getColor()

// Hoisting - when a javscript page loads all gloabl variables are "hoisted to the top"


//bracket notation//


////solar system below here

var solarSystem = (function() {

    var planets = ["mercury", "venus", "earth", "mars"];
    var planetsLandedUpon = 42;

    var spaceCraft = ["tony", "rolf", "voyager", "hubble", "moooooooooo"]

    return {
        //getter for an array of planets that cannot be modified
        getPlanets: function() {
            return planets;
        },
        //getter/setter for number of planets that have been landed on
        getPlanetsLandedUpon: function() {
            return planetsLandedUpon;
        },
        setPlanetsLandedOnNum: function(num) {
            planetsLandedUpon = num;
        },
        //public property for holding a last modified date
        lastModified: Date.now(),

        getSpaceCraft: function() {
            return spaceCraft;
        },
        //setter for spaceCraft
        addSpaceCraft: function(newShip) {
            spaceCraft.push(newShip);
        }
    }




})();

//augmented solarsystem below here

var solarSystem = (function(oldSolarSystem) {

    var closestStars = ["dog", "catJama", "bugleHead", "almostThere"];
    var ageOfSolarSystem = 0;
    var dwarfPlanets = [];

    oldSolarSystem.getClosestStars = function() {
        return closestStars;
    };

    oldSolarSystem.addDwarfPlanet = function(lompOfRock) {
        dwarfPlanets.push(lompOfRock);
    };


    return oldSolarSystem;

})(solarSystem);