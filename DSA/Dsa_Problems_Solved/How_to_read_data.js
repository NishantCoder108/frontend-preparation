/*
//This is all about How to input retrive from input to Output

process.stdin.on('data', function(chunk){
    console.log(chunk.toString());      // toString then it will be buffer   
  })

  */



/*
//This is second method of retriving data from input
  var input = '';

    process.stdin.on('data', function(chunk){   //data store in input  as it is
     input = input + chunk;
   })

    process.stdin.on('end', function(){           //retrive data from input  as it is
     console.log(input)
   })

*/



/*
//This is all when input store in input and retrive , split with (' ') in input .they will become a Array.

var input = '';

process.stdin.on('data', function(chunk){
 input = input + chunk;
})

process.stdin.on('end', function(){
  console.log(input);
  input = input.split(' ');
  console.log(input)
})

//STDIN
23 120 55 55

//Output:

23 120 55 55
[ '23', '120', '55', '55' ]



*/