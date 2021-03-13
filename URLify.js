//replace spaces with %20
function URLify(s){
    let a = s.split('');

    for(let i = 0; i < a.length; i++){
        if(a[i] === ' '){
            a[i] = '%20'
        }
    }

    return a.join('')
}
let string = 'hello kingdom here i am'

console.log(URLify(string))