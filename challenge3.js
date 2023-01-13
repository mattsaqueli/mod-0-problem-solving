// The goal is to target only the strings in the array that start with "T".
// First I will build the array with strings, some that start with "T".
// Next I will build a for loop to target all the strings in the array.
// Then apply a if statement to target the words that start with "T".

var foods = ["Tacos", "Burgers", "Steak", "Tamales"]
for (var i = 0; i <foods.length; i++) {
    if (foods[i].startsWith("T")) {
        console.log(foods[i]);
    }
}