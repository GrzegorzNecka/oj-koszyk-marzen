function checkIsEmpty(products) {
  const isEmpty = products.findIndex(product => product.isOrdered);
  return isEmpty === -1 ? true : false;
}

function calculateTotalPrice(products, productsContainer) {
  const isEmpty = checkIsEmpty(products);
  const priceArray = [];
  let totalPrice;

  if (isEmpty) {
    const div = document.createElement("div");
    div.innerHTML = `<h2>Koszyk jest pusty</h2>`;
    productsContainer.appendChild(div);

    return (totalPrice = 0);
  }

  products.forEach(product => {
    const { price, multiply, isOrdered } = product;

    if (isOrdered) {
      priceArray.push(price * multiply);
    }
  });

  if (priceArray.length > 1) {
    totalPrice = priceArray.reduce((prev, current) => {
      return prev + current;
    }, 0);
  } else {
    totalPrice = priceArray[0];
  }

  return totalPrice;
}

export default calculateTotalPrice;
