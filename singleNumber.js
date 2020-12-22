var singleNumber = function(nums) {
    let hashTable = {};
    
    for(let i = 0; i < nums.length; i++){
        if(!hashTable[nums[i]]){
            hashTable[nums[i]] = 1
        }else{
            hashTable[nums[i]] ++
        }
    }
    
    for(let k in hashTable){
        if(hashTable[k] === 1){
            return k
        }
    }
};