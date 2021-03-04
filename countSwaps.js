function countSwaps(a) {
    let swap = 0
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < a.length; j++){
            if(a[j] > a[j+1]){
                let lesser = a[j+1]
                let bigger = a[j]
                a[j] = lesser;
                a[j+1] = bigger;
                swap++
            }
        }
    }