// Problem Solving Day1
console.log("print 10 to 1 without using >= operator:")
let s="";
for(i=10;i!=0;i--){
    s=s+i+" ";
}
console.log(s);
console.log("print -1 to -10 without using >= operator:")
let a="";
for(i=-1;i!=-11;i--){
    a=a+i+" ";
}
console.log(a);
console.log("print -10 to -1 without using <= operator:")
let c="";
for(i=-10;!(i>=0);i++){
    c=c+i+" ";
}
console.log(c);3
let num=10;
do{
    console.log(num);
    num--;
}while(num>0);