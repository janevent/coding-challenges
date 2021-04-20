function fibonacci(n){
    if(n <= 2){
        return 1
    }else{
        return fibonacci(n-1) + fibonacci(n-2)
    }
}
//fibonnaci(3) == fibonacci(2) + fibonacci(1)
//              fibonacci(3) + fibonnaci(2)         1
//           
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(5))