function repeatedString(s, n) {
    let ar = s.split("");
    let numChar = ar.length;
    let times = Math.floor(n/numChar);
    let remainder = n % numChar;
    let f = ar.filter( e => e === "a");
    let numA = f.length;
    
    let countA = numA * times;
    
    let remainingA = 0;
    let i = 0;
    
    while( i < remainder){
        if(ar[i] === "a"){
            remainingA++;
        }
        i++;
    }

    countA+=remainingA;
    return countA;
}

console.log(repeatedString("alfalfa", 30))
