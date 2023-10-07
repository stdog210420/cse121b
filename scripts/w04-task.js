/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Sin Yi Lin",
    photo: "images/me.jpg",
    favoriteFoods: ["Bread","Cookies","Cakes","Coke","Noodles","Guava","Papaya","Banana", "Pearl"],
    hobbies:["Listening to music", "Climbing mountains", "Running","Riding bicycles", "Traveling","Watching TV","Dancing ballet", "Practicing judo"],
    placesLived: [],

};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push( 
    {
        place: "Tainan city, Taiwan",
        length: "28 year",
    });
    myProfile.placesLived.push( 
    {
        place: "Puli Township, Nantou County, Taiwan",
        length: "6 year",
    });
    myProfile.placesLived.push( 
        {
            place: "Taichung city, Taiwan",
            length: "4 month",
        });

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */

//get the element of photo
const photoElement = document.querySelector("#photo");
//set src property 
photoElement.src = myProfile.photo;
//update alt property
photoElement.alt = myProfile.name;

/* Favorite Foods List*/

//find parent element <u1> to add
const favoriteFoodsList = document.querySelector("#favorite-foods");

//Use a forEach loop to iterate over the favoriteFoods array.
myProfile.favoriteFoods.forEach((food) => {
    //create an HTML <li> element 
    const listItem= document.createElement("li");
    //set <li> content using items in myProfile.favoriteFoods
    listItem.textContent = food;
    //add <li> to <u1>
    favoriteFoodsList.appendChild(listItem);
});


/* Hobbies List */
//Repeat the previous process of creating a list of items for each hobby in the hobbies property of the object
//appending each item to the HTML <ul> element with an ID of hobbies.

//find parent element <u1> to append
const hobbyList = document.querySelector("#hobbies");
//Use a forEach loop to iterate over the hobbies array.
myProfile.hobbies.forEach((hobby) => {
    //create an HTML <li> element 
    const listItem= document.createElement("li");
    //set <li> content using items in myProfile.hobbies
    listItem.textContent = hobby;
    //Append <li> elements to <u1> element
    hobbyList.appendChild(listItem);
});

/* Places Lived DataList */
//For each object in the placesLived property:
//Create an HTML <dt> element and put its place property in the <dt> element.
//Create an HTML <dd> element and put its length property in the <dd> 

//find parent element <d1> to add
const placesList = document.querySelector("#places-lived");
// Iterate through each object in the 'placesLived' array.
myProfile.placesLived.forEach((placeInfo) => {
    // Create a <dt> element for the 'place' property.
    const dtElement = document.createElement("dt");
    dtElement.textContent = placeInfo.place;
  
    // Create a <dd> element for the 'length' property.
    const ddElement = document.createElement("dd");
    ddElement.textContent = placeInfo.length;
  
    // Append the <dt> and <dd> elements to the <dl> element.
    placesList.appendChild(dtElement);
    placesList.appendChild(ddElement);
  });


