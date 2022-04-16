var input = '';
 
process.stdin.on('data', function(chunk){
 input = input + chunk;
})
 
process.stdin.on('end', function(){
  console.log(input);
  input = input.split(' ');
  console.log(input.reverse())
})
