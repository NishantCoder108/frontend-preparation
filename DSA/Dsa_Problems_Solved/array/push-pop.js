/*Add from last :- push() ,
Remove from last :- Pop() ,
Add from first :- unshift() ,
Remove from first :- shift(),
Remove to at any index :- splice(4 ,1)  . first argument is where to start i.e. index and second argument is how much remove you want  
Add to at any index :-  splice(3, 0 , 'a', 'b' ,7,0) // second argument is 0 , for adding something*/

//type 1
let arr1 = [9, 4, 6, 7, 8, 9, 2, 5, 6, 6, 7, 8, 9];
arr1[2] = "nishant";
arr1[23] = "Elon Musk";
arr1.push("Steve Jobs", "rohan", "sohan", "mantu", "koyal"); //add many items from last
arr1.unshift(54, 4); //add many items from unshift method from first
arr1.pop(); //remove from last ,only one items
arr1.shift() //remove only one items from starting

arr1.splice(0,4)  //remove items , first argument as starting point , second argument as how much you want to remove

arr1.splice(6 , 0 , 'Start ', 'Second' ,'Third ' ,'last')  //Add items , first argument as starting point , second argument as 0 , for not removing any thing. Adding something
console.log(arr1);
