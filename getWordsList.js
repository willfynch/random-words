import { bdd } from "../bdd.js";

 


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

export {getWordsList}; 