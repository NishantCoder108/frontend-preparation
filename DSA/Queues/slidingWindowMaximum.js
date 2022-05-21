function maxSlidingWindow(nums,k){
    let deque = []
    let ans =[]

    for(let i = 0; i< k; i++){
        while(deque.length != 0  && nums[deque[deque.length -1]] < nums[i]){
            deque.pop()
        }
 
        deque.push(i)
    }

    for(i = k ;i<nums.length ; i++){
        if(deque.length > 0 &&  deque[0] < i-k+1){
            deque.shift()
        }
        while(deque.length != 0   && nums[deque[deque.length-1]] < nums[i]){
            deque.pop()
        }

        deque.push(i)

        ans.push(nums[deque[0]])
    }
}