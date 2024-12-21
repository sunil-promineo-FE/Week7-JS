let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Subtract first element from last element
let result = ages[ages.length - 1] - ages[0];
console.log(result);    //Question 1A

ages[ages.length] = 50;

//Print new array
console.log(ages); 
console.log(ages.length); //Question 1B

// Subtract first element from last element
result = ages[ages.length - 1] - ages[0];
console.log(result);

let average = calculateAverage(ages); //Question 1C
console.log(average); 

function calculateAverage(array) {
    if (array.length === 0) return 0; // Handle empty array case
    
    // Initialize a variable to store the sum of ages
    let sum = 0;

    // Loop through the array to calculate the sum of all ages
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    // Calculate the average age
    const average = sum / array.length;
    
    return average;
}

//Question 2 
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let avg = calculateAverageLetters(names);
console.log(`The average number of letters per word is: ${avg.toFixed(2)}`); //Question 2A

let namesArray = formNamesarray(names);
console.log("Concatenated names Array: "+ namesArray); //Question 2B

function calculateAverageLetters(strArray) {
    let totalLetters = 0; // To store the total number of letters
    let totalWords = strArray.length; // Total number of words
  
    // Iterate through each word in the array
    for (let i = 0; i < totalWords; i++) {
      // Add the length of each word to the total letters
      totalLetters += strArray[i].length;
    }
  
    // Calculate the average
    let averageLetters = totalLetters / totalWords;
  
    return averageLetters;
}

function formNamesarray(strArray){
    let concatenatedNames = "";
    // Iterate through the array
    for (let i = 0; i < names.length; i++) {
        // Concatenate each name with a space
        concatenatedNames += names[i];

        // Add a space after each name except the last one
        if (i < names.length - 1) {
            concatenatedNames += " ";
        }
    }
    return concatenatedNames;
}    

const array =[15,3,2,5,6,9];
console.log("last element of array is " + array[array.length-1]); //Question 3
console.log("first elemnet of array is "+ array[0]); //Question 4


//Question 5
let namesLengths=[0,0,0,0,0,0];
for(let i =0; i<names.length; i++){
    namesLengths[i] = names[i].length;
}
console.log(namesLengths);

//Question 6
let sumTotal = 0;
for(let i =0; i < namesLengths.length; i++){
    sumTotal += namesLengths[i];
}
console.log(sumTotal);

//Question 7
let varStr = echoWords("Hello",5);
console.log(varStr);

function echoWords(str, count){
    
    let concatStr = "";
    if (count == 0){
        console.log("Count is Zer0")
        return concatStr;
    }

    for(let i = 0; i < count; i++){
        concatStr += str;
    }
    return concatStr;
}

//Question 8

let fname = "Mr. XYZ";
let lname = "Junior";
let name = returnFullname(fname, lname);
console.log("Complete name is " + name);

function returnFullname(fname, lname){
    
    return fname+" "+lname;
}


//Question 9
let arr1 = [12, 9,10,39,25];
console.log(sumArrayGT100(arr1));

let arr2 = [12,9,10,39,5,10,18];
console.log(sumArrayGT100(arr2));

let arr3 = [];
console.log(sumArrayGT100(arr3));

function sumArrayGT100(array) {
    if (array.length === 0) return false; // Handle empty array case
    
    // Initialize a variable to store the sum of array elements
    let sum = 0;

    // Loop through the array to calculate the sum of all ages
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    if (sum > 100)
        return true;

    return false;
}


//Question 10
console.log(calculateAverage([12, 9,10,39,25]));
console.log(calculateAverage([12,9,10,39,5,10,18]));
console.log(calculateAverage([]));


//Question 11

console.log(avg1GTavg2([12, 9,10,39,25], [12,9,10,39,5,10,18]));

function avg1GTavg2(arr1,arr2) {
    
    let avg1=calculateAverage(arr1);
    let avg2=calculateAverage(arr2);
    
    if (avg1 > avg2)
        return true;
    return false;
}


//Question 12

console.log(willBuyDrink(true, 7));
console.log(willBuyDrink(true, 11));


function willBuyDrink(isHotOutside, moneyInPocket){
    if (isHotOutside && moneyInPocket > 10.50)
        return true;
    return false;
}