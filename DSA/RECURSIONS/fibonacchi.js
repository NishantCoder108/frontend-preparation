function fibonacchi(n) {
    if(n<2)return n;
 
    

  return  fibonacchi(n-1) + fibonacchi(n-2)
}

console.log(fibonacchi(2))