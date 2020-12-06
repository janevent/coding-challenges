var countAndSay = function(n) {
    if(n===1){
        return "1"
    }
    
    let str = "1"
    let last = '';
    let tmp = '';
    let count = 0;
    
    for(let i =1; i < n; i++){
        last = '';
        tmp = '';
        for(let j = 0; j < str.length; j++){
            if(last === ''){
                last = str[j]
                count = 1;
                continue;
            }
            if(str[j] === last){
                count++
            }else{
                tmp += count + last
                last = str[j];
                count = 1
            }
        }
        if(last){
            tmp+= count + last
        }
        str = tmp;
    }
    return str
};