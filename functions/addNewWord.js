import { bdd } from "../bdd.js";

const addNewWordButton = document.getElementById('addNewWordButton'); 
const addNewWordField =  document.getElementById('addNewWordField'); 
const addNewWordSelectLanguageField =  document.getElementById('addNewWordSelectLanguageField');



addNewWordButton.addEventListener('click', function getNewWordInfos() {

    let newWord = addNewWordField.value; 
    let language = addNewWordSelectLanguageField.value;

    addNewWord(newWord, language);
});

const addNewWord = (newWord, language) => {


    

}


