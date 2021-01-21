import calculateTotalPrice from "./calculateTotalPrice";

function showSummary(productsContainer, products, summaryContainer) {

  summaryContainer.textContent = `${ calculateTotalPrice( products, productsContainer ) } zł`;

}

export default showSummary;
