// console.log("connected");

// API URL
const baseUrl = "https://xw7sbct9v6-1.algolianet.com/1/indexes/products/query?x-algolia-agent=Algolia%20for%20vanilla%20JavaScript%203.32.1&x-algolia-application-id=XW7SBCT9V6&x-algolia-api-key=6b5e76b49705eb9f51a06d3c82f7acee";

// API Headers
const headers = {
    'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
    "accept": "application/json",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site"
}


// funtion to create shoeBox UI
let CreateShoeBox = (shoe) => {
    // creating shoe thumbmail
    let thumbmail = document.createElement("img");
    thumbmail.setAttribute('src', shoe['thumbnail_url'])

    // creating shoe title
    let shoeName = document.createElement('h5')
    shoeName.appendChild(document.createTextNode(shoe['name']));

    // creating shoe price
    let shoePrice = document.createElement('h4')
    shoePrice.appendChild(document.createTextNode(`\$${shoe['price']}`));
    //appending in div and setting class Shoebox
    let shoeBox = document.createElement('div');
    shoeBox.classList.add("shoeBox");
    shoeBox.appendChild(thumbmail);
    shoeBox.appendChild(shoeName);
    shoeBox.appendChild(shoePrice);
    // appending in already created div
    let shoeGrid = document.getElementById("shoesGrid");
    shoeGrid.appendChild(shoeBox);
}

// funtction to make API CALL
let GetApi = async (query = "trending") => {
    // Clearing the Div
    document.getElementById('shoesGrid').innerHTML = "";
    console.log(query);
    let q = `{"params": "query=${query}&hitsPerPage=${48}"}`;
    //API Call
    let response = await fetch(baseUrl, {
        method: "POST",
        headers: headers,
        body: q,
    });
    // converting data to JSON
    let data = await response.json();
    console.log(data)
    // Creating UI for each Shoe
    data['hits'].forEach(element => {
        //Creating UI
        //function Loc - index.js
        CreateShoeBox(element);
    });

}

// function to change brand on click 
let GetBrand = (brand) => {
    console.log(brand.value);
    // creating UI
    // Function LOC - index.js
    GetApi(brand.value);
}
//init call 
GetApi();