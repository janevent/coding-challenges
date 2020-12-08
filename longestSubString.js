function longestSubString(s){
    let array = [];
    let max = 0;

    let i = 0;

    while(i < s.length){
        if( !(array.includes(s[i]) ) ){
            array.push(s[i])
            max = Math.max(max, array.length)
            i++
        } else {
            array.shift()
        }
    }      

    return max
};



