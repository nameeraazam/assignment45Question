var cars = 'subaru';
//Test 1: Equality comparison (True)
console.log("Is car == 'sabru'? I predict true.");
console.log(cars == 'subaru'); //True
//Test 2: Strict equality comparision (True)
console.log("Is car == 'sabru'? I predict true.");
console.log(cars == 'subaru'); //True
//Test 3: Inequality comparison (False)
console.log("Is car != 'sabru'? I predict False.");
console.log(cars != 'subaru'); //False
//Test 4: strict inequality comparison (False)
console.log("Is car !== 'sabru'? I predict False.");
console.log(cars !== 'subaru'); //False
//Test 5: less than comparison (False)
console.log("Is car < 'sabru'? I predict False.");
console.log(cars < 'subaru'); //False (lexicographic comparision)
//Test 6: Greater than comparison (False)
console.log("Is car < 'sabru'? I predict False.");
console.log(cars < 'subaru'); //False (lexicographic comparision)
//Test 7: less than or equal comparison (True)
console.log("Is car < 'sabru'? I predict True.");
console.log(cars < 'subaru'); //True
//Test 8: Greater than or equal comparison (True)
console.log("Is car < 'sabru'? I predict True.");
console.log(cars < 'subaru'); //True
//Test 9: Checking truthiness (True)
console.log("Is !car? I predict False.");
console.log(!cars); //False (negation of a truthy value)
//Test 10: Checking falsness (False)
console.log("Is !car? I predict False.");
console.log(!cars); //False (negation of a truthy value)
