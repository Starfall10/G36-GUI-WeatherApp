import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import "./styles/LanguageModal.css";

const LanguageModal = ({ isOpen, onClose}) =>  {
    const {i18n } = useTranslation();
    const [isDarkMode] = useState(false);

    useEffect(() => {
        document.body.className = isDarkMode ? "dark-mode" : "light-mode";
      }, [isDarkMode]);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); //change the language
        localStorage.setItem ('language', lng) // save it to local storage
        onClose(); // close the modal
    };

    if (!isOpen) 
        return null;

    return (
        
        // add the languages
        <div className= "overlay" >
            <div className= "modal_content">
                <h2> Select Language</h2>
                <button onClick = {() => changeLanguage ('en')}>🇬🇧English</button>
                <button onClick = {() => changeLanguage ('fr')}>🇫🇷French</button>
                <button onClick = {() => changeLanguage ('es')}>🇪🇸Spanish</button>
                <button onClick = {() => changeLanguage ('du')}>🇳🇱 Dutch</button>

                <button className ="close-btn" onClick = {onClose}>❌Exit</button>
            </div>
        </div>
    );
};
export default LanguageModal;