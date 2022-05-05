// Pop Method

let fruits = ["Apple","Orange ","Mango"]

// console.log(fruits.pop())
// console.log(fruits)

// fruits.push("Guava")
// console.log(fruits)


/* Shift(Removing from beginning) and Unshift(Adding to beginning) */

// console.log(fruits.shift())
// console.log(fruits)



/*___ for Loop */
// for(let i = 0; i<fruits.length; i++){
//     console.log(fruits[i])
// }

// for(let fruit of fruits){
//     console.log(fruit)//Only value
// }


// for(let index in fruits){
//     console.log(index)
// }

// for-in loop for key , finding in obj


// let arr = new Array("Apple","Orange ","Mango");
// console.log(arr)

// let arr1 = new Array(2)
// console.log(arr1[0])


/*Delete using splice method .
It change the reference to original
 */

// let arr2 = ["we ", "study","javascript"]
// arr2.splice(1,1)



// Replace by using splice
let arr4 = ["we ",'styding', 'js','right','now']

arr4.splice(0,3,"lets","dance")
// console.log(arr4)

// Negative index
// let arr = [1,2,3]
// arr.splice(-1,0,5555,46666)
// console.log(arr)//[ 1, 2, 5555, 46666, 3 ]


/*Slice :- it does not change the reference, it create the copy  (next - prev) */

let arr =['t','e','a','b']
// console.log(arr.slice(0,1))
// console.log(arr.slice(0,2))
// console.log(arr.slice(1,3))
// console.log(arr)


/*concat method */
// console.log(arr.concat([3,4],[5,7]))



/**indexOf Method */

// let arr5= [1,1,1,0,'fase']
// console.log(arr5.indexOf(1))//0
// console.log(arr5.indexOf('fase'))//4
// console.log(arr5.indexOf(null))//-1
// console.log(arr5.indexOf(undefined))//-1





/**Array of Objects */

let users = [
    {id:1, name:"John"},
    {id:2, name:"John"},
    {id:3, name:"John"}
]

//Find method for single
// let user = users.find ((item) => item.id ===1)
// console.log(user)

//Filter method for many
// let someUsers = users.filter((item) => item.id < 3)

// console.log(someUsers.length)



/**Reverese Method  :(it just reverse the array) , it change the reference*/

console.log(arr.reverse())
// arr.sort()
// console.log(arr)


// console.log(typeof arr)

// for array know
// console.log(Array.isArray(arr))




/**key -value pairs */
let user ={
    name:"John",
    age:30,
    'like music' :true

}
user.IsAdmin=true
console.log(user)

delete user.age;//delete age 
console.log(user["like music"]); //we use square bracket

for (let key in user){
    console.log(key)
    console.log("value",user[key])
}

console.log("User Name :-" , user['IsAdmin'])