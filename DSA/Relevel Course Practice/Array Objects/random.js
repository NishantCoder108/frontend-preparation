
var randomItem = document.querySelectorAll(".randomItem")
console.log(randomItem);


var randomSelector = randomRepeats([...randomItem])

const randomSelectorInterval= setInterval(() =>{
randomSelector()
},2000)

function randomRepeats(arr){
 var copy = arr.slice(0)


 return function (){
     arr.forEach(el => {
         el.classList.remove('active')
         
     });

     if(copy.length < 1){
         copy = arr.slice(0)
     }
      var index = Math.floor(Math.random()* copy.length)

      var item = copy[index];

      copy.splice(index,1);
      item.classList.add('active')

      return item;
 }

}