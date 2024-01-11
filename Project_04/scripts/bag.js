let cartItemObj;
const CONVENIENVE_FEE = 99;
onLoad();

function onLoad() {
    loadCartItemObj();
    displayCartItems();
    displayPriceSummary();
}

function loadCartItemObj() {
    cartItemObj = cartItems.map(itemId => {
        for (let i = 0; i < items.length; i++) {
            if(itemId === Number(items[i].id)) {
                return items[i];
            }   
        }
    })
}


// This function will remove the item from cart
function removeItem(id) {
    cartItems = cartItems.filter(itemId => itemId !== id);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    loadCartItemObj();
    displayCartItems();
    displayCartItemsCount()
    displayPriceSummary();

}

// This function will display all the items in cart
function displayCartItems() {
    
    let containerElement = document.querySelector(".bag-items-container");

    let innerHTML = "";

    cartItemObj.forEach(item => {
        innerHTML += generateHTML(item);
    });

    containerElement.innerHTML = innerHTML;
};


function generateHTML(item) {
    return `
    <div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="../${item.image}">
    </div>
    <div class="item-right-part">
      <div class="company">${item.company}</div>
      <div class="item-name">M${item.item_name}</div>
      <div class="price-container">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">${item.return_period} days</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">${item.delivery_date}</span>
      </div>
    </div>

    <div class="remove-from-cart" onclick="removeItem(${item.id})">X</div>
  </div>
    `
}


function displayPriceSummary() {
  const priceSummary = document.querySelector(".bag-summary");
  let totalMRP = 0;
  let discount = 0;
  let totalAmt = 0;

  cartItemObj.forEach(item => {
    totalMRP += item.original_price;
    discount += item.original_price - item.current_price;
    totalAmt = totalMRP - discount + CONVENIENVE_FEE;
  })

  priceSummary.innerHTML = `
        <div class="bag-details-container">
          <div class="price-header">PRICE DETAILS (${cartItemObj.length} Items) </div>
          <div class="price-item">
            <span class="price-item-tag">Total MRP</span>
            <span class="price-item-value">Rs ${totalMRP}</span>
          </div>
          <div class="price-item">
            <span class="price-item-tag">Discount on MRP</span>
            <span class="price-item-value priceDetail-base-discount">-Rs ${discount}</span>
          </div>
          <div class="price-item">
            <span class="price-item-tag">Convenience Fee</span>
            <span class="price-item-value">Rs 99</span>
          </div>
          <hr>
          <div class="price-footer">
            <span class="price-item-tag">Total Amount</span>
            <span class="price-item-value">Rs ${totalAmt}</span>
          </div>
        </div>
        <button class="btn-place-order">
          <div class="css-xjhrni">PLACE ORDER</div>
        </button>
  ` 
}