const number = [2 , 3, 4, 5, 6, 7, 8]
// const output = [];
// for(let i=0; i<number.length;i++){
//     const element = number[i];
//     const result = element * element;
//     output.push(result);
// }
// function square(element){
//  return element * element;
// }
// const square =(element) => element * element;
// const square = x => x * x;
// number.map(function(element,index, array){
//  console.log(element, index, array);
// })
// const result = number.map( x => x * x);
// console.log(result);
// const bigger = number.filter( x => x > 4);
// console.log(bigger);
// const smaller = number.filter( x => x < 4);
// console.log(smaller);
const isThere = number.find( x => x > 4);
console.log(isThere);