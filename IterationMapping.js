let maxLimit = prompt("Enter the limit of the double loop:");
let addedValue = 0;

for (let i = 0; i < maxLimit; i++) {
  for (let j = 0; j < maxLimit; j++) {
    addedValue = i + j;
    console.log("[" + i + "] [" + j + "] Added value is " + addedValue);
  }
}