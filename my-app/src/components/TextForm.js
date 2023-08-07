import React, { useState } from 'react';

export default function TextForm(props) {

            

            const handleUpClick = ()=>{
                let newText = text.toUpperCase();
                setText(newText);
                props.showAlert("All the letter is Capatalized!!", "success");
            }

            const handleLoClick = ()=>{
                let newText = text.toLowerCase();
                setText(newText);
                props.showAlert("Every letter is in lower case!!", "success")
            }

            const handleClClick = ()=>{
                let newText = ' ';
                setText(newText);
                
            }

            const handleOnChange = (event)=>{
                setText(event.target.value);
            }

            const [text, setText] = useState('enter text here');
  return (
    <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>{props.heading}</h2>
            <div className="mb-3">
            <label htmlFor="myBox" className="form-label"></label>
            <textarea className="form-control" value={text} id="myBox" style={{backgroundColor: props.mode==='dark'?'#cccccc':'white'}} rows="8" onChange={handleOnChange}></textarea>
            </div>

            <button className="btn btn-primary mx-3" onClick={handleUpClick}>convert to uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>convert to lowercase</button>
            <button className="btn btn-primary mx-3" onClick={handleClClick}>Clear</button>
        </div>
        

        <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>it takes approximately {0.008 * text.split(" ").length} minutes to read completely!!</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter your text to preview"}</p>
        </div>
    </>
  )
}
