import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const [count, setCount] = useState({ words: 0, characters: 0 })
    const handleUpperCaseClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.alert("Text converted to UPPERCASE!", "success")

    }
    const handleLowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.alert("Text converted to lowercase!", "success")
    }

    const handleOnchange = (event) => {
        setText(event.target.value)
        countWordsCharacter(event.target.value);
    }

    const handleClearText = () => {
        setText('');
        setCount({ words: 0, characters: 0 })
        props.alert("Text cleared!", "success")
    }

    const handleCopy = () => {
        const copyText = document.getElementById('text-box');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.alert("Copied to clipboard!", "success")
    }

    const handleRemoveExtraSpace = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.alert("Extra spaces removed!", "success")
    }

    const countWordsCharacter = (text) => {
        const totalWords = text.split(" ")
        const totalWordsCount = totalWords.length
        const emptWordCount = totalWords.filter(a => a.length === 0).length;
        const originalWordCount = totalWordsCount - emptWordCount
        const characters = text.length;
        setCount({ words: originalWordCount, characters })
    }

    return (
        <div className={`text-${props.mode === 'light' ? 'dark' : 'light'}`} >
            <div className="container">
                <div className="mb-3">
                    <h2><label htmlFor="text-box" className="form-label" >{props.heading}</label></h2>
                    <textarea className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'light' ? 'light' : 'dark'}`} id="text-box" rows="8" value={text} onChange={handleOnchange} placeholder='Enter your text here'></textarea>
                    <div className='my-3' id="text-util-btns">
                        <input type="button" className={`btn btn-${props.buttonColor}`} onClick={handleUpperCaseClick} value='Convert to UPPERCASE' />
                        <input type="button" className={`btn btn-${props.buttonColor} mx-2`} onClick={handleLowerCaseClick} value='Convert to lowercase' />
                        <input type="button" className={`btn btn-${props.buttonColor} mx-2`} onClick={handleClearText} value='Clear text' />
                        <input type="button" className={`btn btn-${props.buttonColor} mx-2`} onClick={handleCopy} value='Copy text' />
                        <input type="button" className={`btn btn-${props.buttonColor} mx-2`} onClick={handleRemoveExtraSpace} value='Remove extra space' /></div>

                </div >
            </div>
            <div className="container">
                <h3>Your Text Summary</h3>
                <div className="mt-3">
                    <p>{count.words} words and {count.characters} characters</p>
                    <p>{0.008 * text.split(" ").length} minutes to read</p>
                </div>
                <div className="my-3">
                    <h3>Preview Your Text</h3>
                    <p>{text}</p>
                </div>
            </div>
        </div >


    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}

