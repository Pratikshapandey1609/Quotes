
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const apiKey = "VwBGGEojyHCJYa2lch+Ptg==uefIvmeMdLg7FMIF";
const apiUrl = "https://api.api-ninjas.com/v1/quotes";

async function getQuote(url) {
    try {
        const response = await fetch(url, {
            headers: {
                'X-Api-Key': apiKey
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        quoteElement.innerHTML = data[0].quote;
        authorElement.innerHTML = data[0].author;
    } catch (error) {
        console.error('Error fetching the quote:', error);
        quoteElement.innerHTML = "Failed to fetch quote.";
        authorElement.innerHTML = "";
    }
}

getQuote(apiUrl);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quoteElement.innerHTML + "---by" + authorElement.innerHTML, "Tweet Window" , "width=600,  heightt=300");
}
