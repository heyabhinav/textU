import React,{useState} from "react";

function InputBox(props){
    const handleUpperCase = () => {
        setText(text.toUpperCase());
        props.showAlert("success", "Text converted to Upper Case");
    }

    const handleLowerCase = () => {
        setText(text.toLowerCase());
        props.showAlert("success", "Text converted to Lower Case");
    }

    const handleClear = () => {
        setText("");
        props.showAlert("success", "Text Cleared");
    }

    const handleCopy = () => {
        var text = document.getElementById("inputBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("success", "Text Copied to Clipboard");
    }

    const handleExtraSpaces = () => {
        var newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("success", "Extra Spaces Removed");
    }
    
    const handleNewLine = () => {
        var newtext = text.split(/[\n]+/);
        setText(newtext.join(" "));
        props.showAlert("success", "New Line Removed");
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
            <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleNewLine}>Remove New Line</button>
            <div className="container my-4">
                <h1>Text Summary</h1>
                <p>Words : {text.split(" ").length}</p>
                <p>Characters : {text.length}</p>
                <p>Reading time : {0.008 * text.split(" ").length}</p>
                <br></br>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </div>
        </>
    )
}

export default InputBox;