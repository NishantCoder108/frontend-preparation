


// Async Await

async function abc(){
   

    try{
 await createPost({title:'Post three' ,body : 'this is third '})

    getPosts();
    }
    catch(err){
        console.log(err)
    }
}

abc()














// //Promise
// const promise1 = Promise.resolve('Hello guys')
// const promise2 = 100;
// const promise3 = new Promise((resolve,reject) =>{

//     setTimeout((resolve,2000,'Good bye'))
// });

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then((res) =>res.json()).then((data) => console.log(data))

// Promise.all([promise1,promise2,promise3,promise4]).then((values) =>console.log(values))