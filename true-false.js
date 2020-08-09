// falsy..........................
// 0
// false....false value dile false hobe... if within quotation show true//
//""..empty srring falsy
//undefined
//null
//NaN
//truthy.....
//'0' , ' ' or " ", [], {} ..empty array, empty object truthy....

// const age = 0;
// const name = " ";  //..whitespace would say true or say false..//
// console.log(name); //..undefined bydfault false hobe//
let name = 0;
if( name || name == 0 ){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}