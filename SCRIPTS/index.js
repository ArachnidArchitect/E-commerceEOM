let card1 = document.querySelector('.LCTcard1')
let card2 = document.querySelector('.LCTcard2')
let cards = [card1, card2]
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

// This is a function that acts as a slide show for the boards that appear on the home screen
  function alternateCards(input) {
      
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
