// Using forEach()
let favoriteCities = ["Kigali", "Gisenyi", "Musanze", "Chicago", "Seattle"];
console.log("Favorite cities:");
favoriteCities.forEach(city => {
    console.log(city.toUpperCase());
});
// Favorite cities:
// KIGALI
// GISENYI
// MUSANZE
// CHICAGO
// SEATTLE
console.log("");

// Transforming with map()
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(num => num * num);
console.log("Squares:", squares);
// Squares: [ 1, 4, 9, 16, 25 ]
console.log("");

// Filtering with filter()
let scores = [85, 42, 90, 75, 30, 100];
let highScores = scores.filter(score => score >= 80);
console.log("High scores:", highScores);
// High scores: [ 85, 90, 100 ]
console.log("");

// Finding with find() and findIndex()
let favoriteFood = ["Mac and Cheese", "Lasagna", "Spaghetti and Meatballs", "Chicken Parmesan", "Pad Thai", "Ramen"];
let firstLongDish = favoriteFood.find(food => food.length > 4);
let firstLongDishIndex = favoriteFood.findIndex(food => food.length > 4);
console.log("First dish with more than 4 letters:", firstLongDish);
console.log("Index of that dish:", firstLongDishIndex);
// First dish with more than 4 letters: Mac and Cheese
// Index of that dish: 0
console.log("");

// Checking conditions with some() and every()
let temperatures = [64, 72, 75, 65, 68];
let anyAbove90 = temperatures.some(temp => temp > 90);
let allAbove50 = temperatures.every(temp => temp > 50);
console.log("Any temp above 90, all temps above 50:", [anyAbove90, allAbove50]);
// Any temp above 90, all temps above 50: [ false, true ]
console.log("");

// Reducing with reduce()
let budget = 100;
let prices = [23.99, 41.27, 2.99, 10];
let remaining = prices.reduce((total, price) => total - price, budget);
console.log("Budget amount left after gifts:", remaining);
// Budget amount left after gifts: 21.75