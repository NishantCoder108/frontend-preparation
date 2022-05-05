function perfectSquare(n){
    
    let left = 0;
    let right = n
    let ans = 0;
    while(left <= right){
        let mid = Math.floor(left + right)/2;
        
        if(mid * mid  == n) return ans = mid;
        else if( mid * mid  > n ) {right = mid +1; 
        //   ans = mid;
        } 
        else{
            left = mid -1;
        }
        
    }

    return -1
}

console.log(perfectSquare([25]))