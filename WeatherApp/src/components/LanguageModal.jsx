import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import "./styles/LanguageModal.css";

const LanguageModal = ({ isOpen, onClose}) =>  {
    const {i18n } = useTranslation(); // get the i18n object from the useTranslation 
    const [isDarkMode] = useState(false); // state to mange the darkmode 

    // useEffect used to apply the dark/light mode to the body when clicked on the toggle
    useEffect(() => {
        document.body.className = isDarkMode ? "dark-mode" : "light-mode"; 
      }, [isDarkMode]);

    //Function to change the langauge
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); //change the language using the 18n
        localStorage.setItem ('language', lng) // save the selected language to local storage
        onClose(); // close the modal after selecting the langauge
    };

    if (!isOpen) 
        return null;

    return (
        
        // add buttons for languages changes
        <div className= "overlay" >
            <div className= "modal_content">
                <h2> Select Language</h2>
                <button onClick = {() => changeLanguage ('en')}>🇬🇧English</button>
                <button onClick = {() => changeLanguage ('fr')}>🇫🇷French</button>
                <button onClick = {() => changeLanguage ('es')}>🇪🇸Spanish</button>
                <button onClick = {() => changeLanguage ('nl')}>🇳🇱 Netherlands</button>

                <button className ="close-btn" onClick = {onClose}>❌Exit</button>
            </div>
        </div>
    );
};
export default LanguageModal;