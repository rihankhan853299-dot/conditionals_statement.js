let obj = {
    name: "rihan",
    age: 20,
    city: "hapur"
};
// for of loop ka use object ke keys ko print karne ke liye kiya jata h
for (const key  of Object.keys(obj)) {
    console.log(key, obj[key]);
}



// agar sirf element print karna h to
console.log("--only elements or values of Array---")
for (const key of Object.keys(obj)) {
    console.log(obj[key]); // yahan par obj object ki values h and is key of object(name,age,city)
}