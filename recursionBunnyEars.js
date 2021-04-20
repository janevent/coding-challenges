function bunnyEars(n){
    if(n===1){
        return 2
    }else if(n===0){
        return 0
    }else{
        return 2 + bunnyEars(n-1)
    }
}

console.log(bunnyEars(0))
console.log(bunnyEars(1))
console.log(bunnyEars(4))