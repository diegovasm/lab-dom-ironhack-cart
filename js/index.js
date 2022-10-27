// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let subTotalValue = 0;
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  console.log(price.innerText);
  console.log(quantity.value); 

  subTotalValue = Number(price.innerText) * Number(quantity.value);


  let subTotal = product.querySelector('.subtotal span');
  subTotal.innerText = subTotalValue;
  
  return subTotalValue;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

    let products = document.getElementsByClassName('product');
    let subTotalAll = 0;
    
    for(let value = 0; value < products.length;value++){

      subTotalAll += updateSubtotal(products[value]);

    }
    
  // ITERATION 3
  //... your code goes here

  const totalValue = document.querySelector('#total-value span');
  totalValue.innerText = subTotalAll;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
