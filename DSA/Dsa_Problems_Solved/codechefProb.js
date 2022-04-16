var input = '';

process.stdin.on('data', function(chunk){
 input = input + chunk;
})

process.stdin.on('end', function(){

  input = input.split(' ');
  
  var x = parseInt(input[0]);
  var y = parseInt(input[1]);
  
  if(x % 5 === 0  && y > x){
    
    y = y-x -0.50;
    
  }
  else{
    console.log(y.toFixed(2));
  }
 
})

// STDIN
//23 120 

// Output:

// 120.00