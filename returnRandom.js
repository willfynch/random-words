const launchRandomButton = document.getElementById("launchRandomButton"); 
const quantityField = document.getElementById("quantityField");
const languageField = document.getElementById("languageField");
const wordsContainer = document.getElementById("wordsContainer"); 


launchRandomButton.addEventListener('click', function getWordsQuantity() {
    const quantity = quantityField.valueAsNumber; 
    const language = languageField.value; 
	const returnedWords = getRandomWords(language, quantity);
    displayCards(returnedWords); 
    setCardStyles(); 
});


const displayCards = (returnedWords) => {

    let html = ""; 
    let cardStyles = {
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s"
    };
    let wordStyles = {
        fontFamily: "$font"
    };

    returnedWords.forEach( (word) => {
        const card = `<div class="wordCard"><h5 class="word">${word}</h3></div>`
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

}

const getRandomWords = (language, quantity) => { 
    const wordsList = getWordsList(language); 
    console.log(wordsList); 
    
    let returnedWords = [];  

    if (wordsList.length < quantity ){
        quantity = wordsList.length; 
    }

    while (returnedWords.length < quantity){

        let number = Math.floor(Math.random() * wordsList.length);

        if(!returnedWords.includes(wordsList[number])){
            returnedWords.push(wordsList[number]);
        }
    }

    console.log(returnedWords); 
    return returnedWords;
}

const getWordsList = (language) => {
    let wordsList;
    switch (language){
        case "french":
            wordsList = bdd.french;
            break;

        case "english":
            wordsList = bdd.english;
            break; 
    }
    return wordsList; 
}

const bdd = {
    french: [
        "varappe",
        "chaille",
        "sémillant",
        "guinder",
        "grésil",
        "noria",
        "affidé", 
        "aubier"
    ],

    english: [
        "venue",
        "minute",
        "foster",
        "utmost",
        "whereby",
        "paddling",
        "incurred",
        "withhold"
    ]
}





