// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits 
// in your array.
// Make a array of your three favorite fruits and call it favorite_fruits.
// Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if
// block should print a statement, such as You really like bananas!


const favorite_fruits: string[] = ['banana',  'strawberry', 'apple']

if(favorite_fruits.includes('banana')){
    console.log("You really like bananas!");
}
if(favorite_fruits.includes('strawberry')){
    console.log("You really like strawberry!");
}
if(favorite_fruits.includes('apple')){
    console.log("You really like apple!"); 
}
if(favorite_fruits.includes('pineapple')){
    console.log("I don't like pineapple.");
}
if(favorite_fruits.includes('mango')){
    console.log("I don't like mango.");
}