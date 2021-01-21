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

drawContent(productsContainer, products, summaryContainer);

//----------------------

const closeButtons = document.querySelectorAll(".js-button");
const multiplyInputs = document.querySelectorAll(".js-input");

closeButtons.forEach(button =>
  button.addEventListener("click", e => deleteItem(e))
);
multiplyInputs.forEach(input =>
  input.addEventListener("change", e => handleChange(e))
);

function handleChange(e) {
  const element = findParent(e.target);
  const prodID = parseInt(element.id);
  products.forEach(product => {
    if (product.id === prodID) {
      product.multiply = e.target.value;
    }
  });

  showSummary(summaryContainer, products, summaryContainer);
}
