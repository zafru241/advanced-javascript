const students = [
    {name:"Zafru", id:23 },
    {name:"Mahfuz", id:41 },
    {name:"Munna", id:71 },
    {name:"Mostak", id:88 }
]
// const output =[];
// for(let i=0;i<students.length; i++){
//     const element = students[i];
//     const result = element.id;
//     output.push(result);
// }
// console.log(output);
// const names = students.map(s =>s.name);
// const ids = students.map(s =>s.id);
// const bigger = students.filter(s =>s.id >40);
const isThere = students.find(s =>s.id >30);
console.log(isThere);