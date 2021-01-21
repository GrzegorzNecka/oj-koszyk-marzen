import showSummary from "./showSummary";

function drawContent(productsContainer, products, summaryContainer) {
  
  products.forEach( ( product ) => {

    const { name, description, price, icon } = product;
    const productItem = document.createElement("div");
    
    productItem.id = product.id;

    productContainer.classList.add(
      "flex",
      "items-center",
      "border-b",
      "border-dashed",
      "js-container"
    );

    productItem.innerHTML = `
       <div class="flex-auto">
          <img class="w-10 rounded-sm overflow-hidden" src="${icon}" alt="">
        </div>

        <div class="flex-auto px-5 py-3">
          <h2>${name}</h2>
          <p class="text-xs">${description}</p>
        </div>

        <div class="flex justify-end">
          <div class="border text-center mx-3"><input  class="w-10 js-input" type="number" value="1"></div>
          <div>${price} zł</div>
          <div class="pl-4 js-button"><i class="fas fa-times"></i></div>
        </div>
  `;

    productsContainer.appendChild(productItem);

  });

  showSummary(productsContainer, products, summaryContainer);
}

export default drawContent;
