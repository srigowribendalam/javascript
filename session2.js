
// var message = 'Hi';

// function say() {
//     var message = 'Hello';
//     console.log(message);
// }
// say();
// console.log(message); //output Hello Hi


// var message = 'Hi';
// function say() {
//     console.log(message);
// }
// say();
// console.log(message); //output Hi Hi


// var x = 20;

// function test() {
//     var x = 200;

//     function say() {  
//         console.log(x);
//     }
//     say();
// }
// test(); //output 200

var message = 'Hello';

function say() {
    var message = 'Hi';
    
    if(true){
        var message = 'Hey';
        console.log(message);
    }
   console.log(message);
}
say();
console.log(message); 

// var message = 'Hello';

// function say() {
//     let message = 'Hi';
    
//     if(true){
//         var message = 'Hey';
//         console.log(message);
//     }
//    console.log(message);
// }
// say();
// console.log(message); //error