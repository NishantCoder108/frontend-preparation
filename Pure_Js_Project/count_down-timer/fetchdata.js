console.log("Hello Nishant");
let postsData = document.getElementById("posts-data");
async function dataFetchingFunc() {
  try {
    await fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((json) => {
        json.forEach((jsonData) => {
          const fragment = document.createDocumentFragment();
          const div = document.createElement('div')
          const h1 = document.createElement("h1");
          const p = document.createElement("p");

          h1.textContent = jsonData.title;
          p.textContent = jsonData.body;
          div.append(h1,p)
          div.setAttribute("style" ," border: 2px solid wheat ; margin-bottom: 15px; padding: 9px")
          fragment.append(div);
        
          postsData.append(fragment);
          console.log(jsonData);
        });
      });
  } catch (error) {
    console.log(error);
  }
}

dataFetchingFunc();
