//3 types of edits: insert, remove or replace
//check 2 strings to see if they are 0 or 1 edits away

function oneAway(s1, s2){
    if(s1 === s2){
        return true
    }
    if(s1.length > s2.length+1 || s1.length < s2.length-1){
        return false
    }

    let edits = 0;
    let a1 = s1.split('')
    let a2 = s2.split('')
    let length;
    let a1short = false
    if(a1.length > a2.length){
        length = a2.length
    }else{
        length = a1.length
        a1short = true
    }
    for(let i = 0; i < length; i++){
        if(a1[i] !== a2[i]){
            edits++
            console.log(a2.slice(i))
            console.log(a1.slice(i+1))
            if(a1.slice(i).join('') === a2.slice(i+1).join('') || a2.slice(i).join('') === a1.slice(i+1).join('')){
                console.log('break')
                //break;
                return true
            }
            if(a1.slice(i+1).join('') === a2.slice(i+1).join('')){
                return true
                //break;
            }else{
                console.log('else')
                return false;
            }
        }
    }
    if(edits>1){
         return false
     }else{
         return true
     }
}
let a = 'bale';
let b = 'pales';

console.log(oneAway(a,b))