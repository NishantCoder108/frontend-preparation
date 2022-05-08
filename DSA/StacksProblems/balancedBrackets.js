// Brackets are balanced or not?
let str = "{()()}"

function BalancedBrackets(str){

    let Stack = [];
    let isValid = true;
    for(let i=0; i<str.length;i++){
     
        if(str[i]== "{"   || str[i]== "("  ||  str[i] == "["){
            Stack.push(str[i]);
        }
        else if(str[i] == "}"){
            if(Stack.length != 0  &&  Stack[Stack.length-1] == "{"){
                Stack.pop();
                continue;

            }
            else{
                isValid= false;
            }
        }

        else if(str[i] == ")"){
            if(Stack.length != 0  &&  Stack[Stack.length -1] == "("){
                Stack.pop();
                continue;
            }
            else{
                isValid = false;
            }
        }

        else if(str[i] == "]"){
             if(Stack.length != 0 && Stack[Stack.length -1] == "["){
                 Stack.pop();
                 continue;
             }else{
                 isValid = false;
             }
        }
    }

    if(isValid == false){
        return false;

    }else {
      if(Stack.length != 0){
          return false;
      }else{
          return true;
      }
    } 

}
console.log(BalancedBrackets(str))