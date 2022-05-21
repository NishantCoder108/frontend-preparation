/** Key iterate , value() , keys() , entries() , from() ,Map() */
//e.g. 1
let arr = [4, 4, 2, 5, 7, 8, 4, 8, 9, 8];
console.log("first :", arr[0], "\n", "last:", arr[arr.length - 1]);

//e.g. 1a
let arr1a =[
    { 'first name' : "Nishant Kumar" ,'last name' : "Surya" , branch:'civil'}
]
console.log('Branch:',arr1a[0].branch, 'first name:' ,arr1a[0]['first name']  , 'last name :' , arr1a[0]["last name"], )

//e.g. 2
let diagonalNum = [
  [2, 4, 5],
  [3, 4, 6],
  [3, 6, 7],
];
console.log(
  "first:",
  diagonalNum[0][0],
  "\n",
  "middle:",
  diagonalNum[1][1],
  "\n",
  "last:",
  diagonalNum[2][2]
);

//e.g. 3
let nameArr = ["Elon", "Kelvin", "Jeff", "Steve", "Ambani", "Eienstein"];
console.log(
  "first name :",
  nameArr[0],
  "\n",
  "last name :",
  nameArr[nameArr.length - 1]
);

//from() method to use for iterating
console.log(Array.from(nameArr.keys())); //[ 0, 1, 2, 3, 4, 5 ]
console.log(Array.from(nameArr.values())); //[ 'Elon', 'Kelvin', 'Jeff', 'Steve', 'Ambani', 'Eienstein' ]
console.log(Array.from(nameArr.entries())); /**[
    [ 0, 'Elon' ],
    [ 1, 'Kelvin' ],
    [ 2, 'Jeff' ],
    [ 3, 'Steve' ],
    [ 4, 'Ambani' ],
    [ 5, 'Eienstein' ]
  ] */

//new Map() method to use , How it works

console.log(new Map(nameArr.entries()));
/* * Map(6) {
  0 => 'Elon',
  1 => 'Kelvin',
  2 => 'Jeff',
  3 => 'Steve',
  4 => 'Ambani',
  5 => 'Eienstein'

}
Note:-1) In case of 'entries' ,map will work and in other cases , they will not show .e.g. values() , keys().
       2) from() method , it helps in keys iterator ,values iterator, and also entries 
*/
