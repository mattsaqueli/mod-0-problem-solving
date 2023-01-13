// The goal is to make all the strings in the array lowercase.
// First I will build the array with mixed uppercases and lowercases.
// Next I will apply a for loop to target that entire array.
// Finally I will add the toLowerCase method to achieve my goal. 


var students = ["MaTt", "JoHn", "BraNdon", "ChRis"]
for (var i = 0; i < students.length; i++) {
        console.log(students[i].toLowerCase());
    }
