
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
                        <div class="cart-upDwn">
                            <button class="cart-btn-up" value="${purchasedItem.id}">+</button>
                            <button class="cart-btn-down" value="${purchasedItem.id}">-</button>
                        </div>
                        <div class="trash">
                            <i class="fa-regular fa-trash"></i>
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



// Js for profile options
let profile = document.querySelector('.navEnd img')
let profileMenu = document.querySelector('#navAccList')


profileMenu.addEventListener('mouseleave', () => {
    profileMenu.style.display = 'none'


})
profile.addEventListener('mouseover', () => {
    profileMenu.style.display = 'block'


})
