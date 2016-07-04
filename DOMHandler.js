// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;
// Variable to hold topping that the user selects
var selectedTopping;
// var SandwichMaker = "";
// Get a reference to the <select> element that has all the meat options
var tallyEl = document.getElementById("tally");
var totalPrice = document.getElementById("totalPrice");
var meatButton = document.getElementById("meatButton");
var meatChooser = document.getElementById("meatChooser");
var cheeseButton = document.getElementById("cheeseButton");
var cheeseChooser = document.getElementById("cheeseChooser");
var breadButton = document.getElementById("breadButton");
var breadChooser = document.getElementById("breadChooser");
var condimentButton = document.getElementById("condimentButton");
var condimentChooser = document.getElementById("condimentChooser");
var veggieButton = document.getElementById("veggieButton");
var veggieChooser = document.getElementById("veggieChooser");
var finalFood = document.getElementById("finalFood");
var reset = document.getElementById("reset");
// var meatPrices = {"bologna": .76, "hamburger": 1.00, "chicken": 12.00, "mystery": .09};
/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/


// function renderLine(line) {
// 	var item = Object.keys(line);
// 	return `<p>${item} -- ${line[item]}</p>`;
// }
// Get the value chosen from the DOM
meatChooser.addEventListener("change", function(event) {
    selectedMeat = event.target.value;
    console.log(selectedMeat);
    // Determine the price of the topping chosen
    // var meatPrice = SandwichMaker.addMeat;
    var meatPrice = SandwichMaker.addMeat();
    SandwichMaker.addTopping + meatPrice;
    // Add the topping to the SandwichMaker to increase the total price
    console.log("meatPrice", meatPrice);
});
selectedMeat = meatButton.innerHTML;
meatButton.addEventListener("click", function() {
    console.log(event);
    tallyEl.innerHTML += `<br>` + selectedMeat + " " + SandwichMaker.addMeat() + `</br>`;
    // totalPrice.innerHTML = selectedMeat;
});
//   for (var i = 0; i < meatButton.length; i++) {
// meatButton[i].addEventListener('click', (event) => meatChooser(i, event.currentTarget.id.slice(6)))
//   }
// console.log(meatButton);
// Get the value chosen from the DOM
veggieChooser.addEventListener("change", function(event) {
    selectedVeggie = event.target.value;
    console.log(selectedVeggie);
    // Determine the price of the topping chosen
    var veggiePrice = SandwichMaker.addVeggies();
    // Add the topping to the SandwichMaker to increase the total price
    SandwichMaker.addTopping + veggiePrice;
    console.log("veggiePrice", veggiePrice);
});
selectedVeggie = veggieButton.innerHTML;
veggieButton.addEventListener("click", function() {
    tallyEl.innerHTML += `<br>` + selectedVeggie + " " + SandwichMaker.addVeggies() + `</br>`;
    // totalPrice.innerHTML = selectedVeggie;
});


// Get the value chosen from the DOM
condimentChooser.addEventListener("change", function(event) {
    selectedCondiment = event.target.value;
    console.log(selectedCondiment);
    // Determine the price of the topping chosen
    var condimentPrice = SandwichMaker.addCondiment();
    console.log("condimentPrice", condimentPrice);
    // Add the topping to the SandwichMaker to increase the total price
    SandwichMaker.addTopping + condimentPrice;
});
selectedCondiment = condimentButton.innerHTML;
condimentButton.addEventListener("click", function() {
    tallyEl.innerHTML += `<br>` + selectedCondiment + " " + SandwichMaker.addCondiment() + `</br>`;
    // totalPrice.innerHTML = selectedCondiment;
});


// Get the value chosen from the DOM
breadChooser.addEventListener("change", function(event) {
    selectedBread = event.target.value;
    console.log(selectedBread);
    // Determine the price of the topping chosen
    var breadPrice = SandwichMaker.addBread();
    console.log("breadPrice", breadPrice);
    // Add the topping to the SandwichMaker to increase the total price
    SandwichMaker.addTopping + breadPrice;
});
selectedBread = breadButton.innerHTML;
breadButton.addEventListener("click", function() {
    console.log(event);
    tallyEl.innerHTML += `<br>` + selectedBread + " " + SandwichMaker.addBread() + `</br>`;
    // totalPrice.innerHTML = selectedBread;
});



// Get the value chosen from the DOM
cheeseChooser.addEventListener("change", function() {
    selectedCheese = event.target.value;
    console.log(selectedCheese);
    // Determine the price of the topping chosen
    var cheesePrice = SandwichMaker.addCheese();
    console.log("cheesePrice", cheesePrice);
    // Add the topping to the SandwichMaker to increase the total price
    SandwichMaker.addTopping + cheesePrice;
    selectedCheese.innerHTML;
});
selectedCheese = cheeseButton.innerHTML;
cheeseButton.addEventListener("click", function() {
    console.log("click?", event);
    tallyEl.innerHTML += `<br>` + selectedCheese + " " + SandwichMaker.addCheese() + `</br>`;
    // totalPrice.innerHTML =  selectedCheese;
    // cheeseButton.innerHTML = SandwichMaker.addCheese();
    // SandwichMaker.innerHTML = selectedCheese + totalPrice;
});



// finalFood.addEventListener("click", function() {
//     if (SandwichMaker.addMeat() && SandwichMaker.addCheese()) {
//         totalPrice.innerHTML = `${SandwichMaker.addMeat() + SandwichMaker.addCheese()}`
//     } else if (SandwichMaker.addMeat() && SandwichMaker.addVeggies()) {
//         totalPrice.innerHTML = `${SandwichMaker.addMeat() + SandwichMaker.addVeggies()}`
//     } else if (SandwichMaker.addMeat() && SandwichMaker.addCondiment()) {
//         totalPrice.innerHTML = `${SandwichMaker.addMeat() + SandwichMaker.addCondiment()}`
//     } else if (SandwichMaker.addMeat() && SandwichMaker.addBread()) {
//         totalPrice.innerHTML = `${SandwichMaker.addMeat() + SandwichMaker.addBread()}`
//     } else if (SandwichMaker.addBread() && SandwichMaker.addCheese()) {
//         totalPrice.innerHTML = `${SandwichMaker.addBread() + SandwichMaker.addCheese()}`
//     } else if (SandwichMaker.addBread() && SandwichMaker.addCheese()) {
//         totalPrice.innerHTML = `${SandwichMaker.addBread() + SandwichMaker.addCheese()}`
//     } else if (SandwichMaker.addBread() && SandwichMaker.addCheese()) {
//         totalPrice.innerHTML = `${SandwichMaker.addBread() + SandwichMaker.addCheese()}`
//     } else if (SandwichMaker.addBread() && SandwichMaker.addCheese()) {
//         totalPrice.innerHTML = `${SandwichMaker.addBread() + SandwichMaker.addCheese()}`
//     } else if (SandwichMaker.addMeat() && SandwichMaker.addCheese()) {
//         totalPrice.innerHTML = `${SandwichMaker.addMeat() + SandwichMaker.addCheese()}`
//     }
//     // totalPrice.innerText = SandwichMaker.addMeat() + SandwichMaker.addCheese();
//     // tallyEl ++ = finalFood.innerHTML;
// });

finalFood.addEventListener("click", function() {
    totalPrice.innerHTML = `<br>${SandwichMaker.addMeat() + SandwichMaker.addCheese() + SandwichMaker.addVeggies() + SandwichMaker.addCondiment() + SandwichMaker.addBread()}</br>`;
    // tallyEl ++ = finalFood.innerHTML;
});
reset.addEventListener("click", function() {
    totalPrice.innerHTML = "";
    tallyEl.innerHTML = "";
});
// console.log("food", SandwichMaker);

// var finalFood = document.querySelector('#tally');
// 	finalSandwichPrice = SandwichMaker.getTotalPrice();
// 	tally.innerHTML += totalPrice;
// console.log(makeSandwich);
// console.log(finalSandwichPrice);
///