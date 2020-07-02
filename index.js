// hoisting 
function codeHoist(){ 
   var a = 10; 
    b = 50;
    console.log(a); 
console.log(b); 
} 
codeHoist(); //output 10 50

// function codeHoist() {
//     var a = 10;
//     b = 50;

// }
// codeHoist();
// console.log(a);
// console.log(b); //outputs error



// function codeHoist() {
//     var a = 10;
//     b = 20;
//     {
//         c = 30;
//         var d = 40;
//         console.log(a);
//         console.log(b);
//         console.log(c);
//         console.log(d);
//     }

// }
// codeHoist(); //outputs 10 20 30 40

// function codeHoist() {
//     var a = 10;
//     b = 20;
//     {
//         c = 30;
//         var d = 40;
//         console.log(a);
//         console.log(b);
       
//     }
   
// }
// codeHoist();
// console.log(c);
// console.log(d); // outputs error




// function test() 
// { 
//     if (false) { 
//         var x = 50; 
//     } 

//     console.log(x); 
//     console.log(y); 

//     var y = 100; 
//     console.log(y); 
// } 

// test(); //outputs undefined undefined 100











