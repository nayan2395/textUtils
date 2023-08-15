import React from 'react'

export default function About(props) {
    return (
        <div className={`container text-${props.mode === "dark" ? "white" : "dark"}`}>
            <h1 className='my-2'>About Text Utils</h1>
            <p className='fs-2 my-5'>
                Free software utility which allows you to convert text to uppercase or to lowercase and remove extra spaces. It also counts number of words, characters. Also calculates average time to read the text.
            </p>
        </div>
    )
}
