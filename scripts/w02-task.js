/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Sin Yi Lin";
// 使用Date物件取得當前年份
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
let profilePicture = "images/me.jpg"

/* Step 3 - Element Variables */
let nameElement = document.getElementById("name");
let foodElement = document.getElementById("food");
let yearElement = document.querySelector("#year");
const imageElement = document.querySelector('img[src="images/me.jpg"]');

/* Step 4 - Adding Content */
nameElement.innerHTML =  `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear.toString();
imageElement.setAttribute ("src", profilePicture);
imageElement.setAttribute ("alt", "Profile image of profilePicture");

/* Step 5 - Array */
const favoriteFoods = ["fried rice", "chocolate", "pudding", "bread"];
foodElement.textContent = favoriteFoods.join(', ');
const favoriteFoods2 = ["banana","guava"];
favoriteFoods.push(favoriteFoods2);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;



