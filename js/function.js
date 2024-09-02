function fname(){
    console.log("hello");
    return"world"
}fname()              // a.console.log//


function swathi(){
    console.log("hello");
    return"world"
}console.log(swathi());   //b.return//


function swathi( x=3,y=2){
    return x+y;

}console.log(swathi())   //Default parameters//





<h1> templates literal </h1>

var X= "hai"
console.log(`swathi ${X}`)    //string templates//

var U=10
var V=20
console.log(`sum of :${U} and  ${V} =${U+V}`)    //``//we use backticks u got same  exact output//

console.log(`sum of : ${U} and  ${V}\n =${U+V}`) 
                                                   //\n//
console.log(`sum of :
    ${U} and  ${V} 
    =${U+V}`)                                   //write a new line//

console.log(` "sum of" :${U} and  ${V} =${U+V}`)     //""
                                   //function express (or) anonymous function//

var M= function (S,D)
{
    console.log("swathi");
    return S+D;
}
console.log(M(40,40));


var M= function (S,D)
{
    console.log("swathi");
    return S%D;
}
console.log(M(40,40));


var m=(s,d)=>
{
    console.log("hey iuytersdfcgvhj");
    return s+d;
}
console.log(m(1000,10000));//all this right but in this file the parameters are taken same thats why out put not shown//

//abot functions scope//

{
    var x=10;
    console.log(x);
}
console.log(x);//var has global scope it will give us output//


{
    let y=10;
    console.log(y);
}console.log(y);       //let has block scope//


{
    const b=10;
    console.log(b);
}console.log(b);    //const have block scope//

//function scope // var,let,const have function scope  it gives output but also give reference0 ERROR//

function swathi(){
    var n=10;
console.log(n);
}
swathi();
console.log(n);



//Hoisting in var//
{
    debugger;console.log(a); 
    var a=10; 
    }
    //ouput will be var UNDEFINED//
    //HOISTING for let//
    {
    debugger;console.log(a); 
    let a=10; 
    }
    //oupt will be let is REFERENCE ERROR initialization //
    //hoisting for const//
    {
    debugger;console.log(a); // const if same as let //
    const a=10; 
    }

    // hoisting in named functions//
//in named(or)function expresstion hoisted here //
//but ib arrow and anonymous function are not hoisted//
debugger;
swathi();
function swathi(){
    console.log("hai");
}


    







