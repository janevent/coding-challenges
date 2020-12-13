function solution(string){
    let count = 0;
    for(let i = 2; i < string.length; i++){
        if(string[i] === string[i-1] && string[i] === string[i-2]){
            if(string[i] === 'b'){
                string[i] = 'a'
            }else{
                string[i] = 'b'
            }
            count++;
        }
    }
    return count
}

let s = "aaabbbaabbbaaab"
//         b a 
console.log(solution(s))