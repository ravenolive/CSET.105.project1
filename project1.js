const itemsToPurchase = document.getElementById("itemsToPurchase");
const purchasedItems = document.getElementById("purchasedItems");

function addItem() {
    const newItemText = document.getElementById("newItem").value;
    if (newItemText.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = newItemText;
    li.onclick = toggleItemStatus;
    itemsToPurchase.appendChild(li);

    document.getElementById("newItem").value = "";
}

function toggleItemStatus() {
    this.classList.toggle("completed");

    if (this.parentNode === itemsToPurchase) {
        purchasedItems.appendChild(this);
    } else {
        itemsToPurchase.appendChild(this);
    }
}