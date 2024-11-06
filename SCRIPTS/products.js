const myProducts = [];

function ProdItems(id, name, description, abilityLevel, price, img, category, type, quantity) {
    this.id = id,
        this.name = name,
        this.description = description,
        this.abilityLevel = abilityLevel,
        this.price = price,
        this.img = img,
        this.category = category,
        this.type = type
    this.quantity = quantity

}

let pyzel = new ProdItems(1, 'Pyzel Astro Glider', '', 'Intermediate', 9595, '../IMAGES/prodImages/pyzel-astro-glider.png', 'boards', 'Short', 0);

let maytrix = new ProdItems(2, 'Smth Shapes Maytrix', '', 'Intermediate', 7995, '../IMAGES/prodImages/smth-maytrix.png', 'boards', 'Short', 0);

let plwideboy = new ProdItems(3, 'Peter Lawson Wide Boy', `This is our ALL ROUNDER XL model. Big guys use this board because of the wider and thicker dims. With the same features as the All Rounder, 130kgs guys can still enjoy the all round performance the Wide Boy has to offer.
Available in squash or rounded pin. Comes with centre box and side boxes and high gloss polish finish.`, 'Beginner', 9495, '../IMAGES/prodImages/peter-lawson-wide-body.png', 'boards', 'Long', 0);

let plAllRounder = new ProdItems(4, 'Peter Lawson All Rounder', '', 'Beginner', 9495, '../IMAGES/prodImages/peter-lawson-all-rounder.png', 'boards', 'Long', 0);

let olaian = new ProdItems(5, 'Olaian Blue Body Board 100', '', 'Beginner', 900, '../IMAGES/prodImages/body-board1.png', 'boards', 'Boogie Board', 0);

let raptor = new ProdItems(6, 'Raptor Ixpe Bodyboard 42', '', 'Beginner', 1159.99, '../IMAGES/prodImages/body-board2.png', 'boards', 'Short', 0);

let phoenix = new ProdItems(7, 'Xcel Phoenix 4.3', '', 'Intermediate', 6995, '../IMAGES/prodImages/xcel-pheonix-4-3.png', 'swimwear', 'male', 0);

let comp = new ProdItems(8, 'Xcel Comp 4.3', '', 'Intermediate', 5795, '../IMAGES/prodImages/xcel-comp-4-3.png', 'swimwear', 'male', 0);

let female = new ProdItems(9, 'Xcel Ladies Comp 4.3', '', 'Intermediate', 6995, '../IMAGES/prodImages/Xcel-female.png', 'swimwear', 'female', 0);
myProducts.push(pyzel, maytrix, plwideboy, plAllRounder, olaian, raptor, phoenix, comp, female)
localStorage.setItem('myProducts', JSON.stringify(myProducts))


//adding items to the grid
let grid = document.querySelector('.grid')

myProducts.forEach(item => {
    grid.innerHTML += `<div class="grid-item">
                <div class="gridRow1">
                    <img src='${item.img}' alt="">
                </div>
                <div class="gridRow2">
                    <span>${item.abilityLevel}</span>
                    <h3>${item.name}</h3>
                    <h3>R${item.price}</h3>

                </div>
                <div class="gridRow3">
                    <div class="grid-btns">
                        <button class="grid-btn-vm">View More</button>
                        <button class="grid-btn-atc" value='${item.id}'>Add To Cart</button>
                    </div>
                </div>
            </div>
    `
});

// add to cart

let buttons = document.querySelectorAll('button.grid-btn-atc')
buttons.forEach(button => {
    let value = button.value
    button.addEventListener('click', () => {
        addToArray(value)
        
    })

})

let purchasedItems = []
function addToArray(id) {
    let results = myProducts.filter(item => {
        if (item.id == id && item.quantity == 0) {
            purchasedItems.push(item)
            item.quantity++
            console.log(purchasedItems)
        } else if (item.quantity >= 1) {
            item.quantity++
        }
    })
    localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems))
    emptyOrNah()
}

// // filter and nav hover
let offcanvasFilterBtn = document.querySelector('button.offscreen-filter')
let closeBtn = document.querySelector('i.fa-x')
let profile = document.querySelector('.navEnd img')
let filterSection = document.querySelector('#prodFilter')
let profileMenu = document.querySelector('#navAccList')
profile.addEventListener('mouseover', () => {
    profileMenu.style.display = 'block'


})
profileMenu.addEventListener('mouseleave', () => {
    profileMenu.style.display = 'none'


})
offcanvasFilterBtn.addEventListener('click', () => {
    filterSection.style.width = "25%"
    offcanvasFilterBtn.style.display = "none"
})
closeBtn.addEventListener('click', () => {
    filterSection.style.width = "0"
    offcanvasFilterBtn.style.display = "block"
})
let shoppingCart = document.querySelector('i.fa-cart-shopping')

function emptyOrNah() {
    let tester = JSON.parse(localStorage.getItem('purchasedItems'))
    if (tester.length>0) {
        shoppingCart.setAttribute("class", "fa-solid fa-cart-shopping fa-bounce");
    }else{
        console.log('im empty')
        console.log(tester)
    }
    
}
emptyOrNah()
