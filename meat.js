// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {


    // Private variable to store the different meat prices
    var meatPrices = {
        "bologna": .76,
        "hamburger": 1.00,
        "chicken": 12.00,
        "mystery": .09
    };

    // Augment the original object with another method
    maker.addMeat = function(maker) {
        return meatPrices[selectedMeat]
    };
    console.log(meatPrices);
    // Return the new, augmented object with the new method on it
    return maker;

})(SandwichMaker || {});