function isRotation(s1, s2){
    //let s1Copy = s1.split("");
    let s2Copy = s2.split("");
    let newArray = [];
    for(let i = 0; i < s2Copy.length; i++){
        let c = s2Copy.pop();
        s2Copy.unshift(c)
        console.log(s2Copy)
        if(s1=== s2Copy.join("")){
            return true
        }
    }
    return false
}


console.log(isRotation("abcd", "bcda")) //=> true
console.log(isRotation("whoisyourdaddyandwhatdoeshedo", "rdaddyandwhatdoeshedowhoisyou"))// => true
isRotation("sammich", "ammsich") //=> false
