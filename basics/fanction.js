function calculatecartprice(...num1){
    return num1
}
//console.log(calculatecartprice(10, 20, 30, 40, 50));
const user={
    name: "John",
    age: 30,
    email: "jay@gmail.com"
}
function userDetails({name, age, email}){
    return`NAME:${name},AGE:${age},EMAIL:${email}`;
}
console.log(userDetails(user));

 const myarray = [1, 2, 3, 4, 5];
 function returnsecondvalue(getArray){
     return getArray[1];
 }
 console.log(returnsecondvalue(myarray)); // 2