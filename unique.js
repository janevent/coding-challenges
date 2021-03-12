//determine if a string has unique characters
let string = 'gobledeegoop';
let fish = 'fishfish';
let u = 'uniq'
function isUnique(s){
    let a = s.split('');

    a.sort();
    for(let i = 1; i < a.length; i++){
        if(a[i] === a[i-1]){
            return false
        }
    }
    return true
}

console.log(isUnique(u))