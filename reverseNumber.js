var reverse = function(x) {
    
    const limit = 2147483648;
    
    let array = x.toString().split("")
    let first = (array[0] === "-") ? array.shift() : ""
    let reversed = array.reverse().join("");
    if(reversed > limit){
        return 0;
    }
    
    return first.concat(reversed)
};
