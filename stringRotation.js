//see if one string is a rotation of a substring of another string



function stringRotation(s1,s2){
    if(!s1 || !s2){
        return false
    }
    if(s1.length !== s2.length){
        return false
    }
    return (s1+s1).includes(s2)
}

let a = 'waterbottle'
let b = 'bottlewater'
let c = 'buttlewater';

console.log(stringRotation(a,b))
console.log(stringRotation(a,c))