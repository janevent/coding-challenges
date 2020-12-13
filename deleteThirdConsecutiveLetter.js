function deleteThirdConLet(s){
    let array = s.split("");
    let newArray = [array[0], array[1]]
    for(let i = 2; i < array.length; i++){
        if(array[i] !== array[i-1] || array[i] !== array[i-2]){
            newArray.push(array[i])
        }
    }
    return newArray.join("")  
}

let string = "aaabbbcdeeeeeffgg"
console.log(deleteThirdConLet(string))