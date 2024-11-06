let card1 = document.querySelector('.LCTcard1')
let card2 = document.querySelector('.LCTcard2')
let cards = [card1, card2]
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  let shoppingCart = document.querySelector('i.fa-cart-shopping')
let tester = JSON.parse(localStorage.getItem('purchasedItems'))

    if (tester.length>0) {
        shoppingCart.setAttribute("class", "fa-solid fa-cart-shopping fa-bounce");
    }else{
        console.log('im empty')
        console.log(tester)
    }
    


// This is a function that acts as a slide show for the boards that appear on the home screen
  function alternateCards(input) {
    console.log('i ran')  
      index = cards.indexOf(input)
      
        cards[index].style.display = 'block'
        cards[index].style.animation ="appear 3s"
        // change the delay here
        sleep(8000).then(() => {  
            cards[index].style.animation ="disappear 2s";
            sleep(2000).then(() => {  
                // don't touch anything here
                    cards[index].style.display ="none";        
                    index==cards.length-1?alternateCards(cards[0]):alternateCards(cards[index+1])
                })})

    }
    

alternateCards(card1)

// Js for profile options
let profile = document.querySelector('.navEnd img')
let profileMenu = document.querySelector('#navAccList')


profileMenu.addEventListener('mouseleave', () => {
    profileMenu.style.display = 'none'


})
profile.addEventListener('mouseover', () => {
    profileMenu.style.display = 'block'


})
