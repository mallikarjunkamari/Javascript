// console.log('Hello, World!');

// const console = require("console");
// const { count } = require("console");
// const { connected } = require("process");
// const { compose } = require("stream");

// let a = 5;
// const val= 10;
// var n = 15;
// console.log(a + n  +val);
// console.log(val);
// console.log(n);

// const pi = 3.142722;
// let r = 4;
// let res = 4*pi*r*r;
// console.log(`Total area of the circle is ` + res);

// let fname = "mallikarjun";
// let lname = "Kamari";
// console.log(fname + " " + lname);

// let age = 25;
// const country = "India";
// var isStudent = true;

// console.log("Age: " + age);
// console.log("Country: " + country);
// console.log("isStudent: " + isStudent);

// let score = 10;
// console.log("Initial Score: " + score);

// score = 20;
// console.log("Updated score: " + score);


// function showScope(){
//     let fname = "Mallikarjun";
//     const county= "India";

//     console.log("Name: " + fname);
//     console.log("Country: " + county);
// }
// showScope()

// let a = 15;
// let b = 5;
// console.log("Addotion: " + (a+b));
// console.log("Substraction: " + (a-b));
// console.log("Multiplication: " + (a*b));
// console.log("Division: " + (a/b));
// console.log("Inecrement: " + a++);
// console.log("a= " + a);
// console.log(2**3);

// res = 5>3? "5 is greater than 3" : "3 is greater than 5";
// console.log(res);

// let age = 18;
// let result = (age>=18)? "Eligible for vote" : "Not eligible for vote";
// console.log(result);

// function greet() {
//     console.log("Hello Ajay Good night");
// }
// greet();

// function greet(Name) {
//     console.log("Hello " + Name + " Good night");
// }
// greet("Mallikarjun");


// function Date1() {
//     return new Date().getFullYear();
// }

// let year = Date1();
// console.log(year);

// function FullName(fname,lname){
//     return (fname + " " + lname);
// }
// console.log("Mallikarjun","Kamari");

// let fname = "Mallikarjun";
// console.log(`My name is, ${fname}`);



// Hoisted
// greet();
// function greet() {
//     console.log("Hello, Mallikarjun");
// }


// not Hoisted

// const greet = function giveGreet() {
//     console.log("Hello, Mallikarjun");
// }
// greet();


// const res = function Method(x, y) {
//     return x + y;
// }

// let a = Number(prompt("Enter the value of a:"));
// let b = Number(prompt("Enter the value of b:"));

// console.log(res(a, b));


// Arrow Function

// const res = (a,b) => {
//     return a*b;
// }
// console.log(res(6,3));

// const res = () => "Hello, Arjun";
// console.log(res());


// Data Types
// Number
// let a = 22;
// console.log(a);

// String
// let Name = "Mallikarjun"
// console.log(Name)

// Boolean
// let isBoolean= true
// console.log(isBoolean)

// undefined
// let a;
// console.log(a)

// null
// let a=null
// console.log(a)

// 2) Complex Data Types
// object
// let person = {
//     name:"Arjun",age:22
// }
// console.log(person.name)

// Array
// let array = ["Apple","Banana","orange","mango"]
// console.log(array[1])

// Function
// function greet() {
//     console.log("Hello, Arjun")
// }
// greet()


//--------------------------------------------------------------------

// Even Number
// function IsEven(value){
//     if(value%2==0)
//         return true
//     return false
// }
// console.log(IsEven(3))



// DetectSpecialNumber
// function DetectSpecialNumber(number){
//     if(number=== Infinity) return "infinity"
//     if(number=== -Infinity) return "-infinity"
//     if(isNaN=== Nan) return true
//     return "Regular Number"
// }
// let a = DetectSpecialNumber(5)
// console.log(a)

// Array
// let array = ["Apple","Banana","orange","mango"]
// console.log(typeof array)


// console.log(Array.isArray([1,2,3]))
// console.log(Array.isArray("hello"))

// let a = [1,2,3,4,5,6]
// console.log(Array.isArray(a))

// let array = [1,2,3,4,5];
// console.log(array)
// array.push(6)

// console.log(array)
// console.log(array[2])

// let a = new Array(1,2,3,4)
// console.log(a)
// a.push(6)

// console.log(a)

//Adding methods

// let a = [1,2,4,5]
// a.push(10)
// console.log(a)
// a.unshift(15)
// console.log(a)

// Remove Methods

// a.pop()
// console.log(a)
// a.shift()
// console.log(a)

//  Acess and modifying methods 

// let a = ["apple","arm","banana","bat","cat","mango"]
// console.log(a)
// console.log(a.splice(1,4))
// a.splice(1,4,"Arjun")
// console.log(a)

// let a = [1,2,3,4,5,6]
// console.log(a)
// a.splice(3,5,99,81,86)
// console.log(a)

// let a = [1,2,3,4,5,6]
// let b = a.slice(2,3)
// console.log(b)

// let a = [1,2,3,4,5,6,7,8,9,10]
// let b = [5,4,3,1,2,6,9,8]
// console.log("Index of 4=" + (a.indexOf(4)))
// console.log(a.includes(5))
// console.log(b)
// console.log(b.sort())
// console.log(b)
// console.log(b.reverse())

// let a = [1,2,3,4,5,6,7,8]
// a.forEach((b)=>console.log(b))

// let a= [1,2,3,4]
// let b = a.map(
//     function(item){
//     return item*item
// })

// console.log(b)

// let a= [1,2,3,4]
// a.forEach(
//     function(item){
//         console.log(item)
//     }
// )

// let a= [1,2,3,4]
// a.forEach(
//     (item)=>{
//         console.log(item)
//     }
// )

// let a = [1,2,3,4,5,6,7,8,9]
// let res = a.filter(
//     function(Element) {
//         return Element%2===0
//     }
// )
// console.log(res)




// function FullName(nm) {
//     console.log("Name: "+ nm)
// }
// FullName("Mallikrjun")

// let a=[1,2,3,4,5]
// let b =[8,5,9.7]
// console.log(a.concat(b))

// let fname = "mallikarjun "
// let lname = "kamari"
// console.log(fname.concat(lname))


// let names = ["Arjun","Kamari","Mallikarjun"]
// console.log(names.join(" "))