
// insert the local storage cart to my html
let purchasedItems = JSON.parse(localStorage.getItem("purchasedItems"))
let HTMLpage = document.querySelector('.cart-column')
let sum = 0


purchasedItems.forEach(purchasedItem => {
    HTMLpage.innerHTML += `  
            <div class="cart-row">
                <div class="cart-card">
                    <div class="cart-card-image"><img src="${purchasedItem.img}" alt="">
                    </div>
                    <div class="cart-card-info">
                        <div class="cart-card-info-row">
                            <h3>${purchasedItem.name}</h3>
                        </div>
                        <div class="cart-card-info-row">
                            <h4>Price:R${purchasedItem.price}</h4>
                        </div>
                        <div class="cart-card-info-row">
                            <h4 ="cart-qty">QTY:${purchasedItem.quantity}</h4>
                        </div>
                    </div>
                    <div class="cart-card-btns">
                        <div class="trash">
                            <i class="fa-solid fa-trash" class="delete-item"></i>
                        </div>
                    </div>
                </div>
            </div>
`
 

let total = purchasedItem.price * purchasedItem.quantity
sum += total

});
// total function
let totalDisplay = document.querySelector('#cart-total')
totalDisplay.innerHTML = `Total: R ${sum}`

// delete item
// Get the trash buttons again after rendering cart items
let trashButtons = HTMLpage.querySelectorAll('.trash i.fa-solid');

// Add event listeners to the delete buttons
trashButtons.forEach(deleteBtn => {
  deleteBtn.addEventListener('click', (e) => {
    let itemName = e.target.getAttribute('data-item-name');
    let confirmDelete = confirm(`Are you sure you want to delete ${itemName}?`);
    if (confirmDelete) {
      let parent = e.target.parentNode.parentNode.parentNode;
      parent.remove();
      let index = purchasedItems.findIndex(item => item.name === itemName);
      purchasedItems.splice(index, 1);
      localStorage.setItem("purchasedItems", JSON.stringify(purchasedItems));
      updateTotal();
    }
  });
});
zz
// Js for profile options
let profile = document.querySelector('.navEnd img')
let profileMenu = document.querySelector('#navAccList')


profileMenu.addEventListener('mouseleave', () => {
    profileMenu.style.display = 'none'


})
profile.addEventListener('mouseover', () => {
    profileMenu.style.display = 'block'


})
