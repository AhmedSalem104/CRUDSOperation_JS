// CREUDS Operations

var prouductNameInput = document.getElementById("prouductNameInput");
var prouductPriceInput = document.getElementById("prouductPriceInput");
var prouductCategoryInput = document.getElementById("prouductCategoryInput");
var prouductDescInput = document.getElementById("prouductDescInput");
var searchInput = document.getElementById("SearchInput")
var productArr = JSON.parse(localStorage.getItem("products")) ?? [];
var updateMode = false;
var addUpdatebtn = document.getElementById("addUpdatebtn");
var cancelbtn = document.getElementById("cancelbtn")

var prouductNameAlert = document.getElementById("prouductNameAlert")
var prouductPriceAlert = document.getElementById("prouductPriceAlert")
var prouductCategoryAlert = document.getElementById("prouductCategoryAlert")

var mainIndex;
displayProducts();

function AddUpdateProduct() {
    validProductData()
    if (isDataValid()) {
        if (!updateMode) {
            addProduct(getProduct());
        }
        else {
            updateProduct(getProduct())
        }
        onDataChange()
        clearForm()
    }
}
function getProduct() {
    var product = {
        name: prouductNameInput.value,
        price: prouductPriceInput.value,
        category: prouductCategoryInput.value,
        desc: prouductDescInput.value
    }
    return product;
}
function updateProduct(product) {
    productArr.splice(mainIndex, 1, product);
    updateMode = false;
    addUpdatebtn.innerHTML = "add Product";
    getCancle()
}
function addProduct(product) {
    productArr.push(product);
    getCancle()

}
function displayProducts() {
    var searchTerm = searchInput.value;
    var cartoona = "";
    for (var i = 0; i < productArr.length; i++) {
        // Search By poductName & productPrice
        if (productArr[i].name.toLowerCase().includes(searchTerm.toLowerCase()) || productArr[i].price.includes(searchTerm)) {
            cartoona += `  <tr >
            <td>${i + 1}</td>
            <td>${productArr[i].name}</td>
            <td>${productArr[i].price}</td>
            <td>${productArr[i].category}</td>
            <td>${productArr[i].desc}</td>
            <td><button  onclick="patchProduct(${i})" class="btn btn-outline-warning">Update</button></td>
            <td><button  onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td>
        </tr>`
        }
    }

    document.getElementById("tableBody").innerHTML = cartoona

}
function onDataChange() {
    localStorage.setItem("products", JSON.stringify(productArr))
    displayProducts()
}
function deleteProduct(index) {
    productArr.splice(index, 1)
    onDataChange()
}
function patchProduct(index) {
   
    mainIndex = index;
    updateMode = true;
    console.log(productArr[index])
    prouductNameInput.value = productArr[index].name
    prouductPriceInput.value = productArr[index].price
    prouductCategoryInput.value = productArr[index].category
    prouductDescInput.value = productArr[index].desc;
    addUpdatebtn.innerHTML = "update Product";
    cancelbtn.classList = "btn btn-secondary ms-2 my-5 d-inline"

    validProductData()
}
function getCancle() {
    cancelbtn.classList = "btn btn-secondary ms-2 my-5 d-none"
    addUpdatebtn.innerHTML = "add Product";
    clearForm()

}
function clearForm() {
    prouductNameInput.value = "";
    prouductPriceInput.value = "";
    prouductCategoryInput.value = "";
    prouductDescInput.value = "";
    prouductNameInput.classList.remove("is-valid")
    prouductPriceInput.classList.remove("is-valid")
    prouductCategoryInput.classList.remove("is-valid")
}
function isDataValid() {
    return /^[A-Z][\w\s]{2,19}$/.test(prouductNameInput.value) &&
        /^[1-9]\d*$/.test(prouductPriceInput.value) && 
        /^[A-Z][\w\s]{2,19}$/.test(prouductCategoryInput.value);
}
function validProductData() {
    if (/^[A-Z][\w\s]{2,19}$/.test(prouductNameInput.value)) {
        prouductNameAlert.classList.add("d-none")
        prouductNameInput.classList.add("is-valid")
        prouductNameInput.classList.remove("is-invalid")

    }
    else {
        prouductNameAlert.classList.remove("d-none")
        prouductNameInput.classList.remove("is-valid")
        prouductNameInput.classList.add("is-invalid")

    }

    if (/^[1-9]\d*$/.test(prouductPriceInput.value)) {
        prouductPriceAlert.classList.add("d-none")
        prouductPriceInput.classList.add("is-valid")
        prouductPriceInput.classList.remove("is-invalid")
    }
    else {
        prouductPriceAlert.classList.remove("d-none")
        prouductPriceInput.classList.remove("is-valid")
        prouductPriceInput.classList.add("is-invalid")
    }


    if (/^[A-Z][\w\s]{2,19}$/.test(prouductCategoryInput.value)) {
        prouductCategoryAlert.classList.add("d-none")
        prouductCategoryInput.classList.add("is-valid")
        prouductCategoryInput.classList.remove("is-invalid")
    }
    else {
        prouductCategoryAlert.classList.remove("d-none")
        prouductCategoryInput.classList.remove("is-valid")
        prouductCategoryInput.classList.add("is-invalid")
    }
}

/* function Search() {
    var searchTerm = searchInput.value;
    var cartoona = ""
    for (var i = 0; i < productArr.length; i++) {
        if (productArr[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
            cartoona += `  <tr>
            <td>${i}</td>
            <td>${productArr[i].name}</td>
            <td>${productArr[i].price}</td>
            <td>${productArr[i].category}</td>
            <td>${productArr[i].desc}</td>
            <td><button onclick="patchProduct(${i})" class="btn btn-outline-primary">Update</button></td>
            <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td>
        </tr>`
        }

        document.getElementById("tableBody").innerHTML = cartoona
    }
}
 */

/* 
localStorage.clear()
localStorage.getItem()
localStorage.setItem()
localStorage.removeItem() 
localstorage.length
localStorage.key()

*/
