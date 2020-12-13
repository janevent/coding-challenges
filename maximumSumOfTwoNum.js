function solution(a){
    let obj = {};
    let highestSum = -1;
    for(let i = 0; i < a.length; i++){
        let n = a[i].toString().split("");
        let sum = n.reduce( (t, i) => parseInt(t)+ parseInt(i) );
        if(!obj[sum] ){
            obj[sum] = [a[i]];
        }else{
            obj[sum].push(a[i])
        }
        console.log("obj", obj)
    }
    // need to instead iterate over each array object and add all possible pairs
    for(e in obj){
        if(obj[e].length > 1){
            let s = obj[e][0] + obj[e][1]
            highestSum = Math.max(highestSum, s)
        }
    }

    return highestSum
}

let array = [41, 32, 55, 64, 10, 20]

console.log(solution(array))