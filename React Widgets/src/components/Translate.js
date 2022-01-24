// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM translation api key

import React, { useState } from 'react'
import Convert from './Convert'
import Dropdown from './Dropdown'

const options = [
    {
        label : 'Afrikaans',
        value : 'af'
    },
    {
        label : 'Arabic',
        value : 'ar'
    },
    {
        label : 'Hindi',
        value : 'hi'
    },
    {
        label : 'Urdu',
        value : 'ur'
    }
]

const Translate = () => {

    const [language, setLanguage] = useState([1])
    const [text, setText] = useState('')

    return(
        <div>
            <div className = 'ui form'>
                <div className = 'field'>
                    <label>Enter a Text</label>
                    <input value = {text} onChange = { (e) => setText(e.target.value) } />
                </div>
            </div>
            <Dropdown 
               label = 'Select a Language'
               options = {options} 
               selected = {language} 
               onSelectedChange = {setLanguage} 
            />
            <hr />
            <h3 className = 'ui header'>output</h3>
            <Convert  text ={text} language ={language} />
        </div>
    )
}

export default Translate