let maxLimit = prompt("Enter the limit of the double loop:"); // Get limit input
let addedValue = 0; //initialize sum

for (let i = 0; i < maxLimit; i++) { //outer loop
  for (let j = 0; j < maxLimit; j++) { //inner loop
    addedValue = i + j; // Calculate sum
    console.log("[" + i + "] [" + j + "] Added value is " + addedValue); //Display results
  }
}