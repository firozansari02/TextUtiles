import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Coverted to uppercase!", "success")
    }
    const handleloClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText)
        props.showAlert("Coverted to lowercase!", "success")
    }
    const handleclearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!", "success")
    }
    const handleOnchange = (event) => {
        setText(event.target.value)
        
    }

    const handlecopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!", "success")
    }

    const handleextraspaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success")
    }


    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1 className='mb-2'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleextraspaces}>Remove extra Spaces</button>
                
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text: "Nothing to preview!"}</p>
            </div>
        </>
    )
}
