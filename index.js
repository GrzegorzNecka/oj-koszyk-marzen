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
