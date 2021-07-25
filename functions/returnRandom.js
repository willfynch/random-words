import {getRandomWords} from "./getRandomWords.js";

const launchRandomButton = document.getElementById("launchRandomButton"); 
const quantityField = document.getElementById("quantityField");
const languageField = document.getElementById("languageField");
const wordsContainer = document.getElementById("wordsContainer"); 


launchRandomButton.addEventListener('click', function getWordsQuantity() {
    const quantity = quantityField.valueAsNumber; 
    const language = languageField.value; 
	const returnedWords = getRandomWords(language, quantity);
    displayCards(language, returnedWords); 
    setCardStyles(); 
});


const displayCards = (language, returnedWords) => {
    
    let html = ""; 
    let cardStyles = {
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s"
    };
    let wordStyles = {
        fontFamily: "$font"
    };

    returnedWords.forEach( (word) => {
        let url = ""; 
        console.log(language); 
        switch (language){
            case "french":
                url = `https://www.cnrtl.fr/definition/${word}`
                break;

            case "english":
                url = `https://www.merriam-webster.com/dictionary/${word}`
                break;
        }
        const card = `<div class="wordCard"><h5 class="word"><a target="_blank" href="${url}">${word}</a></h3></div>`
        html += card; 
    })

    wordsContainer.innerHTML = html; 


}

const setCardStyles = () => {

    const wordCards = document.getElementsByClassName("wordCard");
    const words = document.getElementsByClassName("word");

    console.log(wordCards);
    console.log(words); 

    for (let wordCard of wordCards){
        wordCard.classList.add("card");  
        wordCard.classList.add("text-center"); 
    }

    for (let word of words){
       
    }
    
     


}



