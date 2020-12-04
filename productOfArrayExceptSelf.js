var productExceptSelf = function(nums) {
    let length = nums.length;
    let r = [];
    let l = [];
    let answer = [];
    
    l[0] = 1;
    
    for(let i = 1; i < length; i++){
        l[i] = parseInt(l[i-1]) * parseInt(nums[i-1])
    }
    
    r[length-1] = 1;
    
    for(let i = length-2;i >= 0; i--){
        r[i] = parseInt(r[i+1]) * parseInt(nums[i+1])
    }
    
    for(let i = 0; i < length; i++){
        answer[i] = parseInt(l[i]) * parseInt(r[i])
    }
    
    return answer;

}