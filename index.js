import drawContent from "./drawContent";
import findParent from "./findParent";
import showSummary from "./showSummary";

import "./style.css";

const productsContainer = document.querySelector(".flex.flex-col");

const products = [
  {
    id: 1,
    name: 'Kurs "Opanuj JavaScript"',
    description: "Kurs programowania",
    price: 399,
    icon: "https://i.picsum.photos/id/160/200/150.jpg",
    multiply: 1,
    isOrdered: true
  },
  {
    id: 2,
    name: "Mentoring z Przemkiem",
    description: "Indywidualne konsultacje",
    price: 150,
    icon: "https://i.picsum.photos/id/450/200/150.jpg",
    multiply: 1,
    isOrdered: true
  }
];

const summaryContainer = document.querySelector("span.font-bold");
const closeButtons = document.querySelectorAll(".js-button");

drawContent(productsContainer, products, summaryContainer);
closeButtons.forEach(button => button.addEventListener("click", e => deleteItem(e)));

//----------------------

const multiplyInputs = document.querySelectorAll(".js-input");
multiplyInputs.forEach(input => input.addEventListener("change", e => handleChange(e)));

function handleChange(e) {

  const element = findParent(e.target);
  const prodID = parseInt(element.id);

  products.forEach(product => {
    if (product.id === prodID) { product.multiply = e.target.value; }
  });

  showSummary(productsContainer, products, summaryContainer);
  
}

//----------------------



function deleteItem(e) {

  const elementToDelete = findParent(e.target);
  const prodID = parseInt(elementToDelete.id);

  products.forEach(product => {
    if (product.id === prodID) product.isOrdered = false;
  });
  
  productsContainer.removeChild(elementToDelete);

  showSummary(productsContainer, products, summaryContainer);

}

