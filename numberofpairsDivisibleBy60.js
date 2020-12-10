var numPairsDivisibleBy60 = function(time) {
    let count = 0;
    for(let i = 0; i < time.length-1; i++){
        for(let j = i+1; j < time.length; j++){
            ((time[i] + time[j]) % 60 === 0 ) ? count++ : count=count
        }
    }
    return count
};