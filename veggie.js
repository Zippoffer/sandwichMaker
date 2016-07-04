var SandwichMaker = (function(maker) {


    // Private variable to store the different meat prices
    var veggiePrices = {
        "kale": .76,
        "brussel sprouts": 1.00,
        "almonds": 12.00,
        "spinach": .09
    };

    // Augment the original object with another method
    maker.addVeggies = function(maker) {
        return veggiePrices[selectedVeggie]
    };


    console.log(veggiePrices);

    // Return the new, augmented object with the new method on it
    return maker;
})(SandwichMaker || {});