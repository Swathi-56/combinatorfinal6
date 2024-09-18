// 1.Uppercase first letter
// input:"hello"
// output:"Hello"
const s="hello";
const capitalizeds=s[0].toUpperCase()+s.slice(1);
console.log(capitalizeds);
//ii)
// input:"world"
// output:"World"
const S="world";
const capitalizedS=S[0].toUpperCase()+S.slice(1);
console.log(capitalizedS);
// Remove vowels
// input:"hello"
// output:"hll"
const m="hello"
result=m.substring(0,1)+ m.substring(2,3)+m.substring(3,4);
console.log(result)
// (or)using replace
const M="hello";
Result=M.replace('hello','hll');
console.log(Result);
// ii) input:"World"
// output:"wrld"
let A="World";
out=A.replace('World','Wrld');
console.log(out);





