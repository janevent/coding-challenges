let array = [7,1,5,3,6,4]

function findMaxProfit(a){
    let profits = [];
    for(let i = 1; i < a.length; i++){
        //let buy = Math.min(Number(a.slice(0, i).join(",")))
        let buy = a[0]
        for(let j = 0; j < i; j++){
            if(a[j]< buy){
                buy = a[j]
            }
        }
        let profit = a[i] - buy;
        profits.push(profit)
    }
    let maxProfit = 0;
    profits.forEach((p) => {
        if(p > maxProfit){
            maxProfit = p
        }
    })
    return maxProfit
}
console.log(findMaxProfit(array))