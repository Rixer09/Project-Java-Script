let score="333"
let value = Number(score)
console.log(typeof value)
console.log(value);
console.log("******************************************")
/*Here the score was intially assigned to a string , but I want the string to be a number. 
Therefore I used Number() function in order to convert it into a number
***********************************************************************
now let us see some issue that is faced during the conversion  */
let s = "333ase"
let value2 = Number(s)
console.log(typeof value2)//here the conversion is done and string is conerted to Number
console.log(value2)//But here the value2 is NAN i.e not a number. Therefore double check is done for assurance
// Now to understand further more replace the s value with "null , undefined , True , False , Shivam Parmar"

//*********************************************************************************************************** */
/* Now likewise Number() function there are other function like Boolean()=>converts into True or False
String()=> converts into string and more , search when in use*/


//Operations
/* Simple operations are 1+2=>3 , 1*2=>2 , 1%2=>0 , 1/2=>0 , 1**2=>2(1**2 means 1 is raised to the power 2)
 and other mathematical operations like prefix and postfix addition [++a , a++] */
// real confusing operations are like String + Number.

console.log("1" + 2);
console.log(1 + "2");
console.log(1 + 3 + "2");// Here number is Priortized
console.log("1" + 2 + 2);// Note : the first data type will dominate. Here String is priortized
console.log(true);
console.log(+true);
console.log(+"");







