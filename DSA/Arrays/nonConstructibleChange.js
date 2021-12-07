function nonConstructibleChange(coins) {
    // Write your code here.
      
    coins.sort((a,b) => a - b)
      
      let currentChangeCreated = 0;
      for(const coin of coins){
          if(coin > currentChangeCreated + 1) return currentChangeCreated + 1;
          console.log('Before 1 curretchage' , currentChangeCreated)
          currentChangeCreated += coin
          console.log('After curretchage' , currentChangeCreated)

      }
      console.log('before return' , currentChangeCreated);



      return currentChangeCreated +1
      
  }
  
  // Do not edit the line below.
let coins =[5, 7, 1, 1, 2, 3, 21] 
console.log( nonConstructibleChange(coins))


//  when we give return , after return they not executed next line. smallest numbet define without creating and thats easy.