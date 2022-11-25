// VERSION 1 - why doesn't this work?
// let num1 = parseInt(31)
// let num2 = parseInt(2)

// function multiply(num1, num2){
    
//     return Number.parseInt((num1 * num2))
// }


//VERSION 2 - the meme version

let num1 = parseInt(31)
let num2 = parseInt(2)
let multiply = num1 * num2

console.log("num1 is: " + typeof(num1))
console.log("num2 is: " + typeof(num2))
console.log("multiply is: " + typeof(multiply))
console.log(multiply)

let random = Math.floor(Math.random() * 10) +1;


//3rd test
let num3 =16
let num4 = 12

let mod = num3 % num4;

//4th test

let max = Math.max(1,2,3,4,7,20)



//I'm trying to pass this first test


// describe('index.js', function() {
//     describe('multiply', function() {
//       it("is an equation whose multiplied results will equal 62", function() {
//         expect(num1).to.be.a('number')
//         expect(num2).to.be.a('number')
//         expect(multiply).to.eq(62)
//       });
//     });
//     describe('random', function() {
//       it("generates a random integer greater than 0", function() {
//         expect(Number.isInteger(random)).to.be.true
//         expect(random).to.not.eq(0)
//       });
//     });
//     describe('mod', function() {
//       it("is an equation that calculates a remainder that is equal to 4", function() {
//         expect(num3).to.be.a('number')
//         expect(num4).to.be.a('number')
//         expect(mod).to.eq(4)
//       });
//     });
//     describe('max', function() {
//       it("will return 20 as the highest number in the set", function() {
//         expect(max).to.eq(20)
//       });
//     });
//   });