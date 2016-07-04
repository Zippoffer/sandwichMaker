// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

    // Private variable to store the different meat prices
    var cheesePrices = {
        "provolone": .50,
        "cheddar": .23,
        "manchego": .56,
        "limberger": 3.00
    };


    // Augment the original object with another method
    maker.addCheese = function(maker) {
        return cheesePrices[selectedCheese]
    };
    console.log(cheesePrices);
    // Return the new, augmented object with the new method on it
    return maker;

})(SandwichMaker || {});