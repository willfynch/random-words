import { getWordsList } from "./getWordsList.js";

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

export {getRandomWords}; 

