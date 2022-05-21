let itemCount = 0;
let totalPrice = [];
const btns = document.querySelectorAll(".product  button");
const nItems = document.getElementById("nItems");
const tItems = document.getElementById("tItems");
const cardDetails = document.getElementById("cart_details");


btns.forEach((btn) => {
  btn.addEventListener("click", function () {
      //product title and product price iterate by Element sibling
    let productTitle =
      this.previousElementSibling.previousElementSibling.previousElementSibling
        .innerText;
    let productPrice = this.previousElementSibling.innerText;

    itemCount += 1;
    console.log(productTitle);
    console.log(productPrice);
    createCart(productTitle, productPrice);

  });
});


//create element and append to fragment and so on.
function createCart(title, price) {
  const fragment = document.createDocumentFragment();
  const li = document.createElement("li");
  li.innerHTML = ` <table id="cartD"> <tr> <td><h3> ${title}  </h3>  </td> <td><h3>${price}</h3></td>  </tr></table>`;
  fragment.append(li);
  cardDetails.append(fragment);

  nItems.textContent = `X ${itemCount}`;
  totalPrice.push(price.substr(1));
  totalPrice = totalPrice.map(Number);
  let totalPrice1 = totalPrice.reduce((accu, curr) => {
    return accu + curr;
  });

  tItems.textContent = totalPrice1;
}


//Empty Cart 
function empty(){
    cardDetails.textContent='';
    console.log("wer")
    itemCount = 0;
    nItems.textContent = `X ${itemCount}`;
    totalPrice =[0]
    tItems.textContent = totalPrice;
}