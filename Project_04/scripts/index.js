let cartItems;

onLoad();

// Run functions inside onLoad() when the page loads
function onLoad() {
    let cartItemCount = localStorage.getItem("cartItems");
    cartItems = cartItemCount ? JSON.parse(cartItemCount) : [];
    displayItemsOnHomePage();
    displayCartItemsCount();
}



// Function will add the item to the cart
function addToCart(itemId) {
    cartItems.push(itemId)
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    displayCartItemsCount();
}

// function will display count of items in cart at bag logo in header
function displayCartItemsCount() {
    const cartItemsCount = document.querySelector(".bag-items");
    if(cartItems.length > 0){
        cartItemsCount.innerText = cartItems.length;
        cartItemsCount.style.visibility = "visible"
    }else{
        cartItemsCount.style.visibility = "hidden"
    }
}

// function will display items on homepage
function displayItemsOnHomePage() {
    const itemsContainer = document.querySelector(".items-container")

    if(!itemsContainer) {
        return;
    }


    let innerHTML = "";

    items.forEach(item => {
        innerHTML += `
        <div key=${item.id} class="item-container">
            <div class="item-image-container">
                <img class="item-image" src="${item.image}" alt="item">
            </div>
           <div class="rating">
               ${item.rating.stars} 🌟 | ${item.rating.count / 1000}k
           </div>
           <div class="company-name">${item.company}</div>
           <div class="item-name">${item.item_name}</div>
           <div class="price">
               <span class="current-price">Rs ${item.current_price}</span>
               <span class="original-price">Rs ${item.original_price}</span>
               <span class="discount">(${item.discount_percentage}% OFF)</span>
           </div>
           <button class="btn-add-cart" onClick=addToCart(${item.id})>Add to Cart</button>
       </div>
    `
    });
    itemsContainer.innerHTML = innerHTML;
}
