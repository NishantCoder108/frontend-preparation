let user =[{"name" :"Nishant", "Age":32}, {"name":"Surya", "Age":15},{"name": "Bhai Ketu" , "Age": 53}, {"name":"Ketu Surya", "Age" :43}]

function minimumSal(arr){

    for(let i= 0; i<arr.length-1; i++){

        let smallestIdx = i;
        for(let j= i+1; j<arr.length; j++){
            if(arr[smallestIdx].Age > arr[j].Age){
                smallestIdx = j;
            }
        }

        const temp = arr[i]
        arr[i] = arr[smallestIdx]
        arr[smallestIdx] = temp;
    }

    return arr
}

let daata =minimumSal(user)

console.log(daata[daata.length-2])
console.log(daata)
