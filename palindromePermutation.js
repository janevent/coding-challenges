//check to see if a string is a permutation of a palindrome.

function palindromePermutation(s){
    let a = s.split('')
    let dict = {}

    for(let i = 0; i < a.length; i++){
        if(a[i] in dict){
            dict[a[i]] ++
        }else{
            dict[a[i]] = 1
        }
    }

    let odd = 0;

    for(let i in dict){
        if(dict[i] % 2 !== 0){
            odd++
        }
    }

    if(odd > 1){
        return false
    }else{
        return true
    }
}

let string = 'abcdabcbbllsst'

console.log(palindromePermutation(string))