// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {


    // Private variable to store the different meat prices
    var condimentPrices = {
        "ketchup": .76,
        "mayo": 1.00,
        "mustard": 12.00,
        "lemon juice": .09
    };

    // Augment the original object with another method
    maker.addCondiment = function(maker) {
        return condimentPrices[selectedCondiment]
    };


    console.log(condimentPrices);

    // Return the new, augmented object with the new method on it
    return maker;
})(SandwichMaker || {});