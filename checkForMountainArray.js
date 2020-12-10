var validMountainArray = function(arr) {
    if(arr.length < 3){
        return false
    }
    
    if(arr[0] > arr[1]){
        return false
    }
    let increase = false;
    let decrease = false;
   // let peaked = false;
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] === arr[i+1]){
            return false
        }
        if(arr[i] < arr[i+1] && decrease === false){
            increase = true
        }else if(arr[i] > arr[i+1] && decrease === false){
            decrease = true;
            //peaked = true;
        }else if(arr[i] < arr[i+1] && decrease === true){
            return false
        }
    }
    if(increase && decrease){
        return true
    }else{
        return false
    }
};