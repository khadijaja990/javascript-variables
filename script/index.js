
// 10% Discount Assignment

let price = prompt("Enter a price ($49.99):");

let cleanPrice = price.replace("$", "");

let numericPrice = Number(cleanPrice);

let discount = numericPrice * 0.10;

let newPrice = numericPrice - discount;

console.log("Your new price is: $" + newPrice.toFixed(2));
