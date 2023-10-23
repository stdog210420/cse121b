import { addToCart} from "./project.js";

/* Declare and initialize global variables */

    //Declare a const variable named productElement that references the HTML div element that eventually will be populated with product data.
    const productElement = document.querySelector("#products");
    //Declare a global empty array variable to store a list of products named templeList.
    // use let not const
let productList= [];

/* async displayProducts Function */

    //Declare a function expression using const named displayproducts that uses an arrow function
    // to accept a list of temples as an array argument.
const displayProducts = (products) =>{
    //Process each product in the product array using a forEach method and do the following for each product item:
    products.forEach((product) => {
    //Create an HTML <article> element (createElement).
    const article= document.createElement("article");    
    //Create an HTML <h3> element and add the product's productName property to this new element.
    const h3 = document.createElement("h3");   
    h3.textContent = product.productName;
    // create price element
    const priceElement = document.createElement('p');
    priceElement.textContent = `價格: $${product.price}`;
    // create quantity element
    const quantityElement = document.createElement('p');
    quantityElement.textContent = `數量: ${product.quantity}`;
    //Create an HTML <img> element and add the product's imageUrl property to the src attribute and 
    //the product's location property to the alt attribute.
    const img = document.createElement("img"); 
    img.src = product.imageUrl;
    img.alt = product.class;
    //Create button for each product
    const button = document.createElement("button");
    button.textContent = "加入購物車";
    // Trigger the addToCart function with the respective product as a parameter in the button's click event listener
    button.addEventListener("click", function() {
        console.log("Button clicked with productId: " + product.productId);
        console.log("Button clicked with productQuantity: " + product.quantity);
        product.quantity = 0;
        addToCart(product.productId);
    });
    //Append the <h3> element and the <img> element to the <article> element as children. (appendChild)
    article.appendChild(h3);
    article.appendChild(img);
    article.appendChild(priceElement);
    article.appendChild(quantityElement);
    article.appendChild(button);
    //Append the <article> element to the global productElement variable declared in Step 2
    productElement.appendChild(article); })

}

/* async getProducts Function using fetch()*/

    //Create another function expression called getProducts. Make it an async anonymous, arrow function.
const getProducts = async () => {
    //In the function, declare a const variable named response that awaits the built-in fetch method calling the product data, absolute URL given in Step 2 above.
    const response = await fetch("https://stdog210420.github.io/best_sale/products.json"); 
    //Convert your fetch response into a JavaScript object (.json) and assign the result to the productList global array variable you declared in Step 3 above. 
    //Make sure the the execution of the code waits here as well until it finishes.
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        // assign the result to the templeList global array variable you declared in Step 3 above. 
        //Make sure the the execution of the code waits here as well until it finishes
        //not use let, it's a local variable. Without the let or const prefix is assumed to be a global variable. 
        productList  = await response.json();
        //The last statement in the getProducts function calls the displayProducts function and passes it the list of products (productList).
        displayProducts(productList);
        console.log(productList)
    }
}   

getProducts();

export {productList, displayProducts, getProducts};
