/*adding items to cart*/
let cart = [];/*empty list*/
                
function addToCart() {
const itemSelect = document.getElementById('item');/*variable to get items from list*/
const quantityInput = document.getElementById('quantity');/*variable to get quantity from user*/

const selectedItem = itemSelect.options[itemSelect.selectedIndex].text;/*selecting item*/
const quantity = parseInt(quantityInput.value);/*convert the text type*/
const price = parseFloat(selectedItem.match(/OMR([\d.]+)/)[1])+15;/*total ptice*/
const total = quantity * price;/*price function*/

cart.push({ item: selectedItem, quantity, total });/*add to list */
/*update values*/
updateCartTable();
updateBillTable();
}
/*updating*/
function updateCartTable() {
const cartBody = document.getElementById('cartBody');
while (cartBody.firstChild) {
    cartBody.removeChild(cartBody.firstChild);/*remove item*/
}
/*item selection*/
cart.forEach(item => {
    const row = cartBody.insertRow();
    row.insertCell(0).textContent = "ACE- OMR15.00 + " + item.item;
    row.insertCell(1).textContent = item.quantity;
    row.insertCell(2).textContent = 'OMR' + item.total.toFixed(2);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remove';
    deleteButton.addEventListener('click', () => removeFromCart(item));
    row.insertCell(3).appendChild(deleteButton);
});
}
/*generating bill*/
function updateBillTable() {
const billBody = document.getElementById('billBody');
while (billBody.firstChild) {
    billBody.removeChild(billBody.firstChild);
}
/*intiating total value*/
let totalAmount = 0;

cart.forEach(item => {
    const row = billBody.insertRow();
    row.insertCell(0).textContent = "ACE- OMR15.00 + " + item.item;
    row.insertCell(1).textContent = item.quantity;
    row.insertCell(2).textContent = 'OMR' + item.total.toFixed(2);

    totalAmount += item.total;
});
/*getting total price*/
const totalElement = document.getElementById('total');
totalElement.textContent = 'Total: OMR' + totalAmount.toFixed(2);
}
/*remove item function*/
function removeFromCart(itemToRemove) {
cart = cart.filter(item => item !== itemToRemove);
updateCartTable();
updateBillTable();
}

function load_calculation(){
    location.replace("calculation.html")
}