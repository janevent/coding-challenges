function findMedian(arr) {
    let sorted = arr.sort((a,b) => a - b);
    let l = sorted.length
    let index = Math.floor(l/2)
    console.log('ar', sorted, "l", l, "index", index)
    return sorted[index]

}

console.log(findMedian([1,2, 5, 66,5,44, 6, 3, 4, 99,102]))
//1 2 3 4 5 5 6 44 66 99 102