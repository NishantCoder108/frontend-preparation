console.log("Nishant")

const ul = document.getElementById('users'),
url='https://randomuser.me/api/?&results=10';

const createNode = function(element){
    return document.createElement(element)
}

const append = function(parent,el){
    return parent.appendChild(el)

}

fetch(url)
     .then((response) =>response.json())
     .then((data) =>{

        let users = data.results

        return users.map((user) =>{
            let li =  createNode('li'),
            img = createNode('img'),
            span = createNode('span'),
            span2 = createNode('span')

            img.src= user.picture.medium;
            span.innerHTML =`${user.name.first} ${user.name.last}`
            span2.innerHTML=`${user.email}`
            // console.log(img)
            append(li,img)
            append(li,span)
            append(li,span2)
            append(ul,li)
        })
     }) .catch((err) => console.log(err))