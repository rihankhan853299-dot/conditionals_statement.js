// MAP
/* 
purane Array se naya Array banane k liye uise hota(Array ki value ko change karne ke liye hota h) 

-----> naya array return hota h purane array ki value change nhi hoti
*/

// EXAMPLE

let price=[100,200,500]

// malnle ab hame 20% GST bhi add karni h price mei

let newprice=price.map(price=>price+0.2)

console.log(newprice);

 console.log("purana array h",price)

// filter

/*
array ke andar se data ko ek sequase or serriese mei nikal sakte h
arrasy mein se data ko select kar ke nikal sakte h(array mei se array ka part nikal sakte h)
*/

let arrprice=[60,70,69,86,30,40];

let selelem= arrprice.filter(arrprice=> arrprice>60)  // array k andar jitne bhi element 60 se bade h un sab ko print kar do

console.log("60 se bade elerment= ",selelem); 

console.log("but original array element is",arrprice)

// reduce

/* 

array k sabhi elements ka addition return(print) karta h

*/

let arr=[60,8,4,3,6];

let redus= arr.reduce((total,num)=>total+num,0) // output:81

console.log(redus);