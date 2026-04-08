let arr=[70,89,34,23,89,45];
// loop in array

// 1...for loop
// 2...for of loop
// 3...for in loop

// 1...for loop
/* for loop me 3 part hote h jisme se pehla part initialization hota h jisme hum variable ko initialize karte h dusra part condition hota h jisme hum condition lagate h ki loop kab tak chalega aur tisra part increment/decrement hota h jisme hum variable ko increment ya decrement karte h */
for (let i=0; i<arr.length; i++){ // loop 0 se start hoga aur array ki length tak chalega
    console.log(i, arr[i]);
}

// output: 0 70 1 89 2 34 3 23 4 89 5 45
console.log("for of loop");
// 2...for of loop
/* for of loop me hum directly array ke element ko access kar sakte h for of loop me hum variable ko directly array ke element ke sath assign kar sakte h */
for (let element of arr){ // ye kahraha ki arr ke element print karo.
    console.log(element);
}
// output: 70 89 34 23 89 45



console.log("for in loop index value and actual value");
// 3...for in loop
/* for in loop me hum array ke index ko access kar sakte h for in loop me hum variable ko directly array ke index ke sath assign kar sakte h */
for (let index in arr){ // ye kahraha ki arr ke index aur element print karo.
    console.log(index, arr[index]);
}
// output: 0 70 1 89 2 34 3 23 4 89 5 45

// IMP
//foreach loop
/* iss loop me array ke element bhi print kara sakte h aur index bhi print kara sakte h */
arr.forEach((value, index) => { // ye kahraha ki arr ke element aur index print karo.
    console.log(value, index);
});