/* W05: Programming Tasks */

/* Declare and initialize global variables */

    //Declare a const variable named templesElement that references the HTML div element that eventually will be populated with temple data.
const templesElement = document.querySelector("#temples");
    //Declare a global empty array variable to store a list of temples named templeList.
    // use let not const
let templeList= [];

/* async displayTemples Function */

    //Declare a function expression using const named displayTemples that uses an arrow function
    // to accept a list of temples as an array argument.
const displayTemples = (temples) =>{
    //Process each temple in the temple array using a forEach method and do the following for each temple item:
    temples.forEach((temple) => {
    //Create an HTML <article> element (createElement).
    const article= document.createElement("article");    
    //Create an HTML <h3> element and add the temple's templeName property to this new element.
    const h3 = document.createElement("h3");   
    h3.textContent = temple.templeName;
    //Create an HTML <img> element and add the temple's imageUrl property to the src attribute and 
    //the temple's location property to the alt attribute.
    const img = document.createElement("img"); 
    img.src = temple.imageUrl;
    img.alt = temple.location;
    //Append the <h3> element and the <img> element to the <article> element as children. (appendChild)
    article.appendChild(h3);
    article.appendChild(img);
    //Append the <article> element to the global templesElement variable declared in Step 2
    templesElement.appendChild(article);})
}

/* async getTemples Function using fetch()*/

    //Create another function expression called getTemples. Make it an async anonymous, arrow function.
const getTemples = async () => {
    //In the function, declare a const variable named response that awaits the built-in fetch method calling the temple data, absolute URL given in Step 2 above.
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"); 
    //Convert your fetch response into a JavaScript object (.json) and assign the result to the templeList global array variable you declared in Step 3 above. 
    //Make sure the the execution of the code waits here as well until it finishes.
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        // assign the result to the templeList global array variable you declared in Step 3 above. 
        //Make sure the the execution of the code waits here as well until it finishes
        //not use let, it's a local variable. Without the let or const prefix is assumed to be a global variable. 
        templeList  = await response.json();
        //The last statement in the getTemples function calls the displayTemples function and passes it the list of temples (templeList).
        displayTemples(templeList);
        console.log(templeList)
    }
}   

/* reset Function */

    //Clear the displayed list of temples.
const reset = () => {
    //get templesElement 
    const templesElement = document.querySelector("#temples");
    //clear all article elements
    templesElement.innerHTML = "";
}

if (Array.isArray(templeList)) {
    // templeList 是一個陣列，可以使用 filter
    console.error("templeList 是一個陣列。");
} else {
    console.error("templeList 不是一個陣列。");
}

/* sortBy Function */

    //Declare a function expression named sortBy
    //The function should accept a argument in a parameter named temples.
const sortBy = (templeList) => {
    //In this function, first call the reset function to clear the output.
    reset ();
    //Define a variable named filter that obtains the value of the HTML element with the ID of sortBy (The pull-down menu).
    const filter = document.querySelector("#sortBy").value;
    //Use a switch statement that uses the filter value as the selector responding to four (4) cases.
    //For each case, call the displayTemples function using an filter statement that filters the temples parameter for the four options provided.
    switch (filter) {
        //"utah": filter for temples where the location contains "Utah" as a string.
        case "utah":
            const utahTemples = templeList.filter((temple) => temple.location.includes("Utah"));
            displayTemples(utahTemples);
            break;
        //"nonutah": filter for temples where the location does not contain "Utah" as a string.
        case "notutah":
            const notUtahTemples = templeList.filter((temple) => !temple.location.includes("Utah"));
            displayTemples(notUtahTemples);
            break;
        //"older": filter for temples where the dedicated date is before 1950. (compare versus new Date(1950, 0, 1)).
        case "older":
            const olderTemples = templeList.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1));
            displayTemples(olderTemples);
            break;
        //"all": no filter. Just use temples as the argument.
        case "all":
            displayTemples(templeList);
            break;
    }
}
/* Event Listener */

    //Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function 
    //and sends a arrow function result with the templeList as the argument.
    document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});

getTemples();