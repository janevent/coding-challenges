// add two numbers that are passed in as strings without turning them into numbers

function addTwoNumbers(string1, string2){
    //return string1[string1.length-1]
    let sum = ""
    for(let i = string1.length-1; i >=0; i-- ){
        let carryover = 0;
        for(let j = string2.length-1; j >=0; j--){
            let total = carryover + string1[i] + string2[j]
            if(total.length > 1){
                carryover = total[0];
                sum = `${total}${}`
            }
        }
    }
}

console.log(addTwoNumbers("123", "456"))