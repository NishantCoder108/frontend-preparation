const container =document.getElementById('container')

console.log(container)
console.log(container.firstElementChild)
function removeFirst(){

    if(container.firstElementChild){
        container.removeChild(container.firstElementChild)
    }
}


function removeLast(){
    if(container.lastElementChild){
        container.removeChild(container.lastElementChild)
    }
}