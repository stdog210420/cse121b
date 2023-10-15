// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

function compare(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    else if (a.name > b.name) {
        return 1;
    }
    // a must be equal to b
    else return 0;
}
function sortPokemon(list) {
    let sortedList = list.sort(compare);
    return sortedList;
}

async function getPokemon(url) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const data = await response.json();
        doStuff(data);
    }
}
async function getPokemonList(url) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const data = await response.json();
        doStuffList(data);
    }
}
function doStuff(data) {
    const outputElement = document.querySelector("#output");
    results = data;
    //const html = ...: 這一行創建了一個包含 HTML 代碼的值，使用了反引號（`）來表示模板字符串。模板字符串允許你在字符串中嵌入 JavaScript 變量或表達式，並在需要時動態生成 HTML 內容
    //這是一個 <h2> 標籤，其中包含了一個 ${results.name} 值。它被替換為從 results 對象中獲取的 Pokemon 名稱。生成一個 <h2> 標題，標題內容是 Pokemon 的名稱
    //這是一個 <img> 標籤，其中包含一個 ${results.sprites.front_default}值。它被替換為 Pokemon 的圖像 URL。alt 屬性也使用 ${results.name} 值，以提供圖像的替代內容
    const html = `<h2>${data.name}</h2>
    <img src="${data.sprites.front_default}" alt="Image of ${data.name}">`;
    //這一行將創建的 HTML 字符串 html 插入到頁面上的某個 HTML 元素（outputElement）的 innerHTML 屬性中
    outputElement.innerHTML = html;
    console.log("first: ", results);
}
function doStuffList(data){
    console.log(data);
    const pokeListElement = document.querySelector("#outputList");
    let pokeList = data.results;
    pokeList = sortPokemon(pokeList);
    pokeList.forEach((currentItem) => {
        const html = `<li>${currentItem.name}</li>`;
        // note the += here...
        pokeListElement.innerHTML += html;
    });

}

getPokemon(url);
console.log("second: ", results);
getPokemonList(urlList);
