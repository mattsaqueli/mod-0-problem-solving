
// The overall goal is to only print the strings that have EXACTLY 4 characters.
// I will first build my array. Then create a for statement to target the entire array.
// Next I will include an if statement to only target the strings with exactly 4 characters.


var students = ["Matt", "John", "Brandon", "Chris"]
for (var i = 0; i < students.length; i++) {
    if (students[i].length === 4) {
        console.log(students[i]);
    }
}