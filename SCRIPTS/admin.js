let myProducts = JSON.parse(localStorage.getItem('myProducts'))||[];


let tableRow = document.querySelector('tbody')


function addContent(par1) {
    try {
        tableRow.innerHTML = "";
        par1?.forEach((product, i ) => {
            tableRow.innerHTML+=`
 <tr>
                            <td class="admin-id"value="${product.category}>${product.id}</td>
                            <td class="admin-name">${product.name}</td>
                            <td class="admin-desc">${product.description}</td>
                            <td class="admin-ability">${product.abilityLevel}</td>
                            <td class="admin-price">R ${product.price}</td>
                            <td class="admin-category">${product.category}</td>
                            <td class="admin-type">${product.type}</td>
                            <td class="admin-img"><img src="${product.img}"></td>
                            <td class="edit-buttons">
                                <!-- Button trigger modal -->
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal1">
                                    update
                                    
                                </button>
                                <button class="btn btn-secondary ms-2" onclick="deleteProduct(${i})">Delete</button>


                            </td>
                        </tr>

                        
            `
        });
    } catch (e) {
        tableRow.innerHTML = `
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status"></div>
            <p>No Products Found</p>
        </div>
        `;
    }
}
addContent(myProducts);
// (id, name, description, abilityLevel, price, img, category, type, quantity)
// function to update and delete
function updateProduct(index) {
    try {
        let updatedProduct = {
            id: myProducts[index].id,
            name: document.querySelector(`#admin-name${myProducts[index].id}`).value,
            description: document.querySelector(`#admin-name${myProducts[index].id}`).value,
            abilityLevel: document.querySelector(`#admin-name${myProducts[index].id}`).value,
            price: document.querySelector(`#admin-name${myProducts[index].id}`).value,
            category: document.querySelector(`#admin-name${myProducts[index].id}`).value,
            type: document.querySelector(`#admin-name${myProducts[index].id}`).value,
            quantity: 0
        };
        myProducts[index] = updatedProduct
        localStorage.setItem('myProducts', JSON.stringify(myProducts))
        addContent(myProducts)
    } catch (e) {
        alert('There was an error')
    }
    
}

// delete the product
function deleteProduct(index) {
    try {
        myProducts.splice(index, 1)
        localStorage.setItem('myProducts, JSON.stringify(products')
        addContent(myProducts)
    } catch (error) {
     alert('the item was not deleted')
    }
    
}



// Function to sort the products
let highest = false;
document.getElementById('admin-sort').addEventListener('click', () => {
    console.log('im working')
    try {
        if (!highest) {
            myProducts.sort((a, b) => b.id - a.id);
            highest = true;
        } else {
            myProducts.sort((a, b) => a.id - b.id);
            highest = false;
        }
        addContent(myProducts);
    } catch (e) {
        alert('This Function is under maintenance');
    }
});
// Function to add new product
let adminSavedProduct = document.getElementById('admin-add');
adminSavedProduct.addEventListener('click', () => {
    try {
        const newProduct = {
            id: myProducts.length ? myProducts[myProducts.length - 1].id + 1 : 1, // auto increment ID
            productName: document.querySelector('#addName').value,
            description: document.querySelector('#addDetail').value,
            category: document.querySelector('#addCategory').value,
            amount: parseInt(document.querySelector('#addAmount').value, 10),
            img_url: document.querySelector('#addImage').value
        };
        myProducts.push(newProduct);
        localStorage.setItem('myProducts', JSON.stringify(myProducts));
        addContent(myProducts);
        document.querySelector('#addName').value = '';
        document.querySelector('#addDetail').value = '';
        document.querySelector('#addCategory').value = '';
        document.querySelector('#addAmount').value = '';
        document.querySelector('#addImage').value = '';
    } catch (e) {
        alert('Unable to Add new product');
    }
});

// JS FOR NAV 
let profile = document.querySelector('.navEnd img')
let profileMenu = document.querySelector('#navAccList')


profileMenu.addEventListener('mouseleave', () => {
    profileMenu.style.display = 'none'


})
profile.addEventListener('mouseover', () => {
    profileMenu.style.display = 'block'


})







