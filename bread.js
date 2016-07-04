// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

    // Private variable to store the different meat prices
    var breadPrices = {
        "whole wheat": .25,
        "white": .05,
        "potato": .25,
        "sweet": .25
    };


    // Augment the original object with another method
    maker.addBread = function(maker) {
        return breadPrices[selectedBread]
    };
    console.log(breadPrices);
    // Return the new, augmented object with the new method on it
    return maker;

})(SandwichMaker || {});