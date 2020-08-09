let bonus = 20; //outside function variable declate and call//
function sum(first, second){
    let result = first + second + bonus; //global Scope//
    // console.log(bonus);
    // console.log(result);  //....scope...//
    // return result;

    if(result > 9){
        var mood ="Happy"; //...call from outsile 'if block scope' showed not defined//..this call block scope//but if use var other that let or const showed result. 
        mood ="Funky";
        mood ="Fishy";
        mood ="Cranky";
        console.log(mood);
    }
    console.log(mood);
    return result;
}

const output = sum(3, 7);
// console.log(bonus);
// console.log(output);

var day = "friday";
console.log(day);