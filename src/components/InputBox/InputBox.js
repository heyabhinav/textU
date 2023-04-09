import React,{useState} from "react";

function InputBox(props){
    const handleUpperCase = () => {
        setText(text.toUpperCase());
    }

    const handleLowerCase = () => {
        setText(text.toLowerCase());
    }

    const handleClear = () => {
        setText("");
    }

    const handleCopy = () => {
        var text = document.getElementById("inputBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        var newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
    }

    const handleChange = (event) => {
        console.log("Changed");
        setText(event.target.value);
    }
    
    const [text, setText] = useState("");
    
    return (
        <>
        <div className="container">
            <div className="mb-4 my-4">
                <h1 className="my-4">{props.heading}</h1>
                <textarea className={`form-control bg-${props.theme} text-${props.theme==='light'?'dark':'light'}`} id="inputBox" value={text} 
                onChange={handleChange} rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpperCase}>Upper Case</button>
            <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleLowerCase}>Lower Case</button>
            <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear</button>
            <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
            <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <div className="container my-4">
                <h1>Text Summary</h1>
                <h6>Words : {text.split(" ").length}</h6>
                <h6>Characters : {text.length}</h6>
                <h6>Reading time : {0.008 * text.split(" ").length}</h6>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </div>
        </>
    )
}

export default InputBox;