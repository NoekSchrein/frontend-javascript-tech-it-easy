// Opdracht 1 - Array Methoden
// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.

const tvName = inventory.map((inventoryItem) => {
    return inventoryItem.name;
})
console.log(tvName);

// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.

const tvSoldOut = inventory.filter((inventoryItem) => {
    return inventoryItem.originalStock - inventoryItem.sold === 0;
})
console.log(tvSoldOut);

// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.

const hasAmbiLight = inventory.filter((inventoryItems) => {
    return inventoryItems.options.ambiLight === true;
})
console.log(hasAmbiLight);

// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.
inventory.sort((a, b) => {
    return a.price - b.price;
})
console.log(inventory);


//Opdracht 2 - Elementen in de DOM plaatsen
// Tip: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon een oude vertrouwde for-loop voor!
// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

let tvsSold = 0;

for (let i = 0; i < inventory.length; i++) {
    tvsSold += inventory[i].sold;
}

console.log(tvsSold);

// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.

const SoldToGreen = document.getElementById("sold-green");
SoldToGreen.textContent = tvsSold;

// Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

let tvsPurchased = 0;

for (let i = 0; i < inventory.length; i++) {
    tvsPurchased += inventory[i].originalStock;
}

console.log(tvsPurchased);

// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.

const purchasedToBlue = document.getElementById("purchased-blue");
purchasedToBlue.textContent = tvsPurchased;

// Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.

let tvsToBeSold;
tvsToBeSold = tvsPurchased - tvsSold;

const toBeSoldToRed = document.getElementById("to-be-sold-red");
toBeSoldToRed.textContent = tvsToBeSold;


// Opdracht 3 - Array methoden en functies
// Opdracht 3a: Gebruik een array-methode om alle tv-merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.

// const arrayTvBrands = inventory.map((inventoryitem) => {
//   return inventoryitem.brand;
// })
//
// console.log(arrayTvBrands);
//
// const listTvBrandsOnPage = document.getElementById("list-tvbrands");
// listTvBrandsOnPage.textContent = arrayTvBrands;

// Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. Tip: vergeet deze functie -declaratie niet aan te roepen!

function getBrandsList(array) {

    const arrayTvBrands = inventory.map((inventoryItem) => {
        return inventoryItem.brand;
    })

    console.log(arrayTvBrands);

    const listTvBrandsOnPage = document.getElementById("list-tvbrands");
    listTvBrandsOnPage.textContent = arrayTvBrands;
}

getBrandsList(inventory);

//Opdracht 4 -Functies
// Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:

// Philips 43PUS6504/12 - 4K TV
// €379,-
// 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)

// Opdracht 4a: Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.

function tvToString(tv) {
    return `${tv.brand} ${tv.type} - ${tv.name}`
}

// Opdracht 4b: Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals 379 of 159) teruggeeft in het format €379,- of €159,-.

function priceNotation(price) {
    return `€${price},-`
}

// Opdracht 4c: Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Let op: om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.

function screenSizesToString (screenSizes) {
    let sizeString = " ";

    for (let i = 0; i < screenSizes.length; i++) {
        const screenSizesInches = screenSizes[i];
        const screenSizesCm = screenSizes[i] * 2.54;

        sizeString = `${screenSizesInches} inches (${screenSizesCm} cm)`;

        if (i < screenSizes.length -1) {
            sizeString = `${sizeString} | `;
        }
    }
    return sizeString;
}

// Opdracht 4d: Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

// Philips 43PUS6504/12 - 4K TV
// €379,-
// 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)

const tvInformationOnPage = document.getElementById("tv-formation");
tvInformationOnPage.textContent = tvToString({type: '43PUS6504/12', name: '4K TV', brand: 'Philips'});

const tvPriceOnPage = document.getElementById("price");
tvPriceOnPage.textContent = priceNotation(379)

const tvSizesOnPage = document.getElementById("screen-sizes");
tvSizesOnPage.textContent = screenSizesToString([43, 50, 58]);


// Opdracht 4e: Maak een herbruikbare functie die de informatie van alle tv's weergeeft op de pagina. Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.


function getTvsOnPage (arrayOfTvs) {
    const layoutTvs = arrayOfTvs.map((tv) => {
        return `${tv.brand}
    ${tv.type}
    ${tv.price}
    `})

    const tvListOnPage = document.getElementById("list-of-tvs");
    tvListOnPage.textContent =
}


