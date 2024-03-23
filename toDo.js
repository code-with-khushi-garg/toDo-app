const display = document.getElementById('display');
const addItem = document.getElementById('addItem');
const itemList = document.getElementById('itemList');

addItem.addEventListener('click', addItems);

function addItems() {
    const newItem = display.value.trim();
        const li = document.createElement('li');
        li.textContent = newItem;
        li.innerHTML=`${newItem}
        <button class="delete-btn" onclick="deleteItem(this)" style="position:fixed; right:500px; width:70px;
        border-radius:3px;">Delete</button>`;
        itemList.appendChild(li);
        display.value = '';

        
}
function deleteItem (newItem){
    newItem.parentNode.remove();
}