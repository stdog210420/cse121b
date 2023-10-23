import { productList, displayProducts, getProducts} from "./product.js";
/* reset Function */

    //Clear the displayed list of products.
    const reset = () => {
        //get productElement 
        const productElement = document.querySelector("#products");
        //clear all article elements
        productElement.innerHTML = "";
    }
    
    // if (Array.isArray(productList)) {
        // templeList 是一個陣列，可以使用 filter
    //     console.error("productList 是一個陣列。");
    // } else {
    //     console.error("productList 不是一個陣列。");
    // }
    
    /* sortBy Function */
    
        //Declare a function expression named sortBy
        //The function should accept a argument in a parameter named products.
    const sortBy = (productList) => {
        //In this function, first call the reset function to clear the output.
        reset ();
        //Define a variable named filter that obtains the value of the HTML element with the ID of sortBy (The pull-down menu).
        const filter = document.querySelector("#sortBy").value;
        //Use a switch statement that uses the filter value as the selector responding to four (4) cases.
        //For each case, call the displayProducts function using an filter statement that filters the products parameter for the four options provided.
        switch (filter) {
            //"utah": filter for products where the location contains "束口提袋" as a string.
            case "handbag":
                const handbag =productList.filter((product) => product.class.includes("束口提袋"));
                displayProducts(handbag);
                break;
            //"nonutah": filter for products where the location does not contain "束口提袋" as a string.
            case "notHandbag":
                const notHandbag = productList.filter((product) => !product.class.includes("束口提袋"));
                displayProducts(notHandbag);
                break;
            //"all": no filter. Just use products as the argument.
            case "all":
                displayProducts(productList);
                break;
        }
    }
    /* Event Listener */
    
        //Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function 
        //and sends a arrow function result with the productList as the argument.
        document.querySelector("#sortBy").addEventListener("change", () => {sortBy(productList)});

// Add shopping cart button functionality
const addToCartButton = document.getElementById("addToCart");
const cartItems = document.getElementById("cart-items");
const totalQuantity = document.getElementById("quantity");
const totalCost = document.getElementById("total");
let cart = [];
let totalPrice = 0;
let sum = 0;
//click button function
function addToCart(productId) {
    const product = productList.find((item) => item.productId === productId);
    console.log(product)

    if (product) {
        // If the product is found, add it to the cart
        cart.push(product);
        // Update the quantity of the added product
        product.quantity++;

        // Create a new list element
        const listItem = document.createElement("li");
        listItem.textContent = `商品編號: ${product.productId}, 商品名稱: ${product.productName}, 價格: $${product.price}, 數量: ${product.quantity}`;
        // add listItem to the shopping cart
        cartItems.appendChild(listItem);

        //update total number
        sum += product.quantity;
        console.log(totalQuantity)
        console.log(product.quantity)
        // update total price
        totalPrice += product.price * product.quantity;
        totalQuantity.textContent = `合計: ${sum}`;
        totalCost.textContent = `總金額: $${totalPrice}`;
    } else {
        // Handle the case where the product is not found
        console.log("Product not found.");
    }
}
// Get a reference to the "Clear" button element
const clearCartButton = document.getElementById("clearCart");

// Add a click event listener to the "Clear" button
clearCartButton.addEventListener("click", () => {
    // Clear the shopping cart
    cart = [];
    sum = 0;
    totalPrice = 0;

    // Remove all items from the cart display
    cartItems.innerHTML = ""; // Assuming "cartItems" is the container for cart items

    // Update the total cost and total quantity displays
    totalCost.textContent = "總金額: $0";
    totalQuantity.textContent = "合計: 0"; // Make sure to use the correct element

    // You can also add additional logic as needed, like showing a message or resetting other parts of your application.
});

export {addToCart};
