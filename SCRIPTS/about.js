// Js for profile options
let profile = document.querySelector('.navEnd img')
let profileMenu = document.querySelector('#navAccList')


profileMenu.addEventListener('mouseleave', () => {
    profileMenu.style.display = 'none'


})
profile.addEventListener('mouseover', () => {
    profileMenu.style.display = 'block'


})
let shoppingCart = document.querySelector('i.fa-cart-shopping')
let tester = JSON.parse(localStorage.getItem('purchasedItems'))

    if (tester.length>0) {
        shoppingCart.setAttribute("class", "fa-solid fa-cart-shopping fa-bounce");
    }else{
        console.log('im empty')
        console.log(tester)
    }
    

