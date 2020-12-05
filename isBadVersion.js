/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    //mid = left + (right-left/2)
    return function(n) {
        if(n === 1){
            return 1
        }
        if(isBadVersion(n) && !isBadVersion(n-1)){
            return n;
        }
        let l = 0;
        let r = n;
        
        while( l < r){
            let mid = Math.floor(l + ((r-l)/2))
            if(!isBadVersion(mid)){     
                l = mid;
            }else{
                if(!isBadVersion(mid-1)){
                   return mid
                   };
                r = mid;
            }
        }
        
        
        // for(let i = 1; i <=n; i++){
        //     if(isBadVersion(i) === true){
        //         return i
        //     }
        // }
    };
};