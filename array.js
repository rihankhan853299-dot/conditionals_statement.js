// What is array in JavaScript?

/* array is a data structure that can hold more than one value at a time. It is a collection of elements that can be of any data type. The elements in an array are stored in contiguous memory locations and can be accessed using an index. Arrays are used to store multiple values in a single variable, which can be useful for organizing and manipulating data.

----> Array ki values ko square bracket([3,7,"good",'h']) k andar define karte h
----> mutiple values ko single varoiable mein store karte h

----> Array ki indexing Zero(0) se shuru hoti h
----> Array k har element ek index value hoti h
*/

/* Advantages of array in JavaScript:

1...Array can hold mutple values in a single variable
2...Array can be used to store data of any data type
3... Array stores the elements in contiguous memory locations which makes it easy to access the elements using an index
*/

let arr=[1,2,3,4,5];
console.log(arr); // output: 1,2,3,4,5

let arr2=["rihan","khan",10,20,true];
console.log(arr2); // output: rihan khan 10 20 true


// random Accessing is possible in array

let arr1=[10,20,30,40,50];
console.log(arr1[2]); // output: 30
console.log(arr1[0]); // output: 10
console.log(arr1[4]); // output: 50

// Array length(.length)

// Array ki length(total count of Array Element) print karta h

let arr3=[8,7,"right",9,'h'];

console.log("length of Array",arr3.length) // output: length of Array 5

// IMP
/* Array mmutable hota h(Array ki value ko hum change kar sakte h)

*/

let arr4=[6,7,2,8,9,0];
arr4[4]=890; // ab array ki index position 4 value 890 ho jayegi (this is mutability)

console.log(arr4);

// METHODS OF ARRAY

//1...POP
//----> Array k last element ko remove karta h or array mei se last vala element niksal leta h

let rrw = [5,7,94,4];

rrw.pop();
console.log("poped elemeny is",rrw); // outpu:[5,7,94]

//2...shift
//-----> Array k first element ko remove karta  h

let arrShift = ["Teacher"];
arrShift.shift();
console.log("shifted element is", arrShift); // output: Teacher



// VIMP
//3...PUSH
//------> Array k end mein  element ko Add karta h 
let aray=[70,50,34,"hello"];

aray.push("rihan");

console.log("added element is", aray); // output: added element is [70,50,34,"hello","rihan"];


//4...UNSHIFT
//-------> Array K shru mein element Add karta h

let $hajrat = ["saad sahab"];

$hajrat.unshift("molana");

console.log("shuru mein element Add hua", $hajrat); // output: shuru mein element Add hua ["molana","saad sahab"]



//5..toString
//----->Array ko string mein convert karta h

    let arr5=[6,8,9,3];
console.log(arr5.toString());


// 6..join 
// elements ki readability increase karta h (commas hata dega)
let arr6=[5,8,3,0,1.4];
console.log(arr6.join(" and ")); // outpu:5 and 8 and 0 and 1 and 1.4

// 7...delete
// Array k kisi bhi element ko delete karne ke liye use hota h delete method se element delete to ho jata h lekin uski jagah empty item ban jata h.

let arr7=[5,8,9,3];
delete arr7[2]; // array k 2 index position par jo value(9) h vo delete ho jayegi lekin uski jagah empty item ban jayega
console.log(arr7); // output: [5,8,empty,3]

// 8...concat
// do ya do se zyada array ko concatinate karne ke liye use hota h concat method me jitne bhi array ko concatinate karna hota h un sabhi array ko parameter ke roop mein dena hota h

let arr8=[5,8,9];
let arr9=[3,4,6];
let arr10=[1,2,7];

arr8.concat(arr9,arr10); // arr8 ke end mein arr9 aur arr10 ke elements add ho jayenge

console.log(arr8.concat(arr9,arr10)); // output: [5,8,9,3,4,6,1,2,7]

// 9..sort
// Array k elements ko ascending order mein sort karta h (by default sort method array k elements ko string ke roop mein sort karta h isliye numbers ko sort karne ke liye compare function dena padta h)

let arr11=[5,8,9,3];
arr11.sort();
console.log(arr11); // output: [3,5,8,9]

// IMP
// 10...splice
// array ko change ya modify karta h 
// ---> array mein se element remove remove  karta h
// ---> array mein element add karta h
// ---> array ka random  part bhi nikal sakta h

let arr12=[5,8,9,3];
arr12.splice(1,0,7); // array ki 1 index position par 0 element remove hoga aur 7 element add hoga(8 ki jagah par 7 ho jayega)

console.log(arr12); // output: [5,7,8,9,3]

let arr13=[5,8,98,3];
arr13.splice(2,1); // array ki 2 index position par 1 element remove hoga (98 remove ho jayega)
console.log(arr13); // output: [5,8,3]

let arr14=[5,8,9,3];
arr14.splice(1,2); // array ki 1 index position par 2 element remove hoga (8 aur 9 remove ho jayega)
console.log(arr14); // output: [5,3]

 /* Dference between slice add splice?

 



*/