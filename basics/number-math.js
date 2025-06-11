const score=400
console.log(score);

const balence=new Number(100)     // spacific number [number:100]

console.log(balence);    
console.log(balence.toString().length);     // length of number
console.log(balence.toFixed(1));            // fix value

const othernumber= 23.6548
console.log(othernumber.toPrecision(3))    // ans 23.7

const handreades= 1000000
console.log(handreades.toLocaleString('en-IN'));  // value acoordin indian courency  such as 10,00,000


//++++++++++++++++++++++++maths+++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));                         // nagetive to positive value
console.log(Math.round(10.6));                    //   round of to without point value
console.log(Math.ceil(10.6));                     //   round of to bigger number   
console.log(Math.floor(10.6));                    //   round of to smaller number 
console.log(Math.min(2,3,4,5))                    // min number of array
console.log(Math.max(78,6,5,));                   // max number of array
console.log(Math.random());                       // provid rendom number beetween range
console.log(Math.floor(Math.random()*10)+1);      
