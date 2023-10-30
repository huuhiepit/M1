//Class
class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}

class Product {
    constructor(id, name, category, quantity, price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.quantity = quantity;
        this.price = price;
    }

    getAmount() {
        return this.quantity*this.price;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getCategory() {
        return this.category;
    }
    setCategory(category) {
        this.category = category;
    }
    getQuantity() {
        return this.quantity;
    }
    setQuantity(quantity) {
        this.quantity = quantity;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }

}

//Categories: id, name
let giacam = new Category(1, 'Gia cầm');
let giasuc = new Category(2, 'Gia súc');

let cates = [giacam, giasuc];
//Products: id, name, category, quantity, price
let pro1 = new Product(1, 'Gà', cates[0], 2, 150000);
let pro2 = new Product(2, 'Vịt', cates[0], 3, 160000);
let pro3 = new Product(3, 'Heo', cates[1], 2, 1500000);
let pro4 = new Product(4, 'Bò', cates[1], 4, 2300000);

let products = [pro1, pro2, pro3, pro4];

//Funtion
showCategory();
let isEditing = false;
function showCategory() {
    let str = '<option value="">Lựa chọn</option>';

    cates.forEach(category => {
        str += `<option value="${category.getId()}">${category.getName()}</option>`
    })

    document.getElementById('selectCategory').innerHTML = str;
}

function showProducts() {
    let total = 0;
    let str = '';
    products.forEach(product => {
        total += product.getAmount();
        str += `
        <tr id="tr_${product.id}">
            <td>P-${product.getId()}</td>
            <td>${product.getName()}</td>
            <td>${product.category.getName()}</td>
            <td class="table-number">${product.getQuantity()}</td>
            <td class="table-number">${formatCurrency(product.getPrice())}</td>
            <td class="table-number">${formatCurrency(product.getAmount())}</td>
            <td>
                <button class="btn fas fa-edit btn-edit" type="button" onclick="handleEdit(${product.getId()})" type="button"></button>
                <button class="btn fas fa-trash btn-delete" type="button" onclick="handleRemoveItemClick(${product.getId()})"></button>
            </td>
        </tr>
        `;
    });
    document.getElementById('list-products').innerHTML = str;
    document.getElementById('total').innerText = formatCurrency(total);
}

//Add product
function handleBtnAdd(){
    let name = document.querySelector('.info-products input[name="txtName"]').value;
    let quantity = document.querySelector('.info-products input[name="txtQuantity"]').value;
    let price = document.querySelector('.info-products input[name="txtPrice"]').value;
    let cateId = document.querySelector('.info-products select[name="sCatelory"]').value;
    let scate = findCategory(cateId);

    let product = new Product(products.length + 1, name, scate, quantity, price);
    
    if(error(product)) {
        products.push(product);
        showProducts();
    }
}

// Edit Product
function handleEdit(id) {
    if (isEditing == false) {
        isEditing = true;
        let product = findProduct(id);
        let tdName = document.querySelectorAll(`#tr_${id} td`)[1];
        let tdCategory = document.querySelectorAll(`#tr_${id} td`)[2];
        let tdQuantity = document.querySelectorAll(`#tr_${id} td`)[3];
        let tdPrice = document.querySelectorAll(`#tr_${id} td`)[4];
        let tdAction = document.querySelectorAll(`#tr_${id} td`)[6];

        tdName.innerHTML = `<input name="itemName" type='text' value='${product.name}' />`
        tdQuantity.innerHTML = `<input name="itemQuantity" type='number' value='${product.quantity}' />`;
        tdPrice.innerHTML = `<input name="itemPrice" type='number' value='${product.price}' />`;

        let strSelect = "";
        strSelect += '<select name="itemCategory">';
        for (let i = 0; i < cates.length; i++) {
            strSelect += `<option value="${cates[i].id}">${cates[i].name}</option>`;
        }
        strSelect += '</select>';
        tdCategory.innerHTML = strSelect;

        tdAction.innerHTML = `
        <button class="btn btn-edit" onclick="handleUpdate(${id})">
            <i class="fa-solid fa-check"></i>
        </button>
        <button class="btn btn-delete" onclick='handleCancel(${id})'>
            <i class="fa-solid fa-xmark"></i>
        </button>
        `;

        let eInputQuantity = document.querySelector('input[name="itemQuantity"]');
        eInputQuantity.addEventListener('input', (evt) => {
            let eInputPrice = document.querySelector('input[name="itemPrice"]');
            let tdAmount = document.querySelectorAll(`#tr_${id} td`)[5];

            tdAmount.innerText = formatCurrency(parseInt(eInputPrice.value * evt.target.value));
        })

        let eInputPrice = document.querySelector('input[name="itemPrice"]');

        eInputPrice.addEventListener('input', (evt) => {
            let eInputQuantity = document.querySelector('input[name="itemQuantity"]');
            let tdAmount = document.querySelectorAll(`#tr_${id} td`)[5];

            tdAmount.innerText = formatCurrency(parseInt(eInputQuantity.value * evt.target.value));
        });
    }

}
function handleUpdate(id) {
    let name = document.querySelector(`input[name="itemName"]`).value;
    let price = document.querySelector(`input[name="itemPrice"]`).value;
    let quantity = document.querySelector(`input[name="itemQuantity"]`).value;
    let categoryId = document.querySelector(`select[name="itemCategory"]`).value;

    let cate = findCategory(categoryId);
    //constructorid, name, category, quantity, price
    let productUpdate = new Product(id, name, cate, quantity, price);
    console.log(productUpdate);
    if (error(productUpdate)) {
       
        updateProduct(id, productUpdate);
        showProducts();
    }
}
function updateProduct(id, productUpdate) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products[i].name = productUpdate.getName();
            products[i].price = productUpdate.price;
            products[i].quantity = productUpdate.quantity;
            products[i].category = productUpdate.category;
            products[i].amount = products[i].price * products[i].quantity;
        }
    }
    isEditing = false;
}
function handleCancel(id) {
    isEditing = false;
    let product = findProduct(id);
    document.querySelectorAll(`#tr_${id} td`)[1].innerText = product.name;
    document.querySelectorAll(`#tr_${id} td`)[2].innerText = product.category.name;
    document.querySelectorAll(`#tr_${id} td`)[3].innerText = product.quantity;
    document.querySelectorAll(`#tr_${id} td`)[4].innerText = formatCurrency(parseInt(product.price));
    document.querySelectorAll(`#tr_${id} td`)[5].innerText = formatCurrency(parseInt(product.price * product.quantity));

    document.querySelectorAll(`#tr_${id} td`)[6].innerHTML = `
        <button  class="btn btn-edit" onclick="handleEdit(${product.id})"
                ><i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="btn btn-delete" onclick="handleRemoveItemClick(${product.id})"
                ><i class="fa-solid fa-trash"></i>
        </button>`;
}

//Delete
function handleRemoveItemClick(id) {
    let product = findProduct(id);
    let check = confirm(`Are you sure you want to remove ${product.getName()}`);

    if (check) {
        deleteProduct(id);
        showProducts();
    }
}
function deleteProduct(id) {
    for(let i = 0; i < products.length; i++) {
        if(products[i].getId() === id) {
            products.splice(i, 1);
            break;
        }
    }
}

//Page

//Search
function handleSearchProduct() {
    let txtSearch = document.querySelector('.search-box input[name="txtSearch"]').value;
    
    
    searchProduct(txtSearch);
}
function searchProduct(search) {
    let productSearch = [];
    for(let i = 0; i < products.length; i++) {
        if(products[i].getName().search(search) > 0) {
            productSearch.push(products[i]);
        }
    }
    console.log(productSearch);

}
//Sort


//Different function
function findCategory(id) {
    for(let i = 0; i < cates.length; i++) {
        if(cates[i].getId() == id) {
            return cates[i];
        }
    }
    return null;
}

function findProduct(id) {
    for(let i = 0; i < products.length; i++) {
        if(products[i].getId() === id) {
            return products[i];
        }
    }
    return null;
}

function error(product) {
    let errors = [];
    
    if(product.getName() == "") {
        errors.push('Please enter a name');
    }
    if(product.getQuantity() == "") {
        errors.push('Quantity must be a number');
    }
    if(product.getPrice() == "") {
        errors.push('Price must be a number');
    }
    if(product.getCategory() == null) {
        errors.push('Please select category');
    }
    if(errors.length > 0) {
        let messages = '';
        errors.forEach(error => {
            messages += error + '\n';
        })
        alert(messages);
        return false;
    }
    return true;
}

function formatCurrency(money) {
    return parseInt(money).toLocaleString('vi-VN', { style: 'currency', currency: 'VND'});
}
showProducts();