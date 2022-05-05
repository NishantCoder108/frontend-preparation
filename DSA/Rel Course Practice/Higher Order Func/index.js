// Nested Objects

let employee ={
    name:"John",
    company:"Meta",
    skills:{
        tech:'Javascript',
        soft:'Public Speaker'
    }
}

const {
    skills:{tech}
} = employee;
console.log(tech);//only it will desctructured
// console.log(skills)


// let numbers = [23,4,53,2,1,6,55]

// let [a, b,c ,...rest] =numbers;
// console.log(rest);


function addition(a,b,c){
    return a + b + c;
}

const numbers = [1,2,3]
console.log(addition(...numbers))//here use rest operator, this is array passed


function add(...args){
      //(2,3,4) replace with ...args
}

add(1,3,4)//here it is argument , so we passed. it just copy the argument


